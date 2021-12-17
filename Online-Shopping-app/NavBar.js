import { Link } from "react-router-dom";

export default () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <Link class="navbar-brand" to={""}>
            Navbar
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to={"/cart"}>
                  SomeMenu
                </Link>
              </li>

              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  to={""}
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </Link>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link class="dropdown-item" to={""}>
                      WishList
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to={""}>
                      Cart
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <Link class="dropdown-item" to={""}>
                      Orders
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to={"/login"}>
                  SignIn/SignUp
                </Link>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};
