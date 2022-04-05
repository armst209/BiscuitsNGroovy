//react helmet
import { Helmet } from "react-helmet-async";

//react imports
import { useRouteMatch } from "react-router-dom";

const SEOHelmet = ({ title, content }) => {
  const route = useRouteMatch();

  return (
    <Helmet>
      <title>{title} | Biscuits n Groovy</title>
      <meta name="description" content={content} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${title} | Biscuits n Groovy`} />
      <link rel="canonical" href={`${route.path}`} />
    </Helmet>
  );
};

export default SEOHelmet;
