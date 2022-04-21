//react helmet
import { Helmet } from "react-helmet-async";

//react imports
import { useLocation } from "react-router-dom";

const SEOHelmet = ({ title, content }) => {
  const route = useLocation();

  return (
    <Helmet>
      <title>{title} | Biscuits n Groovy</title>
      <meta name="description" content={content} />
      <link rel="canonical" href={`https://bngroovy.com${route.pathname}`} />
      {/* Open Graph Meta Tags*/}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${title} | Biscuits n Groovy`} />
      <meta property="og:description" content={content} />
      <meta property="og:image" content="" />
      <meta property="og:image:alt" content={content} />
      <meta property="og:url" content={`https://bngroovy.com${route.pathname}`} />
      <meta property="og:site_name" content="Biscuits n Groovy" />
      {/* Twitter Meta Tags*/}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={`${title} | Biscuits n Groovy`} />
      <meta name="twitter:description" content={content} />
      <meta name="twitter:image" content="" />
      <meta name="twitter:image:alt" content={content} />
      <meta name="twitter:site" content="@bngroovy" />
      <meta name="twitter:creator" content="@bngroovy" />
    </Helmet>
  );
};

export default SEOHelmet;
