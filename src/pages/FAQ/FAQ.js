import { React, useState } from "react";
import Navbar from "../../components/Navbars/MainNavigation/MainNavigation";
import "./FAQStyles.scss";
import { CSSTransition } from "react-transition-group";
// import spotlight from "../../assets/images/spotlight2.png";
import Footer from "../../components/Footer/Footer";
import dropdown from "../../assets/images/double-down.svg";

//CSS Transition is a node package that handles CSS transitions in React and is imported above
//Each FAQ dropdown ("answer") is wrapped in a "CSSTransition" element
//useState is tied to the CSSTransition element which changes the state and transitions once the onClick event is triggered

function FAQ(props) {
  const [question1, setQuestion1] = useState(false);
  const [question2, setQuestion2] = useState(false);
  const [question3, setQuestion3] = useState(false);
  const [question4, setQuestion4] = useState(false);
  const [question5, setQuestion5] = useState(false);
  const [question6, setQuestion6] = useState(false);
  const [question7, setQuestion7] = useState(false);
  const [question8, setQuestion8] = useState(false);
  const [question9, setQuestion9] = useState(false);
  const [question10, setQuestion10] = useState(false);
  const [question11, setQuestion11] = useState(false);
  const [question12, setQuestion12] = useState(false);

  return (
    <section id="faq">
      <Navbar
        showLoginPopup={props.setTrigger}
        showSignUpPopUp={props.showSignUp}
      />
      {/* <h1>
        <div>FAQ</div>
        <div>
          <img src={spotlight} alt="spotlight" />
        </div>
      </h1> */}

      <div className="faq-content">
        <h5 onClick={() => setQuestion1(!question1)}>
          <div>What do I get with my purchase?</div>
          <img className="dropdown" src={dropdown} alt="dropdown" />
        </h5>
        <CSSTransition
          classNames="answer"
          in={question1}
          timeout={300}
          unmountOnExit
          onEnter={() => setQuestion1(true)}
          onExited={() => setQuestion1(false)}
        >
          <div className="answer" onClick={() => setQuestion1(!question1)}>
            <ul>
              <li className="speaker">
                - When you purchase a new release on BnG, you get access to
                stream the music during its release period. These dates are
                noted in three places: in the title details when browsing our
                calendar, in your order confirmation, and in the My Collection
                section of your profile. The release period is determined by the
                artist, and once it ends, you can’t stream the music on BnG.
              </li>
              <li>
                <div>
                  - With your purchase, you also get a collectible digital album
                  cover NFT for no extra charge. The album art stays in Your
                  Collection forever, even once the music has expired. Read more
                  about our amazing NFTs
                  <a href="#NFT">below</a> .
                </div>
              </li>
            </ul>
          </div>
        </CSSTransition>

        <h5 onClick={() => setQuestion2(!question2)}>
          <div> Why does music expire?</div>
          <img className="dropdown" src={dropdown} alt="dropdown" />
        </h5>
        <CSSTransition
          classNames="answer"
          in={question2}
          timeout={300}
          unmountOnExit
          onEnter={() => setQuestion2(true)}
          onExited={() => setQuestion2(false)}
        >
          <div className="answer" onClick={() => setQuestion2(!question2)}>
            <ul>
              <li>
                <p>
                  - All music on BnG is released on a limited basis. That means
                  when it drops on other platforms (the official release date),
                  you can no longer stream it on BnG. We do this so we can offer
                  affordable prices for fans, and still be able to pay artists
                  better. Besides, we’re not just another streaming service. New
                  music is our jam, so once it’s out everywhere we encourage you
                  to listen on your favorite platform. But don’t worry, you
                  always keep your collectible album covers, so everyone will
                  know that you listened first.
                </p>
              </li>
            </ul>
          </div>
        </CSSTransition>

        <h5 onClick={() => setQuestion3(!question3)}>
          <div>Where do I find my purchased music?</div>
          <img className="dropdown" src={dropdown} alt="dropdown" />
        </h5>
        <CSSTransition
          classNames="answer"
          in={question3}
          timeout={300}
          unmountOnExit
          onEnter={() => setQuestion3(true)}
          onExited={() => setQuestion3(false)}
        >
          <div className="answer" onClick={() => setQuestion3(!question3)}>
            <ul>
              <li>
                <p>
                  - Access your music and album art from the My Collection page
                  of your profile. Simply login, click the dropdown menu, and
                  select My Collection. From here you’ll be able to click on a
                  title to listen during the release period. If the period has
                  ended, the title will be labelled “expired.”
                </p>
              </li>
            </ul>
          </div>
        </CSSTransition>

        <h5 onClick={() => setQuestion4(!question4)}>
          <div>Can I download my music?</div>
          <img className="dropdown" src={dropdown} alt="dropdown" />
        </h5>
        <CSSTransition
          classNames="answer"
          in={question4}
          timeout={300}
          unmountOnExit
          onEnter={() => setQuestion4(true)}
          onExited={() => setQuestion4(false)}
        >
          <div className="answer" onClick={() => setQuestion4(!question4)}>
            <ul>
              <li>
                <p>
                  - No, music purchased on BnG is not available for download.
                </p>
              </li>
            </ul>
          </div>
        </CSSTransition>

        <h5 id="NFT" onClick={() => setQuestion5(!question5)}>
          <div> What’s an NFT?</div>
          <img className="dropdown" src={dropdown} alt="dropdown" />
        </h5>
        <CSSTransition
          classNames="answer"
          in={question5}
          timeout={300}
          unmountOnExit
          onEnter={() => setQuestion5(true)}
          onExited={() => setQuestion5(false)}
        >
          <div className="answer" onClick={() => setQuestion5(!question5)}>
            <ul>
              <li>
                <p>
                  - We’re glad you asked! An NFT, or non-fungible token, is a
                  digital collectible whose ownership is recorded on the
                  blockchain. If that still sounds like gibberish to you, don’t
                  worry! You don’t need to be an NFT expert to use BnG (most of
                  our customers aren’t). The key idea to know is that NFTs give
                  our album art a permanent stamp of authenticity, proving who
                  the true owner is, so you can feel confident when showing off
                  your collection.
                </p>
              </li>
              <li>
                <p>
                  Want to really dig into NFTs? Read more{" "}
                  <a href="#NFTsExplained">here</a>.
                </p>
              </li>
            </ul>
          </div>
        </CSSTransition>

        <h5 onClick={() => setQuestion6(!question6)}>
          <div>Do I need cryptocurrency to pay?</div>
          <img className="dropdown" src={dropdown} alt="dropdown" />
        </h5>
        <CSSTransition
          classNames="answer"
          in={question6}
          timeout={300}
          unmountOnExit
          onEnter={() => setQuestion6(true)}
          onExited={() => setQuestion6(false)}
        >
          <div className="answer" onClick={() => setQuestion6(!question6)}>
            <ul>
              <li>
                <p>
                  - No, and in fact we don’t accept cryptocurrency at this time.
                  Call us old-fashioned, but we like to stick with dollars
                  around here. BnG accepts all major credit cards as payment.
                  That means you don’t need a crypto wallet or cryptocurrency of
                  any kind to purchase music and NFTs. Sadly you’ll have to find
                  somewhere else to spend your dogecoin.
                </p>
              </li>
            </ul>
          </div>
        </CSSTransition>

        <h5 onClick={() => setQuestion7(!question7)}>
          <div>Is this a subscription?</div>
          <img className="dropdown" src={dropdown} alt="dropdown" />
        </h5>
        <CSSTransition
          classNames="answer"
          in={question7}
          timeout={300}
          unmountOnExit
          onEnter={() => setQuestion7(true)}
          onExited={() => setQuestion7(false)}
        >
          <div className="answer" onClick={() => setQuestion7(!question7)}>
            <ul>
              <li>
                <p>
                  - No, BnG is not subscription-based. We give artists the
                  freedom to price their own releases, so buying music on BnG is
                  a one-time purchase. We don’t save your payment information,
                  and you won’t be charged again (unless you buy more music, of
                  course!)
                </p>
              </li>
            </ul>
          </div>
        </CSSTransition>

        <h5 onClick={() => setQuestion8(!question8)}>
          <div>Do you have an app?</div>
          <img className="dropdown" src={dropdown} alt="dropdown" />
        </h5>
        <CSSTransition
          classNames="answer"
          in={question8}
          timeout={300}
          unmountOnExit
          onEnter={() => setQuestion8(true)}
          onExited={() => setQuestion8(false)}
        >
          <div className="answer" onClick={() => setQuestion8(!question8)}>
            <ul>
              <li>
                <p>
                  - Currently we do not have an app. You can access BnG through
                  any mobile browser, however, so you can still buy and stream
                  music on your phone.
                </p>
              </li>
              <li>
                <p>
                  - We plan to roll out a companion app in the near future,
                  where you can view Your Collection and stream music you’ve
                  purchased. Stay tuned!
                </p>
              </li>
            </ul>
          </div>
        </CSSTransition>

        <h5 onClick={() => setQuestion9(!question9)}>
          <div>How much does BnG pay artists?</div>
          <img className="dropdown" src={dropdown} alt="dropdown" />
        </h5>
        <CSSTransition
          classNames="answer"
          in={question9}
          timeout={300}
          unmountOnExit
          onEnter={() => setQuestion9(true)}
          onExited={() => setQuestion9(false)}
        >
          <div className="answer" onClick={() => setQuestion9(!question9)}>
            <ul>
              <li>
                <p>
                  - BnG pays artists 75% of the sales they generate (net of
                  taxes and other fees). Artists have full control over the
                  pricing of their releases, and get a transparent view of their
                  earnings since fans are supporting them directly.
                </p>
              </li>
            </ul>
          </div>
        </CSSTransition>

        <h5 id="NFTsExplained" onClick={() => setQuestion10(!question10)}>
          <div>NFTs Explained</div>
          <img className="dropdown" src={dropdown} alt="dropdown" />
        </h5>
        <CSSTransition
          classNames="answer"
          in={question10}
          timeout={300}
          unmountOnExit
          onEnter={() => setQuestion10(true)}
          onExited={() => setQuestion10(false)}
        >
          <div className="answer" onClick={() => setQuestion10(!question10)}>
            <ul>
              <li>
                <p>
                  - An NFT, or non-fungible token, is a digital collectible
                  whose ownership is recorded on a blockchain. NFTs have been
                  around for several years, but recently exploded in popularity
                  as a way for digital creators to authenticate and monetize
                  their work.
                </p>
              </li>
              <li>
                <p>
                  - When you purchase new music on Biscuits n Groovy, you
                  automatically receive an NFT of the album cover. All BnG album
                  art is limited-edition, meaning it’s different from what
                  you’ll see once the music drops everywhere else. We do this so
                  our artists can showcase something new and unique, and so true
                  fans can stand out from the crowd. The NFT acts as a stamp of
                  authenticity, proving it’s an original copy, and that you as
                  the buyer were one of the first to hear that particular
                  release.
                </p>
              </li>
              <li>
                <p>
                  - You can view your album art in the My Collection page of
                  your profile. All your art stays there permanently, regardless
                  of when the music is streaming. Since each album cover is
                  backed by an NFT, you can show it off with confidence and
                  prove your loyalty to your favorite artists.
                </p>
              </li>
              <li>
                <p>
                  - You don’t need a crypto wallet or cryptocurrency to collect
                  NFTs on BnG. When you create an account and buy music with us,
                  an ID is created for you behind the scenes, which gets
                  recorded on the blockchain to identify you as the owner. We do
                  this so you don’t have to worry about the technical details.
                  And since our NFTs aren’t currently tradable on other
                  platforms, there’s no reason you’d need the ID. Rest assured,
                  though, if anything were to happen to our site, your NFTs are
                  safely recorded and recoverable on the blockchain (that’s the
                  point of it!)
                </p>
              </li>
              <li>
                <p>
                  - Caring for our planet - now that’s groovy [highlight or put
                  in a green box to stand out] Biscuits n Groovy is proudly
                  built on Flow, the blockchain trusted by NBA Top Shot. Since
                  the Flow blockchain doesn’t require “mining” of bitcoin or
                  ethereum, we don’t produce tons of greenhouse gases like other
                  NFT platforms. You can read more about Flow{" "}
                  <a href="https://www.onflow.org/">here</a> .
                </p>
              </li>
            </ul>
          </div>
        </CSSTransition>

        <h5 onClick={() => setQuestion11(!question11)}>
          <div>Back up… what are blockchains and tokens anyways?</div>
          <img className="dropdown" src={dropdown} alt="dropdown" />
        </h5>
        <CSSTransition
          classNames="answer"
          in={question11}
          timeout={300}
          unmountOnExit
          onEnter={() => setQuestion11(true)}
          onExited={() => setQuestion11(false)}
        >
          <div className="answer" onClick={() => setQuestion11(!question11)}>
            <ul>
              <li>
                <p>
                  - Many people hear “blockchain” or “crypto” and think of
                  bitcoin, the most well-known cryptocurrency. While bitcoin’s
                  creation in 2008 kicked things off, blockchain technology has
                  grown a ton, and its applications go far beyond finance. A
                  blockchain is simply a type of database, or online file
                  cabinet, that records information, verifies it, and keeps it
                  secure. The key advantage of blockchain is that once
                  information is added to the chain, it’s there permanently and
                  can’t be easily hacked or manipulated.
                </p>
              </li>
              <li>
                <p>
                  - Blockchains are great for recording transactions, like a
                  receipt that keeps getting added onto. These transactions are
                  usually denominated in tokens. There are two types of tokens
                  used with blockchains. Bitcoin and other cryptocurrencies like
                  dogecoin are fungible tokens. Just like regular dollars,
                  fungible tokens can be broken down into parts (cents), and
                  interchanged with each other (trading one dollar for another
                  dollar makes no difference to me).
                </p>
              </li>
              <li>
                <p>
                  - Non-fungible tokens, on the other hand, are unique, which is
                  why they’re great for representing collectibles. Think of them
                  like baseball cards or concert tickets. Each one is unique.
                  Sure, there may be 1,000 of the same rookie card in the world,
                  and of course plenty of concertgoers have the same GA ticket,
                  but each one has a serial number to identify which it is in
                  the series.
                </p>
              </li>
              <li>
                <p>
                  - In practice, though, this doesn’t always work in the real
                  world. Counterfeit tickets and baseball cards pose a big
                  problem. NFTs solve this issue for digital goods, since the
                  “serial number” and rightful owner is verified and recorded on
                  the blockchain, so they can’t be faked.
                </p>
              </li>
              <li>
                <p>
                  - A common reaction to NFTs is “okay, but why are these worth
                  anything? If it’s a digital work of art, and anyone can see it
                  on the internet, why would I pay for it?” The answer is
                  ownership. Every NFT has a unique identifier for itself and
                  its rightful owner. That owner could be the original creator
                  or, once it’s sold, the buyer. Sure, anyone might be able to
                  see the image, but the blockchain proves who the true owner
                  is. Think of the Mona Lisa: anyone can see it, print a picture
                  of it, or buy a poster of it, but there’s only one real copy
                  and owner.
                </p>
              </li>
            </ul>
          </div>
        </CSSTransition>

        <h5 onClick={() => setQuestion12(!question12)}>
          <div>The future of record collecting</div>
          <img className="dropdown" src={dropdown} alt="dropdown" />
        </h5>
        <CSSTransition
          classNames="answer"
          in={question12}
          timeout={300}
          unmountOnExit
          onEnter={() => setQuestion12(true)}
          onExited={() => setQuestion12(false)}
        >
          <div className="answer" onClick={() => setQuestion12(!question12)}>
            <ul>
              <li>
                <p>
                  - Biscuits n Groovy will soon be launching a marketplace where
                  fans can trade and resell their NFT album covers. The
                  fundamental idea behind our NFTs is that they represent the
                  music and the story behind a release. The value of the NFT,
                  then, will depend on factors like how the record performs, how
                  it shapes the artist’s career, how rare or coveted it is among
                  collectors, or any other events that make it extra special.
                  These factors will influence prices in our marketplace, just
                  like in the market for art or shoes or trading cards.
                </p>
              </li>
              <li>
                <p className="important-info">
                  - So you may want to hang onto all your album covers to curate
                  the perfect original collection. That way everyone can see you
                  were an OG fan, before that band blew up. Or you may want to
                  capitalize on a record that spikes in resale value, and cash
                  in on your favorite artist’s crazy success. After all, you
                  knew they would make it big. The best part? The artist
                  benefits too, since they get 5% back on every NFT resale of
                  their work.
                </p>
              </li>
              <li>
                <p>
                  - Unlike other NFT marketplaces, BnG will be artist and
                  fan-friendly, free of the crypto jargon and stock charts that
                  make our heads spin. We can’t wait for you to start trading!
                </p>
              </li>
            </ul>
          </div>
        </CSSTransition>
        <p className="header-p">
          More questions? We’ve got answers. If yours isn’t answered above, feel
          free to contact us at support@bngroovy.com
        </p>
      </div>
      <Footer />
    </section>
  );
}

export default FAQ;
