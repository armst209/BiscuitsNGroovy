import MailchimpSubscribe from "react-mailchimp-subscribe";
import NewsLetterForm from "./NewsLetterForm";
import "./NewsLetterSubscribeStyles.scss";

import { ReactComponent as LetterIcon } from "../../../assets/images/letter2_yellow.svg";

const NewsletterFormContainer = () => {
  const postUrl = `https://bngroovy.us1.list-manage.com/subscribe/post?u=${import.meta.env.VITE_MAILCHIMP_U}&id=${import.meta.env.VITE_MAILCHIMP_NEWSLETTER_ID}`;

  return (
    <section id="subscribe">
      <h1>JOIN OUR NEWSLETTER</h1>
      <p className="newsletter-subtitle">
        Stay up to date on all things groovy
      </p>
      <LetterIcon className="mail-plus-icon" />
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <NewsLetterForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </section>
  );
};

export default NewsletterFormContainer;
