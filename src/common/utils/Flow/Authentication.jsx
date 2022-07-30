// // File: ./src/auth-cluster.js

// import { useState, useEffect } from "react";
// import * as fcl from "@onflow/fcl";
// import { accountIsInitialized } from "../flow";

// export function AuthCluster() {
//   const [user, setUser] = useState({ loggedIn: null });
//   useEffect(() => fcl.currentUser().subscribe(setUser), []);

//   function setupAccount() {
//     const txId = await fcl
//       .send([
//         // Transactions use fcl.transaction instead of fcl.script
//         // Their syntax is a little different too
//         fcl.transaction`
//           import BnGNFTContract from 0xProfile //todo
//           transaction {
//               prepare(acct: AuthAccount) {

//               let collection <- BnGNFTContract.createEmptyCollection()

//               acct.save<@BnGNFTContract.Collection>(<-collection, to: /storage/BnGNFTCollection)

//               acct.link<&{BnGNFTContract.NFTReceiver}>(/public/NFTReceiver, target: /storage/BnGNFTCollection)
//               }
//           }
//         `,
//         fcl.payer(fcl.authz), // current user is responsible for paying for the transaction
//         fcl.proposer(fcl.authz), // current user acting as the nonce
//         fcl.authorizations([fcl.authz]), // current user will be first AuthAccount
//         fcl.limit(1000), // set the compute limit
//       ])
//       .then(fcl.decode);
//     fcl.tx(txId).onceSealed();
//   }

//   if (user.loggedIn) {
//     return (
//       <div>
//         <span>{user?.addr ?? "No Address"}</span>
//         <button onClick={fcl.unauthenticate}>Log Out</button>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <button onClick={fcl.logIn}>Log In</button>
//         <button onClick={fcl.signUp}>Sign Up</button>
//       </div>
//     );
//   }
// }
