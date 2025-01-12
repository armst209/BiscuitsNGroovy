//react imports
import { NavHashLink, HashLink } from "react-router-hash-link";

//styles
import "./FAQStyles.scss";

//svg imports

import { ReactComponent as Question } from "../../common/assets/images/question2.svg";
import { ReactComponent as RecordBullet } from "../../common/assets/images/vinyl_yellow.svg";
import { ReactComponent as Important } from "../../common/assets/images/speaker_yellow.svg";

//component imports
import Title from "../../common/UI/Title/Title";
import FAQQuestion from "./FAQQuestion";
import SEOHelmet from "../../common/utils/SEO/SEOHelmet";

const FAQ = () => {
  return (
    <section id="faq">
      <SEOHelmet
        title="Frequently Asked Questions"
        content="Questions? We’ve got answers. Feel free to contact us at: support@bngroovy.com."
      />
      <Title title={"faq"} />
      <div className="faq-content">
        <FAQQuestion
          title={"What do I get with my purchase?"}
          content={
            <li>
              Check out <NavHashLink to="/#whats-a-biscuit">“What’s a Biscuit?”</NavHashLink>
            </li>
          }
        />
        <FAQQuestion
          title={"Why does music expire?"}
          content={
            <li>
              All music on BnG is released on a limited basis. So when it’s gone, it’s gone. We do
              this so we can offer affordable prices for fans, and still be able to pay artists
              better. Besides, we’re not just another streaming service. We’re built for superfans
              who want to experience music in the moment, setting themselves apart from the crowd.
              But don’t worry, you always keep your collectible album covers, so everyone will know
              that you’re a true fan.
            </li>
          }
        />
        <FAQQuestion
          title={"Can I download my music?"}
          content={
            <li>
              No, music purchased on BnG is not available for download. You can stream the music as
              much as you’d like during the release window.
            </li>
          }
        />
        <FAQQuestion
          title={"What’s an NFT?"}
          content={
            <>
              <li>
                We’re glad you asked! An NFT, or non-fungible token, is a digital collectible whose
                ownership is recorded on the blockchain. If that still sounds like gibberish to you,
                don’t worry! You don’t need to be an NFT expert to use BnG (most of our customers
                aren’t). The key idea to know is that NFTs give our album art a permanent stamp of
                authenticity, proving who the true owner is, so you can feel confident when showing
                off your collection.
              </li>
              <li>
                <p>
                  Want to really dig into NFTs? Read more
                  <HashLink to="/faq#nft-scroll-purchase">here</HashLink>.
                </p>
              </li>
            </>
          }
        />
        <FAQQuestion
          title={"Do I need cryptocurrency to pay?"}
          content={
            <li>
              No, and in fact we don’t accept cryptocurrency at this time. Call us old-fashioned,
              but we like to stick with dollars around here. BnG accepts all major credit cards as
              payment. That means you don’t need a crypto wallet or cryptocurrency of any kind to
              purchase music and NFTs. Sadly you’ll have to find somewhere else to spend your
              dogecoin.
            </li>
          }
        />
        <FAQQuestion
          title={"What is a Blocto/Flow account and why do I need it?"}
          content={
            <li>
              <p>
                Blocto is a trusted, user-friendly wallet for crypto assets such as NFTs. We
                integrate with Blocto to seamlessly store your NFT album art, so you can view it in
                your BnG library as well as outside our platform. When you create an account on BnG,
                you’ll also be prompted to create a Blocto account (if you already have one, you can
                easily link that instead). Don’t worry! The process is super easy and we walk you
                through it when you sign up. Your Blocto account will be linked to your BnG account
                for easy access, so you don’t need to remember multiple logins. Blocto is designed
                to be so intuitive, you won’t even realize you’re interacting with the blockchain.
                Learn more{" "}
                <a href="https://blocto.portto.io/en/" target="_blank" rel="noopener noreferrer">
                  here
                </a>
                .
              </p>
            </li>
          }
        />
        <FAQQuestion
          title={"Is this a subscription?"}
          content={
            <li>
              Nope, BnG is not subscription-based. We give artists the freedom to price their own
              releases, so buying music on BnG is a one-time purchase. We don’t save your payment
              information, and you won’t be charged again (unless you buy more music, of course!)
            </li>
          }
        />
        <FAQQuestion
          title={"Do you have an app?"}
          content={
            <li>
              Currently we do not have an app. You can access BnG through any mobile browser,
              however, so you can still buy and stream music on your phone. Stay tuned for an app in
              the future!
            </li>
          }
        />

        <div className="header-div">
          <Question />
          <div>
            <div id="nft-scroll-purchase"></div>
            <div>
              More questions? We’ve got answers. If yours isn’t answered above, feel free to contact
              us at:
              <span>
                <a href="mailto:support@bngroovy.com?subject=Support">support@bngroovy.com.</a>
              </span>
            </div>
          </div>
        </div>

        <hr />
        <div className="nft-section-wrapper">
          <h1 id="NFTsExplained">
            <div>NFTs Explained</div>
          </h1>

          <div>
            <ul>
              <li>
                <div>
                  <div className="div-image">
                    <RecordBullet />
                  </div>
                  <div className="not-aligned-nfts-explained">
                    An NFT, or non-fungible token, is a digital collectible whose ownership is
                    recorded on a blockchain. NFTs have been around for several years, but recently
                    exploded in popularity as a way for digital creators to authenticate and
                    monetize their work.
                  </div>
                </div>
              </li>

              <li>
                <div>
                  <div className="div-image">
                    <RecordBullet />
                  </div>
                  <div className="div-content">
                    When you purchase a biscuit on Biscuits n Groovy, you receive a digital album
                    cover secured by an NFT. The NFT acts as a stamp of authenticity, proving your
                    art is original and that you, the buyer, were one of the elite superfans who
                    listened to that release early.
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <div className="div-image">
                    <RecordBullet />
                  </div>
                  <div className="not-aligned-nfts-explained">
                    You don’t need cryptocurrency to collect biscuits on BnG. When you sign up,
                    you’ll also create an account with Blocto, which is the trusted crypto wallet we
                    use to store your NFTs. This gets linked to your BnG account so you don’t have
                    to worry about the technical details. Rest assured, though, if anything were to
                    happen to our site, your NFTs are safely recorded and recoverable on the
                    blockchain (that’s the point of it!)
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <div className="div-image">
                    <RecordBullet />
                  </div>
                  <div className="not-aligned-nfts-explained">
                    All your art lives in your Collection permanently, regardless of when the music
                    is streaming.
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <div className="div-content caring-important">
                    <div className="caring-message">
                      A better blockchain —{"  "}
                      <strong> now that’s groovy</strong>
                    </div>
                    <div className="important-info">
                      <div className="important-content">
                        <div className="important-img">
                          <Important />
                        </div>
                        <div className="important-paragraph">
                          <span>
                            <div>
                              Biscuits n Groovy is proudly built on Flow, the blockchain trusted by
                              NBA Top Shot. Flow has three big perks for fans:
                            </div>
                            <ol>
                              <li>
                                It’s eco-friendly, since it doesn’t require “mining” like Bitcoin or
                                Ethereum
                              </li>
                              <li>
                                It’s compatible with credit cards, so you don’t need to buy
                                cryptocurrency to get started
                              </li>
                              <li>There’s no gas fees, so the price you see is what you pay</li>
                            </ol>

                            <div className="important-paragraph-learn-more">
                              Learn more about Flow{" "}
                              <a
                                href="https://www.onflow.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                here
                              </a>
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <h3>
            <div>Back up… what are blockchains and tokens anyways?</div>
          </h3>

          <div>
            <ul>
              <li>
                <div>
                  <div className="div-image">
                    <RecordBullet />
                  </div>
                  <div className="div-content">
                    Many people hear “blockchain” or “crypto” and think of Bitcoin, the most
                    well-known cryptocurrency. While Bitcoin’s creation in 2008 kicked things off,
                    blockchain technology has grown a ton, and its applications go far beyond
                    finance. A blockchain is simply a type of database, or online file cabinet, that
                    records information, verifies it, and keeps it secure. The key advantage of
                    blockchain is that once information is added to the chain, it’s there
                    permanently and can’t be easily hacked or manipulated.
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <div className="div-image">
                    <RecordBullet />
                  </div>
                  <div className="div-content">
                    Blockchains are great for recording transactions, like a receipt that keeps
                    getting added onto. These transactions are usually denominated in tokens. There
                    are two types of tokens used with blockchains. Bitcoin and other
                    cryptocurrencies like Dogecoin are fungible tokens, designed to operate as
                    currency.
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <div className="div-image">
                    <RecordBullet />
                  </div>
                  <div className="div-content">
                    Non-fungible tokens (or NFTs), on the other hand, are unique, which is why
                    they’re great for representing collectibles. Think of them like baseball cards
                    or concert tickets. Each one is unique. Sure, there may be 1,000 of the same
                    rookie card in the world, and of course plenty of concertgoers have the same GA
                    ticket, but each one has a serial number to identify which it is in the series.
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <div className="div-image">
                    <RecordBullet />
                  </div>
                  <div className="div-content">
                    In practice, though, this doesn’t always work in the real world. Counterfeit
                    tickets and baseball cards pose a big problem. NFTs solve this issue for digital
                    goods, since the rightful owner is recorded on the blockchain, so they can’t be
                    faked.
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <div className="div-image">
                    <RecordBullet />
                  </div>
                  <div className="div-content">
                    A common reaction to NFTs is “okay, but why are these worth anything? If it’s a
                    digital work of art, and anyone can see it on the internet, why would I pay for
                    it?” The answer is ownership. Every NFT has a unique identifier for itself and
                    its rightful owner. That owner could be the original creator or, once it’s sold,
                    the buyer. Sure, anyone might be able to see the image, but the blockchain
                    proves who the true owner is. Think of the Mona Lisa: anyone can see it, print a
                    picture of it, or buy a poster of it, but there’s only one real copy and owner.
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
