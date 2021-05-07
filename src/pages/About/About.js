import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./AboutStyles.scss";

function About() {
  return (
    <section>
      <Navbar />
      <div id="about">
        <div>
          <h1>Our Mission</h1>
          <p>
            Two forces have endured throughout all of human history: music and
            stories.
          </p>
          <p>
            It is no coincidence, then, that some of the greatest artists of our
            generation are also some of the most talented storytellers. At
            Biscuits n Groovy, our mission is simple: create a better platform
            for these stories to be told. ​
          </p>
          <p>
            Our approach is twofold:{" "}
            <ol>
              <li>Treat artists as creators rather than commodities</li>
              <li>
                Deliver fans the most intentional and powerful music experience
              </li>
            </ol>{" "}
            We partner with artists to debut their new releases to their most
            devoted fans. These are the people who get goosebumps when their
            favorite song comes on, who dance in public to the music playing in
            their headphones, who show up first to a concert to get the best
            spot. We offer these loyal listeners the uniquely intimate
            experience of being the first to hear new music.
          </p>
          <p>
            Music is the anthem of culture. Biscuits n Groovy cuts through the
            endless shuffle to amplify what matters: the connection between
            artists and fans.{" "}
          </p>
          <p>
            We’re built not for those who passively stream music, but for those
            who choose to listen.
          </p>
        </div>
        <div>
          <h1>Our Story</h1>
          <p>
            The idea for Biscuits n Groovy started with a shared love for music.
            More specifically, with our founders’ carefully-curated collection
            of vinyl records. While we love the convenience and variety of
            digital streaming, there's a lot of things about the "old school"
            approach that streaming just can’t compete with. No, we don't mean
            the audio quality. It's about the <strong>experience.</strong>
          </p>
          <p>
            From admiring an album's cover art to carefully dropping the needle,
            everything about listening to a vinyl record is intentional. It
            gives you a chance to sit back and really hear the artist’s story,
            like reading a good book from beginning to end. Physical music
            provides a much needed reprieve from the shuffle-and-go mentality
            that underpins streaming services, and for that matter permeates so
            much of our hectic lives.​ We built our collection to appreciate and
            support our favorite artists in a more meaningful way, and we
            believe other true fans want to do the same.
          </p>
          <p>
            So we started thinking, how can we take modern-day streaming, and
            infuse it with some of the intentionality of vinyl collecting? And
            in doing so, we can help artists recapture some of the autonomy and
            identity that has been stripped away by the proliferation of their
            music.
          </p>
          <p>
            That's why we started Biscuits n Groovy. While we're not a record
            company, the "biscuits'' part of the name is an homage to our vinyl
            collection, the original inspiration. Just like the process of
            making and selecting records, everything we do at BnG is thoughtful,
            deliberate, and human.
          </p>
          <p>[needs the biscuit quote]</p>
        </div>
      </div>
    </section>
  );
}

export default About;
