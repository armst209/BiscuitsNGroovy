// File: ./src/flow/init-account.tx.js

import * as fcl from "@onflow/fcl";
import * as t from "@onflow/types";

export async function accountIsInitialized() {
  console.log("before current user");
  let currUser = await fcl.currentUser().snapshot();
  console.log("current user");
  console.log(currUser);
  if (currUser.loggedIn === null) {
    return false;
  }
  console.log("after current user");
  return await fcl
    .send([
      fcl.script`
          import BnGNFTContract from 0xProfile

          pub fun main(targetAddress: Address) : String {
              let nftOwner = getAccount(targetAddress)
          
              let capability = nftOwner.getCapability<&{BnGNFTContract.NFTReceiver}>(/public/NFTReceiver)
          
              let receiverRef = capability.borrow()
              if receiverRef == nil {
                return "Account is not setup"
              }
              return "Account is setup"
          }
        `,
      fcl.args([fcl.arg(currUser.addr, t.Address)]),
    ])
    .then(fcl.decode)
    .then((res) => {
      if (res == "Account is not setup") {
        return false;
      } else if (res == "Account is setup") {
        return true;
      } else {
        console.log("error");
        return false;
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function initAccount() {
  let isInitialized = accountIsInitialized();
  console.log("acc initialize done");
  if (isInitialized === true) {
    return;
  } else {
    await fcl
      .send([
        // Transactions use fcl.transaction instead of fcl.script
        // Their syntax is a little different too
        fcl.transaction`
        import BnGNFTContract from 0xProfile

        transaction {
            prepare(acct: AuthAccount) {
        
            let collection <- BnGNFTContract.createEmptyCollection()
        
            acct.save<@BnGNFTContract.Collection>(<-collection, to: /storage/BnGNFTCollection)
        
            acct.link<&{BnGNFTContract.NFTReceiver}>(/public/NFTReceiver, target: /storage/BnGNFTCollection)
            }
        }
      `,
        fcl.payer(fcl.authz), // current user is responsible for paying for the transaction
        fcl.proposer(fcl.authz), // current user acting as the nonce
        fcl.authorizations([fcl.authz]), // current user will be first AuthAccount
        fcl.limit(1000), // set the compute limit
      ])
      .then(fcl.decode)
      .then((txId) => {
        console.log("spinner");
        return fcl.tx(txId).onceSealed();
      })
      .catch((err) => {
        console.log("err: " + err.stack);
        return;
      });
  }
}
