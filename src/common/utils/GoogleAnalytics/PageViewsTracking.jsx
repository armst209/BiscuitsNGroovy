//Google Analytics imports
// import ReactGA from "react-ga"

//react imports
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";


const PageViewsTracking = ({ children }) => {

    // let location = useLocation();

    // useEffect(() => {
    //     ReactGA.set({ page: location.pathname });
    //     ReactGA.pageview(location.pathname)
    // }, [location])

    return <>{children}</>;
}

export default PageViewsTracking