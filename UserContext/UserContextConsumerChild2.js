import React, {Component} from "react";
import UserContextConsumerChild3 from "./UserContextConsumerChild3";




export default class UserContextConsumerChild2 extends Component {
    render () {
        return(
            <>
            <h1>In UserContextConsumerChild2</h1>
            <UserContextConsumerChild3 />
            </>
        );
    }
}

