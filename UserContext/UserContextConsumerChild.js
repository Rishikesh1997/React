import React, {Component} from "react";
import UserContextConsumerChild1 from "./UserContextConsumerChild1";





export default class UserContextConsumerChild extends Component {
    render () {
        return(
            <>
            <h1>In UserContextConsumerChild</h1>
            <UserContextConsumerChild1 />
            </>
        );
    }
}

