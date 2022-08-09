import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  function handleSignup(e) {
    e.preventDefault();
    navigate("/Signup");
  }
  function handleLogin(e) {
    e.preventDefault();
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
                <lable>Shop Online</lable>
              </li>
            </ul>
            {/* <!-- Left links --> */}

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
          </div>
          {/* <!-- Collapsible wrapper --> */}
        </div>
        {/* <!-- Container wrapper --> */}
      </nav>
    </div>
  );
}

export default Navbar;
