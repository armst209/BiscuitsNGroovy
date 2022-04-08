// File: ./src/flow/init-account.tx.js

import * as fcl from "@onflow/fcl";
import * as t from "@onflow/types";

var dev_is_inited_script = fcl.script`import BnGNFTContract from 0xProfile

pub fun main(targetAddress: Address) : Bool {
    let nftOwner = getAccount(targetAddress)

    let capability = nftOwner.getCapability<&{BnGNFTContract.NFTReceiver}>(/public/NFTReceiver)
    
    return capability.borrow() != nil
}`;

var prod_is_inited_script = fcl.script`
import BnGNFT from 0xProfile

pub fun main(targetAddress: Address) : Bool {
    let nftOwner = getAccount(targetAddress)

    let capability = nftOwner.getCapability<&{BnGNFT.BnGNFTCollectionPublic}>(BnGNFT.CollectionPublicPath)
    
    return capability.borrow() != nil
}
`;

var is_inited_script = null;
if (process.env.REACT_APP_ENV === "prod") {
  is_inited_script = prod_is_inited_script;
} else {
  is_inited_script = dev_is_inited_script;
}

export async function accountIsInitialized() {
  let currUser = await fcl.currentUser().snapshot();
  if (currUser.loggedIn === null) {
    return false;
  }

  return await fcl
    .send([is_inited_script, fcl.args([fcl.arg(currUser.addr, t.Address)])])
    .then(fcl.decode)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}

//init script differs between dev and prod
var dev_init_tx = fcl.transaction`import BnGNFTContract from 0xProfile //todo
  // This transaction configures a user's account
  // to use the NFT contract by creating a new empty collection,
  // storing it in their account storage, and publishing a capability
  transaction {
    prepare(acct: AuthAccount) {
 
      // Create a new empty collection
      let collection <- BnGNFTContract.createEmptyCollection()
 
      // store the empty NFT Collection in account storage
      acct.save<@BnGNFTContract.Collection>(<-collection, to: /storage/BnGNFTCollection)
 
      // create a public capability for the Collection
      acct.link<&{BnGNFTContract.NFTReceiver}>(/public/NFTReceiver, target: /storage/BnGNFTCollection)
    }
  }`;

var prod_init_tx = fcl.transaction`
import BnGNFT from 0xProfile //todo
import NonFungibleToken from 0x1d7e57aa55817448
// This transaction configures a user's account
// to use the NFT contract by creating a new empty collection,
// storing it in their account storage, and publishing a capability
transaction {
  prepare(acct: AuthAccount) {

    // Create a new empty collection
    let collection <- BnGNFT.createEmptyCollection()

    // store the empty NFT Collection in account storage
    acct.save<@NonFungibleToken.Collection>(<-collection, to: BnGNFT.CollectionStoragePath)

    // create a public capability for the Collection
    acct.link<&{BnGNFT.BnGNFTCollectionPublic}>(BnGNFT.CollectionPublicPath, target: BnGNFT.CollectionStoragePath)
  }
}`;
var init_tx = null;

if (process.env.REACT_APP_ENV === "prod") {
  init_tx = prod_init_tx;
} else {
  init_tx = dev_init_tx;
}

export async function initAccount() {
  let isInitialized = await accountIsInitialized();
  if (isInitialized === true) {
    return;
  } else {
    await fcl
      .send([
        // Transactions use fcl.transaction instead of fcl.script
        // Their syntax is a little different too
        init_tx,
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
        console.log("err: ");
        console.log(err);
        return;
      });
  }
}
