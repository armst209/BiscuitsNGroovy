import MailchimpSubscribe from "react-mailchimp-subscribe";

import ArtistInformationForm from "./ArtistInformationForm";
import "./ArtistInformationFormStyles.scss";

const ArtistInformationContainer = () => {
  const postUrl = `https://bngroovy.us1.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&amp;id=${process.env.REACT_APP_MAILCHIMP_ARTIST_ID}`;
  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <>
            <ArtistInformationForm
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
            />
          </>
        )}
      />
    </>
  );
};

export default ArtistInformationContainer;
