import MailchimpSubscribe from "react-mailchimp-subscribe";
import NewsLetterForm from "./NewsLetterForm";
import "./NewsLetterSubscribeStyles.scss";
import { ReactComponent as LetterIcon } from "../../assets/images/letter2_yellow.svg";

const NewsletterFormContainer = () => {
  const postUrl = `https://bngroovy.us1.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_NEWSLETTER_ID}`;

  return (
    <section id="subscribe">
      <h1 style={{ fontFamily: "var(--font3)" }}>JOIN OUR NEWSLETTER</h1>

      <LetterIcon />
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <>
            <NewsLetterForm
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
            />
          </>
        )}
      />
    </section>
  );
};

export default NewsletterFormContainer;
