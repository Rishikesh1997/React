import React, {Component} from "react";
import UserContextConsumerChild2 from "./UserContextConsumerChild2";




export default class UserContextConsumerChild1 extends Component {
    render () {
        return(
            <>
            <h1>In UserContextConsumerChild1</h1>
            <UserContextConsumerChild2 />
            </>
        );
    }
}

