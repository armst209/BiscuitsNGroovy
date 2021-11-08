import MailchimpSubscribe from "react-mailchimp-subscribe";
import ComponentLoading from "../../Loading/Component/ComponentLoading";

import ArtistInformationForm from "./ArtistInformationForm";
const ArtistInformationContainer = () => {
  const postUrl = `https://bngroovy.us1.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;
  return (
    <>
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
