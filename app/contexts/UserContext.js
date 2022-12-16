import React from "react";

export default React.createContext(
    {
        isLogged : false,
        setLog : value => {},
        user : "",
        setUser : value => {""},
        darkMode : false,
        setDarkMode : value => {} 
    }
);