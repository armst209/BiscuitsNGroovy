// BnGNFT.cdc
//
// This is a complete version of the ExampleNFT contract
// that includes withdraw and deposit functionality, as well as a
// collection resource that can be used to bundle NFTs together.
//
// It also includes a definition for the Minter resource,
// which can be used by admins to mint new NFTs.
//
// Learn more about non-fungible tokens in this tutorial: https://docs.onflow.org/docs/non-fungible-tokens

pub contract BnGNFTContract {

    // Declare the NFT resource type
    pub resource NFT {
        // The unique ID that differentiates each NFT
        pub let id: UInt64
        // Initialize the field in the init function
        init(initID: UInt64) {
            self.id = initID
        }
    }

    // We define this interface purely as a way to allow users
    // to create public, restricted references to their NFT Collection.
    // They would use this to only expose the deposit, getIDs,
    // and idExists fields in their Collection
    pub resource interface NFTReceiver {

        pub fun deposit(token: @NFT, metadata: {String:String})

        pub fun getIDs(): [UInt64]

        pub fun idExists(id: UInt64): Bool

        pub fun getMetadataByID(id: UInt64): {String: String}
    }

    // The definition of the Collection resource that
    // holds the NFTs that a user owns
    pub resource Collection: NFTReceiver {
        // dictionary of NFT conforming tokens
        // NFT is a resource type with an `UInt64` ID field
        pub var ownedNFTs: @{UInt64: NFT}
        pub var NFTMetadata: {UInt64: { String : String }}

        // Initialize the NFTs field to an empty collection
        init () {
            self.ownedNFTs <- {}
            self.NFTMetadata = {}
        }

        // withdraw 
        //
        // Function that removes an NFT from the collection 
        // and moves it to the calling context
        pub fun withdraw(withdrawID: UInt64): @NFT {
            // If the NFT isn't found, the transaction panics and reverts
            let token <- self.ownedNFTs.remove(key: withdrawID)!

            return <-token
        }

        // deposit 
        pub fun deposit(token: @NFT, metadata:{String:String}) {
            // add the new token to the dictionary with a force assignment
            // if there is already a value at that key, it will fail and revert
            self.NFTMetadata[token.id] = metadata
            self.ownedNFTs[token.id] <-! token
        }

        // idExists checks to see if a NFT 
        // with the given ID exists in the collection
        pub fun idExists(id: UInt64): Bool {
            return self.ownedNFTs[id] != nil
        }

        // getIDs returns an array of the IDs that are in the collection
        pub fun getIDs(): [UInt64] {
            return self.ownedNFTs.keys
        }

        pub fun getMetadataByID(id: UInt64): {String: String} {
            return self.NFTMetadata[id]!
        }

        destroy() {
            destroy self.ownedNFTs
        }
    }

    // creates a new empty Collection resource and returns it 
    pub fun createEmptyCollection(): @Collection {
        return <- create Collection()
    }

    // NFTMinter
    //
    // Resource that would be owned by an admin or by a smart contract 
    // that allows them to mint new NFTs when needed
    pub resource NFTMinter {

        // the ID that is used to mint NFTs
        // it is only incremented so that NFT ids remain
        // unique. It also keeps track of the total number of NFTs
        // in existence
        pub var idCount: UInt64

        init() {
            self.idCount = 1
        }

        // mintNFT 
        //
        // Function that mints a new NFT with a new ID
        // and returns it to the caller
        pub fun mintNFT(): @NFT {
            
            // create a new NFT
            var newNFT <- create NFT(initID: self.idCount)

            // change the id so that each ID is unique
            self.idCount = self.idCount + 1 as UInt64
            
            return <-newNFT
        }
    }

	init() {
		// // store an empty NFT Collection in account storage
        // self.account.save(<-self.createEmptyCollection(), to: /storage/NFTCollection)

        // // publish a reference to the Collection in storage
        // self.account.link<&{NFTReceiver}>(/public/NFTReceiver, target: /storage/NFTCollection)

        // store a minter resource in account storage
        self.account.save(<-create NFTMinter(), to: /storage/NFTMinter)
	}
}
 

