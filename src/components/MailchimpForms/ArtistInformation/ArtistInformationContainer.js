
//component imports
import MailchimpSubscribe from "react-mailchimp-subscribe";
import FormLoader from "../../Loading/Forms/FormLoader";
import ArtistInformationForm from "./ArtistInformationForm";

//styles
import "./ArtistInformationContainerStyles.scss";

const ArtistInformationContainer = () => {
  const postUrl = `https://bngroovy.us1.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&amp;id=${process.env.REACT_APP_MAILCHIMP_ARTIST_ID}`;
  return (
    <MailchimpSubscribe
      url={postUrl}
      render={({ subscribe, status, message }) => (
        <>
          {status === "sending" && <FormLoader />}
          <ArtistInformationForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        </>
      )}
    />
  );
};

export default ArtistInformationContainer;
