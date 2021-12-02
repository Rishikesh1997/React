import React, {Component} from "react";
import UserContextConsumerChild from "./UserContextConsumerChild";



export default class UserContextConsumer extends Component {
    render () {
        return(
            <>
            <h1>In UserContextConsumer</h1>
            <UserContextConsumerChild/>
            </>
        );
    }
}

