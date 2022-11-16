import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";

const LoggedRoute = ({ path, component }) =>
{
    const {isLogged } = useContext(UserContext)
    return isLogged ? (
        <Route exact path={path} component={component} />
    ): (
        <Redirect to = "../" />
    )
}

export default LoggedRoute