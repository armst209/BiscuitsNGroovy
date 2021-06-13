import React from "react";
import { Link } from "react-router-dom";
import ArtistsNavbar from "../../components/Navbars/Artists/ArtistsNavbar";
import spotlight from "../../assets/images/spotlight2.png";
import "./ArtistsStyles.scss";
import Footer from "../../components/Footer/Footer";

function Artists() {
  return (
    <section id="artists">
      <ArtistsNavbar />
      <h1>
        <div>ARTISTS</div>
        <div>
          <img src={spotlight} alt="spotlight" />
        </div>
      </h1>

      <div className="artists-content">
        <p className="header-paragraph">
          Biscuits n Groovy is a new kind of streaming platform, empowering you
          create and capture lasting value for new music. We offer superfans
          early access to new releases plus exclusive album art they can collect
          and trade. By partnering with us, you’ll tap into your existing
          network of devoted fans and earn an additional revenue stream from
          your music, without any impact to your existing distribution channels.
        </p>
        <p>
          <strong>
            Releasing with Biscuits n Groovy is simple. Here’s how it works:
          </strong>
          <ol>
            <li>
              Choose - You choose your BnG drop date (anywhere from a few days
              to weeks prior to the official release). You also decide the price
              to charge fans, and if you'd like to cap the number of copies
              issued to make a release more rare. Unlike on other platforms,
              with BnG you’re in control!
            </li>
            <li>
              Drop - Fans purchase your pre-release and can stream the music
              exclusively on BnG until the official drop date on other
              platforms. They also get a limited edition digital album cover as
              an NFT (non-fungible token) to add to their collection. We handle
              all the technical details of issuing NFTs so you don’t have to.
            </li>
            <li>
              Earn - After the BnG release period ends, you cash out and are
              free to release on all other platforms. We take 25% of net sales
              and give you the remaining 75%, plus a fully transparent breakdown
              of how your release performed. You’ll also earn 5% on all future
              resales of your album art, once our NFT marketplace goes live.
            </li>
          </ol>
        </p>
        <div className="important">
          <p>
            <strong>Heard about NFTs but don’t know where to start?</strong> Our
            unique album cover NFTs make it easy for you to get in on the action
            and preserve the hype of your new releases. When your music does
            well, those NFTs can increase in value as collectors resell them,
            giving you a whole new way to earn money.
          </p>
          <p>
            Biscuits n Groovy is built for artists, not crypto experts. We
            handle the entire technical process so you can spend your time
            making music, instead of worrying about the blockchain. We also make
            it easy for your fans to start collecting -- all they need is a
            credit card, not cryptocurrency.
          </p>
          <p>
            In fact, everything on BnG is in dollars and common sense, unlike
            other NFT marketplaces full of confusing crypto charts and
            leaderboards. We strive to be the most artist-friendly platform and
            to keep the spotlight where it should: on you and your music. Learn
            more about NFTs on our FAQ page <Link to="/faq">here</Link> .
          </p>
        </div>

        <p className="second-header-paragraph">
          Helping artists thrive is our #1 priority, so we’ll work with you
          one-on-one to make these decisions and put together a personalized
          marketing plan for your release. We strive to make every release as
          successful as possible with minimal work for you.
        </p>
        <p>
          <strong>
            Why release with us? Here’s a few of the benefits we provide
            artists:
          </strong>

          <ol>
            <li>
              Make more money - We're not another subscription pool. Your fans
              purchase your music directly, and since you set the price, you'll
              know exactly what you're earning.
            </li>
            <li>
              Connect with your top fans - BnG is built for superfans. We help
              you discover who they are, and build a dedicated following through
              limited releases and NFTs
            </li>
            <li>
              Stand out from the crowd - Consumers are overwhelmed by content.
              With BnG, you'll create more hype for each drop and show fans that
              great music is worth collecting.
            </li>
          </ol>
        </p>

        <p className="third-header-paragraph">
          Interested in joining us? Fill out the form below and we’ll be in
          touch ASAP. We work with both independent artists and those signed to
          record or distribution deals, so regardless of your situation, we’d
          love to hear from you.
        </p>
        <div className="form-container">
          <form action="">
            <input type="text" placeholder="Artist Name" required />
            <input type="text" placeholder="Preferred Name" />
            <input type="email" placeholder="Email" required />
            <input type="phone" placeholder="Phone" />
            <input type="text" placeholder="Manager/Agent Name" />
            <input type="email" placeholder="Manager/Agent Email" />
            <label htmlFor="text-box">Type Your Message Below:</label>
            <input className="text-box" type="text" />
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default Artists;
