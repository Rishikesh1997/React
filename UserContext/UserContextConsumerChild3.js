import React, {Component} from "react";
import { UserConsumer } from "./UserContext";



export default class UserContextConsumerChild3 extends Component {
    render() {
        return (
            <>
            <h1>In UserContextConsumerChild3</h1>
            <UserConsumer>
                {(value) => {
                    return(
            <h2>
                The latest value in the context is name is {value.name} and age is {""}
                {value.age}{""}
            </h2>
        );
    }}
            </UserConsumer>
    </>
        );
}
}