import BnGNFTContract from 0xProfile

pub fun main(targetAddress: Address) : {UInt64 : {String : String}} {
    let nftOwner = getAccount(targetAddress)

    let capability = nftOwner.getCapability<&{BnGNFTContract.NFTReceiver}>(/public/NFTReceiver)

    let receiverRef = capability.borrow()
        ?? panic("Could not borrow the receiver reference")
    let IDs = receiverRef.getIDs()
    let metadata = {}
    for id in IDs {
        metadata[id] = receiverRef.getMetadata(id: id)
    }
    return metadata
}