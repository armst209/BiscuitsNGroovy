import BnGNFTContract from 0xProfile

// This transaction transfers an NFT from one user's collection
// to another user's collection.
transaction (receiverAddress Address, resourceUri: String, metadataUri: String){

    // The field that will hold the NFT as it is being
    // transferred to the other account
    let minterRef: @BnGNFTContract.NFTMinter

    // Admin account authorizer ONLY
    prepare(acct: AuthAccount) {

        // Borrow a capability for the NFTMinter in storage
        self.minterRef = acct.borrow<&BnGNFTContract.NFTMinter>(from: /storage/NFTMinter)
            ?? panic("Could not borrow minter reference")

    }

    execute {
        // Get the recipient's public account object
        let recipient = getAccount(receiverAddress)

        // Get the Collection reference for the receiver
        // getting the public capability and borrowing a reference from it
        let receiverRef = recipient.getCapability<&{BnGNFTContract.NFTReceiver}>(/public/NFTReceiver)
            .borrow()
            ?? panic("Could not borrow receiver reference")

        // Use the minter reference to mint an NFT, which deposits
        // the NFT into the collection that is sent as a parameter.
        let newNFT <- self.minterRef.mintNFT()

        // Deposit the NFT in the receivers collection
        receiverRef.deposit(token: <-self.newNFT, metadata: {"resourceUri": resourceUri, "metadataUri": metadataUri})
    }
}