import MailchimpSubscribe from "react-mailchimp-subscribe";
import NewsLetterForm from "./NewsLetterForm";
import "./NewsLetterSubscribeStyles.scss";
import ComponentLoading from "../Loading/ComponentLoading";
import { ReactComponent as LetterIcon } from "../../assets/images/letter2_yellow.svg";

const NewsletterFormContainer = (props) => {
  const postUrl = `https://bngroovy.us1.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  return (
    <section id="subscribe">
      <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
      <LetterIcon />
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <>
            {status === "sending" && (
              <div className="form-loader">
                <ComponentLoading />
                <div>Sending...</div>
              </div>
            )}
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
