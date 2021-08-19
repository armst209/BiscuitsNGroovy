import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbars/MainNavigation/MainNavigation";
// import spotlight from "../../assets/images/spotlight2.png";
import "./ArtistsStyles.scss";
import Footer from "../../components/Footer/Footer";
import love_music_icon from "../../assets/images/love-song2.svg";
import stream_music_icon from "../../assets/images/voice.svg";
import favorite_music_icon from "../../assets/images/3rd_icon_record_share.svg";
import add_icon from "../../assets/images/add2_yellow.svg";
import record_bullet from "../../assets/images/vinyl_yellow.svg";
import important from "../../assets/images/speaker_yellow.svg";
import two_icon from "../../assets/images/hand2_yellow.svg";
import one_icon from "../../assets/images/hand1_yellow.svg";

function Artists(props) {
  const sendToMail = () => {};
  return (
    <section id="artists">
      <Navbar
        showLoginPopup={props.setTrigger}
        showSignUpPopUp={props.showSignUp}
      />
      <div className="artists-title">
        <h1>ARTISTS</h1>
      </div>
      <div className="artists-wrapper">
        <div className="artists-important-msg">
          <div className="artists-impt-wrapper">
            <div className="artists-impt-img">
              <img src={important} alt="loudspeaker icon" />
            </div>
            <div className="artists-impt-text">
              <p>
                Interested in joining us? Fill out the form{" "}
                <Link className="below-link" to="#artists-form">
                  below
                </Link>{" "}
                and we’ll be in touch ASAP.
              </p>
              <p className="work-with-text">
                We work with both independent artists and those signed to record
                or distribution deals, so regardless of your situation, we’d
                love to hear from you.
              </p>
            </div>
          </div>
        </div>
        <div className="artists-content-wrapper">
          <div className="artists-content">
            <div className="artists-images">
              <img
                src={love_music_icon}
                alt="artists icon"
                className="artists-img"
              />
              <img src={add_icon} alt="add icon" className="add-icon" />
              <img
                src={stream_music_icon}
                alt="artists icon"
                className="artists-img"
              />
              <img src={add_icon} alt="add icon" className="add-icon" />
              <img
                src={favorite_music_icon}
                alt="artists icon"
                className="artists-img"
              />
            </div>
            <p className="header-paragraph">
              Biscuits n Groovy is a new kind of streaming platform, empowering
              you to create and capture lasting value for new music. We offer
              superfans access to exclusive music and digital album art they can
              collect and trade. By partnering with us, you’ll tap into your
              network of superfans and earn an additional revenue stream,
              without any impact to your existing distribution channels.
            </p>

            <p>
              <h1>
                Releasing with Biscuits n Groovy is simple. Here’s how it works:
              </h1>
              <div>
                <div className="hiw-bullet">
                  <div className="artists-record-icon">
                    <img src={record_bullet} alt="record icon" />
                  </div>
                  <div className="bullet-text">
                    <strong>Choose</strong> - You choose the drop date for your
                    release, how much to charge, and how long it’s available.
                    Unlike on other platforms, with BnG you’re in control
                  </div>
                </div>
                <div className="hiw-bullet">
                  <div className="artists-record-icon">
                    <img src={record_bullet} alt="record icon" />
                  </div>
                  <div className="bullet-text">
                    <strong>Drop</strong> - Fans purchase your music and can
                    stream it exclusively on BnG during that time. They also get
                    a limited-edition digital album cover backed by an NFT
                    (non-fungible token) to add to their collection.
                  </div>
                </div>
                <div className="hiw-bullet">
                  <div className="artists-record-icon">
                    <img src={record_bullet} alt="record icon" />
                  </div>
                  <div className="bullet-text">
                    <strong>Earn</strong> - After the BnG release window ends,
                    you cash out and are free to release the music elsewhere if
                    you like. We take 25% of net sales and give you the
                    remaining 75%, plus a fully transparent breakdown of how
                    your release performed.
                  </div>
                </div>
              </div>
            </p>

            <div className="important">
              <p>
                <h1>
                  Why release with us? Here’s a few of the benefits we provide
                  artists:
                </h1>

                <div>
                  <div className="hiw-bullet">
                    <div className="artists-record-icon">
                      <img src={one_icon} alt="hand icon" />
                    </div>
                    <div className="bullet-text">
                      <strong>Make more money</strong> - We're not another
                      subscription pool. You set the price, and fans buy your
                      music directly. Plus BnG is designed to be used in
                      addition to (not instead of) other streaming services, so
                      the money you earn with us is supplemental.
                    </div>
                  </div>
                  <div className="hiw-bullet">
                    <div className="artists-record-icon">
                      <img src={two_icon} alt="hand icon" />
                    </div>
                    <div className="bullet-text">
                      <strong>Connect with your top fans</strong> - BnG is built
                      for superfans. We help you discover who they are, and keep
                      them engaged with exclusive content & collectibles.
                    </div>
                  </div>
                  <div className="hiw-bullet">
                    <div className="artists-record-icon">
                      <img src={record_bullet} alt="record icon" />
                    </div>
                    <div className="bullet-text">
                      <strong>Stand out from the crowd</strong> - Consumers are
                      overwhelmed by free content. With BnG, you'll create more
                      hype for each drop and show fans that great music is worth
                      collecting.
                    </div>
                  </div>
                </div>
              </p>
            </div>
            <p>
              <h1>Heard about NFTs but don’t know where to start?</h1>
              <div className="hiw-bullet">
                {/* <div className="artists-record-icon">
              <img src={record_bullet} alt="record icon" />
            </div> */}
                <div className="bullet-text">
                  We make it easy for you to get in on the action and capture
                  hype for your music. When your release does well, your album
                  art NFTs can increase in value as collectors resell them,
                  giving you a whole new way to earn money.
                </div>
              </div>
              <div className="hiw-bullet">
                {/* <div className="artists-record-icon">
              <img src={record_bullet} alt="record icon" />
            </div> */}
                <div className="bullet-text">
                  We handle the entire technical process so you can spend your
                  time making music, instead of worrying about the blockchain.
                  We also make it easy for your fans to start collecting — all
                  they need is a credit card, not cryptocurrency.
                </div>
              </div>
              <div className="hiw-bullet">
                {/* <div className="artists-record-icon">
              <img src={record_bullet} alt="record icon" />
            </div> */}
                <div className="bullet-text">
                  In fact, everything on BnG is in dollars and common sense,
                  unlike other NFT marketplaces full of confusing crypto charts
                  and auctions. We strive to be the most artist-friendly
                  platform and to keep the spotlight where it should: on you and
                  your music. Learn more about NFTs{" "}
                  <Link style={{ color: "var(--color1)" }} to="faq#scrollhere">
                    here
                  </Link>{" "}
                  .
                </div>
              </div>
            </p>
          </div>
        </div>
        <div id="artists-form" className="form-container">
          <form action="">
            <input type="text" placeholder="Artist Name" required />
            <input type="text" placeholder="Preferred Name" />
            <input type="email" placeholder="Email" required />
            <input type="phone" placeholder="Phone" required />
            <input type="text" placeholder="Manager/Agent Name" required />
            <input type="email" placeholder="Manager/Agent Email" required />
            <label htmlFor="text-box">Type Your Message Below:</label>
            <input className="text-box" type="text" required />
            <button type="submit" onSubmit={sendToMail}>
              SUBMIT
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default Artists;
