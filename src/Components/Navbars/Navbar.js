import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Logout } from "../Authentication/auth";
import "../../App.css";

function Navbar(props) {
  console.log("pp", props);
  // const { username } = props.data;
  const navigate = useNavigate();
  let isuserlogedin = localStorage.getItem("token");
  function handleSignup(e) {
    e.preventDefault();
    navigate("/Signup");
  }
  function handleLogin(e) {
    e.preventDefault();
    navigate("/");
  }
  function handleLogout(e) {
    Logout();
    navigate("/");
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* <!-- Container wrapper --> */}
        <div className="container">
          {/* <!-- Navbar brand --> */}
          <Link to="/" className="navbar-brand me-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/218/218641.png"
              height="35"
              alt="shoping Logo"
              loading="lazy"
              style={{ marginTop: "-1px" }}
            />
          </Link>
          {/* <!-- Collapsible wrapper --> */}
          <div className="collapse navbar-collapse" id="navbarButtonsExample">
            {/* <!-- Left links --> */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <label>Shop Online</label>
              </li>
            </ul>
            {/* <!-- Left links --> */}

            {!isuserlogedin ? (
              <div className="d-flex align-items-center">
                <button
                  type="button"
                  // className="btn btn-link px-3 me-2"
                  className="btn btn-secondary me-3"
                  onClick={handleLogin}
                >
                  Login
                </button>
                <button
                  type="button"
                  className="btn btn-secondary me-3"
                  onClick={handleSignup}
                >
                  Register
                </button>
              </div>
            ) : (
              <div>
                <div class="dropdown show">
                  <a
                    class="btn btn-outline-secondary  dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Hello {props.username}
                  </a>

                  <div
                    class="dropdown-menu "
                    aria-labelledby="dropdownMenuLink"
                  >
                    <Link to="/Dashboard" class="dropdown-item">
                      Profile
                    </Link>
                    <a class="dropdown-item" onClick={handleLogout}>
                      Logout
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* <!-- Collapsible wrapper --> */}
        </div>
        {/* <!-- Container wrapper --> */}
      </nav>
    </div>
  );
}

export default Navbar;
