import React,{ Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component {
    render () {
        return (
            <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link class="navbar-brand" to={""}>Navbar</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to={"posts"}>Posts <span class="sr-only"></span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to={"todos"}>ToDos</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to={"users"}>Users</Link>
      </li>
     
    </ul>
    
  </div>
</nav>
            </>
        );
    };
}