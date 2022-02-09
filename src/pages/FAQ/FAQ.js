import { useState } from "react";
import { NavHashLink, HashLink } from "react-router-hash-link";
import "./FAQStyles.scss";

import dropdown from "../../assets/images/double-down-yellow.svg";
import question from "../../assets/images/question2.svg";
import record_bullet from "../../assets/images/vinyl_yellow.svg";
import important from "../../assets/images/speaker_yellow.svg";
import record_vinyl from "../../assets/images/compact-disc-yellow.svg";
import FixedNavigationSpacer from "../../components/FixedNavigationSpacer/FixedNavigationSpacer";

//CSS Transition is a node package that handles CSS transitions in React and is imported above
//Each FAQ dropdown ("answer") is wrapped in a "CSSTransition" element
//useState is tied to the CSSTransition element which changes the state and transitions once the onClick event is triggered

const FAQ = () => {
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer4, setShowAnswer4] = useState(false);
  const [showAnswer5, setShowAnswer5] = useState(false);
  const [showAnswer6, setShowAnswer6] = useState(false);
  const [showAnswer7, setShowAnswer7] = useState(false);
  const [showAnswer8, setShowAnswer8] = useState(false);
  const [showAnswer10, setShowAnswer10] = useState(false);

  const [dropStyle1] = useState("dropdown");
  const [dropStyle2] = useState("dropdown");
  const [dropStyle4] = useState("dropdown");
  const [dropStyle5] = useState("dropdown");
  const [dropStyle6] = useState("dropdown");
  const [dropStyle7] = useState("dropdown");
  const [dropStyle8] = useState("dropdown");

  const [dropStyle10] = useState("dropdown");

  return (
    <>
      <FixedNavigationSpacer />
      <section id="faq">
        <div className="faq-title">
          <h1>
            <img width="50px" src={record_vinyl} alt="record" />
            <div>FAQ</div>
          </h1>
        </div>

        <div className="faq-content">
          <h5
            onClick={() => {
              setShowAnswer1(!showAnswer1);
            }}
          >
            <div>What do I get with my purchase?</div>
            <img
              className={`dropdown ${dropStyle1}`}
              src={dropdown}
              alt="dropdown"
            />
          </h5>

          {showAnswer1 && (
            <div className="answer">
              <ul>
                <li>
                  Check out{" "}
                  <NavHashLink to="/#whats-a-biscuit">
                    “What’s a Biscuit?”
                  </NavHashLink>
                </li>
       
              </ul>
            </div>
          )}

          <h5
            onClick={() => {
              setShowAnswer2(!showAnswer2);
             
            }}
          >
            <div> Why does music expire?</div>
            <img
              className={`dropdown ${dropStyle2}`}
              src={dropdown}
              alt="dropdown"
            />
          </h5>

          {showAnswer2 && (
            <div className="answer">
              <ul>
                <li>
                  <div>
                    All music on BnG is released on a limited basis. So when
                    it’s gone, it’s gone. We do this so we can offer affordable
                    prices for fans, and still be able to pay artists better.
                    Besides, we’re not just another streaming service. We’re
                    built for superfans who want to experience music in the
                    moment, setting themselves apart from the crowd. But don’t
                    worry, you always keep your collectible album covers, so
                    everyone will know that you’re a true fan.
                  </div>
                </li>
              </ul>
            </div>
          )}


          <h5
            onClick={() => {
              setShowAnswer4(!showAnswer4);
              // setDropStyle4("icon_rotate");
            }}
          >
            <div>Can I download my music?</div>
            <img
              className={`dropdown ${dropStyle4}`}
              src={dropdown}
              alt="dropdown"
            />
          </h5>
          {showAnswer4 && (
            <div className="answer">
              <ul>
                <li>
                  <div>
                    No, music purchased on BnG is not available for download.
                    You can stream the music as much as you’d like during the
                    release window.
                  </div>
                </li>
              </ul>
            </div>
          )}

          <h5
            id="NFT"
            onClick={() => {
              setShowAnswer5(!showAnswer5);
          
            }}
          >
            <div> What’s an NFT?</div>
            <img
              className={`dropdown ${dropStyle5}`}
              src={dropdown}
              alt="dropdown"
            />
          </h5>
          {showAnswer5 && (
            <div className="answer">
              <ul>
                <li>
                  <div>
                    We’re glad you asked! An NFT, or non-fungible token, is a
                    digital collectible whose ownership is recorded on the
                    blockchain. If that still sounds like gibberish to you,
                    don’t worry! You don’t need to be an NFT expert to use BnG
                    (most of our customers aren’t). The key idea to know is that
                    NFTs give our album art a permanent stamp of authenticity,
                    proving who the true owner is, so you can feel confident
                    when showing off your collection.
                  </div>
                </li>
                <li>
                  <div>
                    Want to really dig into NFTs? Read more{" "}
                    <HashLink to="/faq#nft-scroll-purchase">here</HashLink>.
                  </div>
                </li>
              </ul>
            </div>
          )}

          <h5
            onClick={() => {
              setShowAnswer6(!showAnswer6);
            
            }}
          >
            <div>Do I need cryptocurrency to pay?</div>
            <img
              className={`dropdown ${dropStyle6}`}
              src={dropdown}
              alt="dropdown"
            />
          </h5>
          {showAnswer6 && (
            <div className="answer">
              <ul>
                <li>
                  <div>
                    No, and in fact we don’t accept cryptocurrency at this time.
                    Call us old-fashioned, but we like to stick with dollars
                    around here. BnG accepts all major credit cards as payment.
                    That means you don’t need a crypto wallet or cryptocurrency
                    of any kind to purchase music and NFTs. Sadly you’ll have to
                    find somewhere else to spend your dogecoin.
                  </div>
                </li>
              </ul>
            </div>
          )}

          <h5
            onClick={() => {
              setShowAnswer10(!showAnswer10);
           
            }}
          >
            <div>What is a Blocto/Flow account and why do I need it?</div>
            <img
              className={`dropdown ${dropStyle10}`}
              src={dropdown}
              alt="dropdown"
            />
          </h5>
          {showAnswer10 && (
            <div className="answer">
              <ul>
                <li>
                  <div>
                    Blocto is a trusted, user-friendly wallet for crypto assets
                    such as NFTs. We integrate with Blocto to seamlessly store
                    your NFT album art, so you can view it in your BnG library
                    as well as outside our platform. When you create an account
                    on BnG, you’ll also be prompted to create a Blocto account
                    (if you already have one, you can easily link that instead).
                    Don’t worry! The process is super easy and we walk you
                    through it when you sign up. Your Blocto account will be
                    linked to your BnG account for easy access, so you don’t
                    need to remember multiple logins. Blocto is designed to be
                    so intuitive, you won’t even realize you’re interacting with
                    the blockchain. Learn more
                    <a
                      href="https://blocto.portto.io/en/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      here
                    </a>
                    .
                  </div>
                </li>
              </ul>
            </div>
          )}

          <h5
            onClick={() => {
              setShowAnswer7(!showAnswer7);
            
            }}
          >
            <div>Is this a subscription?</div>
            <img
              className={`dropdown ${dropStyle7}`}
              src={dropdown}
              alt="dropdown"
            />
          </h5>
          {showAnswer7 && (
            <div className="answer">
              <ul>
                <li>
                  <div>
                    Nope, BnG is not subscription-based. We give artists the
                    freedom to price their own releases, so buying music on BnG
                    is a one-time purchase. We don’t save your payment
                    information, and you won’t be charged again (unless you buy
                    more music, of course!)
                  </div>
                </li>
              </ul>
            </div>
          )}

          <h5
            onClick={() => {
              setShowAnswer8(!showAnswer8);
          
            }}
          >
            <div>Do you have an app?</div>
            <img
              className={`dropdown ${dropStyle8}`}
              src={dropdown}
              alt="dropdown"
            />
          </h5>
          {showAnswer8 && (
            <div className="answer">
              <ul>
                <li>
                  <div>
                    Currently we do not have an app. You can access BnG through
                    any mobile browser, however, so you can still buy and stream
                    music on your phone. Stay tuned for an app in the future!
                  </div>
                </li>
              </ul>
            </div>
          )}


          <div className="header-div">
            <img src={question} alt="question icon" />

            <div>
              <div id="nft-scroll-purchase"></div>
              <div>
                More questions? We’ve got answers. If yours isn’t answered
                above, feel free to contact us at:
                <span>
                  <a href="mailto:support@bngroovy.com?subject=Support">
                    support@bngroovy.com.
                  </a>
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
                      <img src={record_bullet} alt="record icon" />
                    </div>
                    <div className="not-aligned-nfts-explained">
                      An NFT, or non-fungible token, is a digital collectible
                      whose ownership is recorded on a blockchain. NFTs have
                      been around for several years, but recently exploded in
                      popularity as a way for digital creators to authenticate
                      and monetize their work.
                    </div>
                  </div>
                </li>

                <li>
                  <div>
                    <div className="div-image">
                      <img src={record_bullet} alt="record icon" />
                    </div>
                    <div className="div-content">
                      When you purchase a biscuit on Biscuits n Groovy, you
                      receive a digital album cover secured by an NFT. The NFT
                      acts as a stamp of authenticity, proving your art is
                      original and that you, the buyer, were one of the elite
                      superfans who listened to that release early.
                    </div>
                  </div>
                </li>
                <li>
                  <div>
                    <div className="div-image">
                      <img src={record_bullet} alt="record icon" />
                    </div>
                    <div className="not-aligned-nfts-explained">
                      You don’t need cryptocurrency to collect biscuits on BnG.
                      When you sign up, you’ll also create an account with
                      Blocto, which is the trusted crypto wallet we use to store
                      your NFTs. This gets linked to your BnG account so you
                      don’t have to worry about the technical details. Rest
                      assured, though, if anything were to happen to our site,
                      your NFTs are safely recorded and recoverable on the
                      blockchain (that’s the point of it!)
                    </div>
                  </div>
                </li>
                <li>
                  <div>
                    <div className="div-image">
                      <img src={record_bullet} alt="record icon" />
                    </div>
                    <div className="not-aligned-nfts-explained">
                      All your art lives in your Collection permanently,
                      regardless of when the music is streaming.
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
                            <img src={important} alt="important icon" />
                          </div>
                          <div className="important-paragraph">
                            <span>
                              <div>
                                Biscuits n Groovy is proudly built on Flow, the
                                blockchain trusted by NBA Top Shot. Flow has
                                three big perks for fans:
                              </div>
                              <ol>
                                <li>
                                  It’s eco-friendly, since it doesn’t require
                                  “mining” like Bitcoin or Ethereum
                                </li>
                                <li>
                                  It’s compatible with credit cards, so you
                                  don’t need to buy cryptocurrency to get
                                  started
                                </li>
                                <li>
                                  There’s no gas fees, so the price you see is
                                  what you pay
                                </li>
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
                      <img src={record_bullet} alt="record icon" />
                    </div>
                    <div className="div-content">
                      Many people hear “blockchain” or “crypto” and think of
                      Bitcoin, the most well-known cryptocurrency. While
                      Bitcoin’s creation in 2008 kicked things off, blockchain
                      technology has grown a ton, and its applications go far
                      beyond finance. A blockchain is simply a type of database,
                      or online file cabinet, that records information, verifies
                      it, and keeps it secure. The key advantage of blockchain
                      is that once information is added to the chain, it’s there
                      permanently and can’t be easily hacked or manipulated.
                    </div>
                  </div>
                </li>
                <li>
                  <div>
                    <div className="div-image">
                      <img src={record_bullet} alt="record icon" />
                    </div>
                    <div className="div-content">
                      Blockchains are great for recording transactions, like a
                      receipt that keeps getting added onto. These transactions
                      are usually denominated in tokens. There are two types of
                      tokens used with blockchains. Bitcoin and other
                      cryptocurrencies like Dogecoin are fungible tokens,
                      designed to operate as currency.
                    </div>
                  </div>
                </li>
                <li>
                  <div>
                    <div className="div-image">
                      <img src={record_bullet} alt="record icon" />
                    </div>
                    <div className="div-content">
                      Non-fungible tokens (or NFTs), on the other hand, are
                      unique, which is why they’re great for representing
                      collectibles. Think of them like baseball cards or concert
                      tickets. Each one is unique. Sure, there may be 1,000 of
                      the same rookie card in the world, and of course plenty of
                      concertgoers have the same GA ticket, but each one has a
                      serial number to identify which it is in the series.
                    </div>
                  </div>
                </li>
                <li>
                  <div>
                    <div className="div-image">
                      <img src={record_bullet} alt="record icon" />
                    </div>
                    <div className="div-content">
                      In practice, though, this doesn’t always work in the real
                      world. Counterfeit tickets and baseball cards pose a big
                      problem. NFTs solve this issue for digital goods, since
                      the rightful owner is recorded on the blockchain, so they
                      can’t be faked.
                    </div>
                  </div>
                </li>
                <li>
                  <div>
                    <div className="div-image">
                      <img src={record_bullet} alt="record icon" />
                    </div>
                    <div className="div-content">
                      A common reaction to NFTs is “okay, but why are these
                      worth anything? If it’s a digital work of art, and anyone
                      can see it on the internet, why would I pay for it?” The
                      answer is ownership. Every NFT has a unique identifier for
                      itself and its rightful owner. That owner could be the
                      original creator or, once it’s sold, the buyer. Sure,
                      anyone might be able to see the image, but the blockchain
                      proves who the true owner is. Think of the Mona Lisa:
                      anyone can see it, print a picture of it, or buy a poster
                      of it, but there’s only one real copy and owner.
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
