// File: ./src/flow/init-account.tx.js

import * as fcl from "@onflow/fcl"
import * as t from "@onflow/types"

export async function accountIsInitialized() {
    let currUser = await fcl.currentUser().snapshot();
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
        fcl.args([
        fcl.arg(currUser.addr, t.Address),
        ])
    ])
    .then(fcl.decode)
    .catch(err => {
        console.log(err);
    })
}

export async function initAccount() {
  let newStatus = await accountIsInitialized();
  if (newStatus === "Account is setup"){
    return;
  } else {
    const txId = await fcl
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
    .then(fcl.decode);
    fcl.tx(txId).onceSealed();
    return;
  }
}