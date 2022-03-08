//react helmet
import { Helmet } from "react-helmet-async"

const SEOHelmet = ({ title, content }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={content} />
        </Helmet>
    )
}

export default SEOHelmet