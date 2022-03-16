import { useQuery } from "react-query";
import axios from "axios";
import { Route, useRouteMatch } from "react-router-dom";


//styles
import styles from "./Users.module.scss"
import UserInfo from "./UserInfo";
import { Switch, Link } from "react-router-dom";
import ChangeUserInfo from "./ChangeUserInfo";

const User = ({ routes }) => {

    const { path, url } = useRouteMatch();

    console.log(path, url);

    const fetchUser = () => {
        return axios({ method: "GET", url: "https://randomuser.me/api/" })
    }

    const onSuccess = (data) => {
        console.log("success");
    }
    const { isLoading, data: userData, isError } = useQuery("get-users", fetchUser, { onSuccess })

    if (isLoading) {
        return <>Loading...</>
    }

    if (isError) {
        return <div>Error</div>
    }

    return (
        <section id={styles.user} className="_main_section">
            <aside>
                <nav>
                    <ul>
                        <li><Link to={`${url}/change`}>Change User Info</Link></li>
                        <li>Test Link</li>
                        <li>Test Link</li>
                        <li>Test Link</li>
                        <li>Test Link</li>
                    </ul>
                </nav>
            </aside>
            <main>
                <Switch>
                    {/* <Route exact path={path} component={routes[0].component} /> */}
                    <Route path={`${path}/:ID`} >
                        <ChangeUserInfo />
                    </Route>

                    {/* {routes.map(route => <Route path={path} exact={route.exact} key={route.key} component={route.component} />)} */}
                </Switch>
            </main>

        </section>
    )
}

export default User