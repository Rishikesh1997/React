import { Link } from "react-router-dom";

export default () => {
  return (
    <div class="col-4" style={logInCSS.block}>
      <form>
        <div className="mb-4">
          <label className="form-label">Email</label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter Email"
            required
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Password</label>
          <input
            className="form-control"
            type="password"
            placeholder="Enter Password"
            required
          />
        </div>

        <button className="btn btn-success" type="submit">
          Submit
        </button>
        <Link class="nav-link active" aria-current="page" to={"/register"}>
          register here
        </Link>
      </form>
    </div>
  );
};

const logInCSS = {
  block: {
    backgroundColor: "#e6fff9",
  },
};
