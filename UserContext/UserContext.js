import React from "react";

//creating a new conext
const UserContext = React.createContext();

//Provider
const UserProvider = UserContext.Provider;

//Consumer
const UserConsumer =UserContext.Consumer;


export { UserProvider, UserConsumer };