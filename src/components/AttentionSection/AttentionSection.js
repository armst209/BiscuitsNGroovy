
//styles
import "./AttentionSectionStyles.scss";

//image imports
import reminder_image from "../../assets/images/subscribe-outline.webp";

//component imports
import NewsletterFormContainer from "../MailchimpForms/NewsLetterSubscribe/NewsletterFormContainer";
import ArtistReminder from "./ArtistReminder/ArtistReminder";

const AttentionSection = () => {
  return (
    <section id="attention-section">
      <div className="attention-section-container">
        <ArtistReminder />
        <NewsletterFormContainer />
      </div>
      <img
        className="attention-section-image"
        src={reminder_image}
        alt="reminder bottom"
      />
    </section>
  );
};

export default AttentionSection;
