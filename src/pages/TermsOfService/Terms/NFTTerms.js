import React from "react";
import "./NFTTermsStyles.scss";
import NotHomeNavigation from "../../../components/Navbars/NotHomeNavigation/NotHomeNavigation";
import Footer from "../../../components/Footer/Footer";

function NFTTerms({
  loginPopup,
  showLoginPopup,
  showSignUpPopup,
  signUpPopup,
}) {
  return (
    <section id="nft-terms">
      <NotHomeNavigation
        loginPopup={loginPopup}
        signUpPopup={signUpPopup}
        showLoginPopup={showLoginPopup}
        showSignUpPopup={showSignUpPopup}
      />

      <div className="nft-terms-wrapper">
        <div className="nft-terms-container">
          <h1>BISCUITS N GROOVY, LLC: TERMS REGARDING NON-FUNGIBLE TOKENS</h1>
          <p>
            <ol>
              <li>
                <strong>Part of Contract. </strong>
                These “Biscuits n Groovy LLC Terms Regarding Non-Fungible
                Tokens” (“NFT Terms”) are a part of three contracts: first, the
                Terms of Service between BnG and its subscribers
                (“Subscribers”); second, the contract between BnG and the Visual
                Artists whose images are used as artwork by a Musical Artist;
                and third, the contract between BnG and the Musical Artist.
                These NFT Terms are effective on the same date as the Terms of
                Service/contract between BnG each Subscriber, Musical Artist,
                and Visual Artist, respectively.
              </li>
              <li>
                <strong>Purpose of Agreement. </strong>
                At the time Subscribers purchase music through the BnG platform
                at{" "}
                <a
                  href="https://www.bngroovy.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.bngroovy.com/
                </a>{" "}
                (“Platform”), BnG will mint for Subscriber a Non-Fungible Token
                representing the artwork associated with that musical purchase
                (“Artwork”). As used in this Agreement, Non-Fungible Token
                (“NFT”) means a digital identifier, typically a long string of
                numbers, letters, and characters, that enables the owner of the
                NFT to view or otherwise access the digital media file
                associated with that identifier. The NFT digitally directs to
                the Artwork that resides in a secure computer network. These NFT
                Terms and the Smart Contract relating to each NFT govern
                obligations and rights of Subscribers in the NFT, rights of
                Visual Artists in the Artwork, and revenue sharing.
              </li>
              <li>
                <strong>Copyright and Rights of Attribution. </strong>
                As among BnG, its Subscribers, and Visual Artists, the Visual
                Artists retain ownership of copyright in their Artwork. The
                Visual Artist also retains the right to have their name
                associated with their Artwork. Ownership of the NFT by the
                Subscriber does not transfer ownership of the copyright in the
                Artwork.
              </li>
              <li>
                <strong>Rights in NFTs. </strong>

                <ul className="rights-nft-alpha-list">
                  <li>
                    <em>Grant of License. </em>
                    Visual Artists grant Subscribers and subsequent owners of
                    the NFT to which the Artwork relates (1) the right to
                    display the NFT within Subscriber’s digital gallery located
                    on the Platform, and (2) the right to take screen shots of
                    the Artwork for personal use (and not for resale, trading,
                    gifting, or any commercial use). These rights are in
                    perpetuity; provided, however, that in the event the
                    intellectual property rights of Visual Artist in the Artwork
                    becomes the subject of a third party claim, Visual Artist
                    and BnG retain the right to suspend the display of the
                    Artwork or the further use, sale, or transfer of the NFT
                    relating to the Artwork.
                  </li>
                  <li>
                    <em> Grant of License. </em>
                    Visual Artist grants Subscriber the right to sell and trade
                    the NFT to other Subscribers on the Platform, in accordance
                    with these NFT Terms and the Smart Contract associated with
                    the NFT. As used in this Agreement, “Smart Contract” means a
                    set of terms issued by BnG to owners of its NFTs that, among
                    other terms, authenticates the creative property that is the
                    subject of the NFT, enables the display of the creative
                    property associated with the NFT, enables the tracking of
                    sales and other transfers of ownership of the NFT, is
                    cryptographically signed by BnG, and is technologically
                    integrated into the NFT so that it is inherited by
                    subsequent purchasers and recipients of the NFTs.
                  </li>
                  <li>
                    <em>Revenue Sharing. </em>
                    Revenues for the resale of NFTs shall be allocated as
                    follows: BnG shall charge, and Subscriber shall pay BnG,
                    twelve percent (12%) of the gross sales price of each NFT.
                    Subscriber shall be responsible for all costs and fees
                    associated with the sale of the NFT, including transaction
                    fees, processing fees, credit card fees, conversion fees,
                    gas fees, and fees charged by the applicable blockchain
                    host. BnG shall allocate that 12% as follows: five percent
                    (5%) to the Musical Artist, five percent (5%) to BnG, and
                    two percent (2%) to the Visual Artist whose Artwork was the
                    subject of the NFT. Such payments shall be made by BnG into
                    an account established by Visual Artist and Musical Artist.
                    Visual Artist and Musical Artist shall be responsible for
                    any fees assessed by the company handling the account or the
                    payment processing. The foregoing allocation relates solely
                    to revenue from NFT resales and does not reduce any other
                    arrangements for the payment of fees to Visual Artist or
                    Musical Artist.
                  </li>
                  <li>
                    <em>Future Rights. </em>
                    These NFT may be amended in the future to allow for the NFT
                    to reside outside the Platform, or to authorize additional
                    uses of the NFT. In such case, the Smart Contract and these
                    Terms may contain additional provisions to ensure the
                    integrity of the rights of the Visual Artist, the tracking
                    of sales of the NFT, and compliance with applicable laws.
                  </li>
                </ul>
              </li>
            </ol>
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default NFTTerms;
