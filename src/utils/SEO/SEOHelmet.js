//react helmet
import { Helmet } from "react-helmet-async"

//react imports
import { useRouteMatch } from "react-router-dom";


const SEOHelmet = ({ title, content }) => {

    const route = useRouteMatch();

    return (
        <Helmet>
            <title>{title} | Biscuits n Groovy</title>
            <meta name="description" content={content} />
            <link rel="canonical" href={`${route.path}`} />
        </Helmet>
    )
}

export default SEOHelmet