// File: ./src/flow/init-account.tx.js

import * as fcl from "@onflow/fcl";
import * as t from "@onflow/types";

export async function accountIsInitialized() {
  let currUser = await fcl.currentUser().snapshot();
  if (currUser.loggedIn === null) {
    return false;
  }
  return await fcl
    .send([
      fcl.script`
          import BnGNFT from 0xProfile

          pub fun main(targetAddress: Address) : Bool {
              let nftOwner = getAccount(targetAddress)
          
              let capability = nftOwner.getCapability<&{BnGNFT.BnGNFTCollectionPublic}>(BnGNFT.CollectionPublicPath)
              
              return capability.borrow() != nil
          }
        `,
      fcl.args([fcl.arg(currUser.addr, t.Address)]),
    ])
    .then(fcl.decode)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function initAccount() {
  let isInitialized = accountIsInitialized();

  if (isInitialized === true) {
    return;
  } else {
    await fcl
      .send([
        // Transactions use fcl.transaction instead of fcl.script
        // Their syntax is a little different too
        fcl.transaction`
        import BnGNFT from 0xProfile
        import NonFungibleToken from 0x1d7e57aa55817448
        transaction {
          prepare(acct: AuthAccount) {

            // Create a new empty collection
            let collection <- BnGNFT.createEmptyCollection()

            // store the empty NFT Collection in account storage
            acct.save<@NonFungibleToken.Collection>(<-collection, to: BnGNFT.CollectionStoragePath)

            // create a public capability for the Collection
            acct.link<&{BnGNFT.BnGNFTCollectionPublic}>(BnGNFT.CollectionPublicPath, target: BnGNFT.CollectionStoragePath)
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
        return fcl.tx(txId).onceSealed();
      })
      .catch((err) => {
        console.log("err: " + err.stack);
        return;
      });
  }
}
