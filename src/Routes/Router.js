//react imports
import { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

//component imports
import Loading from "common/components/Loading/Loading";

//redux imports
import { useSelector } from "react-redux";

//Google Analytics import
import PageViewsTracking from "common/utils/GoogleAnalytics/PageViewsTracking";
import Homepage from "pages/Home/Homepage";

const Router = ({ routes }) => {
  const isUserAuthenticated = useSelector((state) => state.bng_user.authentication.isAuthenticated);

  return (
    <PageViewsTracking>
      <Routes>
        {routes.map((route) => {
          if (route.private) {
            if (isUserAuthenticated) {
              return (
                <Route
                  key={route.key}
                  path={route.path}
                  element={
                    <Suspense fallback={<Loading />}>
                      <route.element routes={route.routes} />
                    </Suspense>
                  }
                />
              );
            }
            return <Route key={route.key} component={<Homepage />} />;
          }
          return (
            <Route
              key={route.key}
              path={route.path}
              element={
                <Suspense fallback={<Loading />}>
                  <route.element routes={route.routes} />
                </Suspense>
              }
            />
          );
        })}
      </Routes>
    </PageViewsTracking>
  );
};

export default Router;
