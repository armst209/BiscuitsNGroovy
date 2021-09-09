import React from "react";
import Footer from "../../../components/Footer/Footer";
import "./SubscriberStyles.scss";
import NotHomeNavigation from "../../../components/Navbars/NotHomeNavigation/NotHomeNavigation";

function Subscriber({
  loginPopup,
  showLoginPopup,
  showSignUpPopup,
  signUpPopup,
  setShowMobileNav,
  showMobileNav,
}) {
  return (
    <section id="sub-terms">
      <NotHomeNavigation
        loginPopup={loginPopup}
        signUpPopup={signUpPopup}
        showLoginPopup={showLoginPopup}
        showSignUpPopup={showSignUpPopup}
        showMobileNav={showMobileNav}
        setShowMobileNav={setShowMobileNav}
      />

      <div className="sub-terms-wrapper">
        <div className="sub-terms-container">
          <h1>BISCUITS N GROOVY, LLC SUBSCRIBER TERMS OF SERVICE</h1>
          <p>
            <ol>
              <li>
                <strong>Parties; Effective Date. </strong> This Subscriber Terms
                of Service (“TOS” or “Agreement”) is between Biscuits n Groovy,
                LLC, a Michigan limited liability company with offices at 330
                East Liberty, Ann Arbor, Michigan 48104 (“BnG”) and each of its
                subscribers (“Subscriber” or “you”). It is effective on the date
                accepted by you electronically (“Effective Date”).
              </li>
              <li>
                <strong>Purpose of Agreement. </strong> BnG is a music streaming
                service that amplifies the connection between musical artists
                and their fans. BnG operates an online platform designed to
                raise the profile of musical artists at the time their music
                debuts and give their fans an intentional and powerful musical
                experience. BnG also enables Subscribers to acquire Non-Fungible
                Tokens (“Tokens”) of the artwork relating to the featured music.{" "}
                <a
                  href="https://www.bngroovy.com/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.bngroovy.com/about{" "}
                </a>{" "}
                (“Site”). This Agreement states the terms of the relationship
                between BnG and its subscribers.
              </li>
              <li>
                <strong>Account. </strong> To receive services through the Site,
                Subscriber must create an account with BnG, which may include
                creating an account with third parties whose services are used
                in connection with the BnG services. By creating an account,
                each Subscriber represents and warrants the following: (a)
                Subscriber is an individual at least eighteen (18) years of age;
                (b) all information provided in connection with their account is
                correct and complete, and will be updated so as to remain
                correct and complete; (c) Subscriber not provide their account
                credentials (logins, passwords, or other means of access or
                authentication) to third parties; (d) only Subscriber shall
                conduct activity through Subscriber’s account; (e) Subscriber
                shall notify BnG immediately of any suspected breach of security
                or unauthorized use of the account.
              </li>
              <li>
                <strong> Music Subscription Policy. </strong> This Agreement
                incorporates BnG’s “Terms Regarding Purchase of Music” located
                at{" "}
                <a
                  href="www.bngroovy.com/privacy-terms-of-use/music-purchase-terms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.bngroovy.com/privacy-terms-of-use/music-purchase-terms
                </a>
              </li>
              <li>
                <strong>Non-Fungible Token Policy. </strong> This Agreement
                incorporates BnG’s “Terms Regarding Non-Fungible Tokens” located
                at www.bngroovy.com/nft-terms
              </li>
              <li>
                <strong>Data Ownership; Privacy. </strong> BnG owns all data
                generated through use of the Site and the purchase and sale of
                Tokens (“Information”). BnG may use Information (a) to
                investigate and verify proper conduct at the Site and to monitor
                the security and integrity of the Site; (b) as required by law
                and/or in response to service of legal process, such as a court
                order, summons, subpoena, and the like; and (c) implement this
                Agreement, and to communicate with Subscriber about its music
                offerings, Tokens, the Site, and this Agreement. For Information
                that is not identifiable to an individual or entity, BnG may
                also use aggregate and anonymous Information to enhance the
                Subscriber experience at the Site, to understand how the Site is
                used, to communicate with its Subscribers about BnG and the
                Site, to analyze, develop, and promote its business, and for
                research purposes. The authorization set forth in this section
                is irrevocable, royalty-free, worldwide, and transferable. Data
                containing personally identifiable information are subject to
                BnG’s privacy policy located at www.bngroovy.com/privacy-policy
              </li>

              <li>
                <strong>BnG Representations; AS-IS WARRANTY. </strong> BnG
                represents and warrants that it has the right to authorize
                access to the music and other content offered through the Site,
                to sell the Tokens offered through the Site, and to deliver
                services offered through the Site. Other than the foregoing
                representation, BnG provides, and Subscriber accepts, the Site
                and the Tokens “AS IS,” WITH NO WARRANTIES OF ANY KIND, EITHER
                EXPRESS OR IMPLIED, AND INCLUDING (WITHOUT LIMITATION) ANY
                WARRANTY OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.
              </li>
              <li>
                <strong>Payment. </strong>
                BnG accepts payment by credit card, as identified at the point
                of purchase of music/Subscription. When paying with credit card,
                you authorize BnG to charge the applicable card the amount of
                the order or Subscription at the time your request is submitted.
                You represent and warrant that you are the legal card holder for
                any payments made to BnG.
              </li>
              <li>
                <strong>Integrity of the Site. </strong>
                BnG (or its licensors, including musical artists and visual
                artists) retains all rights, including intellectual property
                rights, in the Site and content available through the Site.
                Subscriber agrees not to download or seek to download the music,
                works of the visual arts, and other content available at the
                Site unless expressly authorized by BnG. Subscriber shall not
                take any action to interfere with the operation of the Site,
                attempt to copy its underlying technology, upload other computer
                programs or files, or copy content. Subscriber agrees not to use
                any automated software (crawlers, robots, bots, spiders,
                extractors, etc.) at the Site; or circumvent, disable, or
                otherwise interfere with security-related features or digital
                rights management functions at the Site; or hack, reverse
                engineer, or disable any technology at the Site or relating to
                the Token.
              </li>
              <li>
                <strong>Limitation of Liability for Damages. </strong>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL BNG BE
                LIABLE TO SUBSCRIBER FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
                PUNITIVE, OR CONSEQUENTIAL DAMAGES, LOST PROFITS, BUSINESS
                INTERRUPTION LOSSES, OR LOSS OF DATA, RESULTING FROM THIS
                AGREEMENT, ACTIVITY AT THE SITE, OR ACTIONS BY THIRD PARTIES,
                REGARDLESS OF THE THEORY OF LIABILITY, INCLUDING EXPRESS
                CONTRACT, IMPLIED CONTRACT, NEGLIGENCE, WARRANTY, OR
                MISREPRESENTATION, AND WHETHER OR NOT BNG IS ADVISED OF THE
                POSSIBILITY OF SUCH DAMAGES. DIRECT DAMAGES ARE LIMITED TO THE
                AMOUNT OF THE PURCHASE PRICE PAID BY SUBSCRIBER TO BNG FOR THE
                MUSIC OR TOKEN THAT IS THE SUBJECT OF ANY SUBSCRIBER CLAIM. As
                used in this section, “BnG” includes BnG and its licensors, and
                their officers, directors, members, employees, contractors,
                agents, affiliates, related business entities, successors, and
                assigns.
              </li>
              <li>
                <strong>Site Accessibility. </strong> BnG may use third parties
                for services relating to the technology used to receive, store,
                and transmit data (such as server operations, hosting,
                maintenance, support, upgrading, and repair). Servers relating
                to the functioning of the Site may occasionally be inaccessible
                due to repair, maintenance, upgrades, power sources, and other
                factors.
              </li>
              <li>
                <strong> Suspension of Services. </strong>
                BnG may suspend Subscriber access to the Site and use of Tokens
                in any of the following circumstances: (a) response to legal
                process, (b) investigation of conduct that is inconsistent with
                Subscriber obligations under this Agreement, (c) termination of
                rights by BnG licensors that affect rights previously granted.
                BnG shall notify Subscriber in the event of such suspension and
                shall provide information regarding resumption of access, when
                applicable.
              </li>
              <li>
                <strong>Subscriber Responsibility. </strong>
                Subscriber acknowledges that its account with BnG and its access
                to the content at the Site and Tokens is based upon the promises
                and statements made in this Agreement. Subscriber is solely
                responsible for any costs, expenses, and damages arising from
                breaches of this Agreement or third party assertions
                inconsistent with Subscriber promises and statements. This
                obligation survives termination of this Agreement. Subscriber
                agrees to use its best efforts to assist BnG in the
                investigation and resolution of any third party claim or
                assertion inconsistent with Subscriber’s obligations under this
                Agreement, at no charge and promptly upon receipt of notice from
                BnG of such claim or assertion.
              </li>
              <li>
                <strong>The Site and Performance of Agreement. </strong>
                This Agreement is entered into, performed in, and based in Ann
                Arbor (Washtenaw County), Michigan, USA. Neither the Site nor
                this Agreement gives rise to personal jurisdiction over BnG,
                either specific or general, in jurisdictions other than
                Michigan. This Agreement shall be governed by the internal
                substantive laws of the State of Michigan, without respect to
                its conflict of laws principles. Any claim or dispute between
                Subscriber and BnG that arise in whole or in part from the Site,
                the music offered, Tokens, products or services offered, or this
                Agreement shall be decided exclusively by a court of competent
                jurisdiction located in (or having jurisdiction over) Washtenaw
                County, Michigan, including the United States District Court for
                the Eastern District of Michigan, Southern Division. Without
                limitation, neither the conduct of BnG nor Subscribers in
                connection with this Agreement, nor the terms of this Agreement,
                are affected by Laws outside of the State of Michigan or the
                federal laws of the United States of America.
              </li>
              <li>
                <strong>Notices; Electronic Communications. </strong>
                BnG may provide Subscriber with notices, including those
                regarding changes to this Agreement, by email using the
                information provided by Subscriber in its account, or by
                postings to the Site. Notice is deemed given upon the earlier of
                (a) actual receipt, (b) twenty-four (24) hours after an email is
                sent, or (c) ten (10) calendar days after a notice is posted to
                the Site. Subscriber stipulates to electronic communications as
                the sole method of notice and communications, including service
                of legal process. During the term of this Agreement it is
                possible that the purchase, sale, use, and transfer of ownership
                of Tokens may become subject to one or more Laws not in effect
                as of the Effective Date, or a change in the ownership of
                intellectual property rights of BnG’s licensors relevant to
                Tokens. Such new Laws, if any, or change of ownership, may
                fundamentally alter the power of BnG to grant the rights above
                or the exercise of such rights by Subscriber. In such case, BnG
                shall update its terms of service and notify Subscriber
                electronically of any amendment to this Agreement.
                <br />
                <br /> You may contact BnG at (BnG may update its contact
                information in accordance with the terms for modification of
                this Agreement:
                <div className="bng-address">
                  <div className="address">
                    <div>Biscuits n Groovy, LLC</div>
                    <div>330 E. Liberty Street</div>
                    <div>Ann Arbor, Michigan 48104 USA</div>
                    <div>
                      Email:{" "}
                      <a href="mailto:support@bngroovy.com?subject=Support">
                        support@bngroovy.com
                      </a>{" "}
                    </div>
                    <div>
                      <a href="https://www.bngroovy.com/">
                        https://www.bngroovy.com/
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <strong>Shortened Statute of Limitations. </strong>
                Any claim under this Agreement must be brought within one (1)
                year of the event giving rise to the claim.
              </li>
              <li>
                <strong>Entire Agreement. </strong>
                This Agreement incorporates by reference all terms appearing at
                the links identified in this Agreement. The Agreement may be
                updated and modified by BnG from time to time. Those
                modifications are incorporated as part of the Agreement.
                Subscriber will be notified of significant modifications when it
                accesses its account or the Site. If Subscriber does not accept
                the modifications to the Agreement, its sole remedy is to
                conclude its use of the Site. Provisions which, by their nature,
                are intended to survive termination shall continue, by way of
                example, exclusive remedy, shortened statute of limitation, and
                limitation of liability for damages. As used in this Agreement,
                “Law” means applicable federal, state, and local statutes,
                regulations, ordinances, executive orders, and civil laws
                applicable to this Agreement and the conduct of each party.
              </li>
              <li>
                <strong>Dispute Resolution. </strong>
                The parties shall attempt to resolve any disputes through good
                faith business negotiations or facilitative mediation in Ann
                Arbor, Michigan. The parties may agree to participate
                electronically through a platform by which all parties and the
                mediator can be seen and heard (such as Zoom). All disputes or
                claims arising out of or relating to this Agreement (including
                the breach thereof) shall be settled by arbitration, to be
                conducted by a single arbitrator in Ann Arbor, Michigan, by and
                in accordance with the then effective commercial rules of the
                American Arbitration Association or JAMS or similar professional
                dispute resolution provider; provided that the arbitrator shall
                not have authority to issue injunctions against BnG. The costs
                of the arbitration and the reasonable attorneys’ fees of the
                prevailing party shall be included in any award rendered by the
                arbitrator. Judgment upon the award may be entered in any court
                having jurisdiction thereof. Other legal proceedings, if any,
                shall be initiated and maintained only in Washtenaw County,
                Michigan, or in the U.S. District Court of the Eastern District
                of Michigan, Southern Division. The parties expressly submit to
                the exclusive personal jurisdiction and venue of these courts
                and waive any objection on the grounds of personal jurisdiction,
                venue, or forum non conveniens. 19. Force Majeure. It shall not
                be a material breach of this Agreement, and neither party shall
                be liable to the other, if prevented from performing its duties
                or responsibilities under this Agreement by reason of any fire
                or other casualty, acts of God, earthquake, floods, explosions,
                interrupted power supply, sabotage, war, riots, acts of
                terrorism; inability to procure or a general shortage of labor,
                equipment, facilities, materials or supplies in the open market;
                strikes, court orders, laws, regulations, or orders of
                government or military authorities; pandemic; or any other cause
                not within the control of such party whose performance is
                delayed.
              </li>
              <li>
                <strong>Force Majeure. </strong>
                It shall not be a material breach of this Agreement, and neither
                party shall be liable to the other, if prevented from performing
                its duties or responsibilities under this Agreement by reason of
                any fire or other casualty, acts of God, earthquake, floods,
                explosions, interrupted power supply, sabotage, war, riots, acts
                of terrorism; inability to procure or a general shortage of
                labor, equipment, facilities, materials or supplies in the open
                market; strikes, court orders, laws, regulations, or orders of
                government or military authorities; pandemic; or any other cause
                not within the control of such party whose performance is
                delayed.
              </li>
              <li>
                <strong>Additional General Terms. </strong>
                No waiver by BnG shall be implied. A waiver must be in writing
                and signed by an officer of BnG. If any portion of this
                Agreement is found to be unenforceable, such portion will be
                modified to reflect the parties' intent set forth in such
                portion and only to the extent necessary to make it enforceable.
                The remaining provisions of this Agreement will remain in full
                force and effect. BnG may assign, subcontract, delegate, and
                transfer its rights and obligations under this Agreement to a
                third party. Subscriber represents they have the legal power to
                enter into this Agreement. These Terms are binding upon the
                heirs and personal representatives of Subscriber.
              </li>
            </ol>
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Subscriber;
