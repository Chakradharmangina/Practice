import Navbar from "./Navbars/Navbar";
import "../App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Loginpage() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [isemailvalid, setemailvalid] = useState("");
  const [ispasswordvalid, setpasswordvalid] = useState("");
  const [flag, setflag] = useState(true);
  const [response, setresponse] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    if (isemailvalid && ispasswordvalid) {
      setflag(false);
    } else {
      setflag(true);
    }
  }, [isemailvalid, ispasswordvalid]);
  function handlechange(e) {
    const { id, value } = e.target;
    if (id == "password") {
      if (value.length >= 6) {
        setpassword(value);
        setpasswordvalid(true);
      } else {
        setpasswordvalid(false);
      }
    }
    if (id == "email") {
      var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (value.match(validRegex)) {
        setemail(value);
        setemailvalid(true);
      } else {
        setemailvalid(false);
      }
    }
  }
  function handlelogin(e) {
    e.preventDefault();
    axios
      .post(`http://localhost:3001/Login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        setresponse(res.data);
        if (res.data.status) {
          localStorage.setItem("token", res.data.token);
          navigate("/Dashboard");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <Navbar></Navbar>
      <section
        className=" mb-10px"
        style={{ backgroundColor: "#84C3B3 ", height: "93vh" }}
      >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-9">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-4 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                      alt="login form"
                      className="img-fluid loginimg"
                      style={{
                        borderRadius: "1rem 0 0 1rem",
                        maxWidth: "110%",
                      }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i
                            className="fas fa-cubes fa-2x me-3"
                            style={{ color: "ff6219" }}
                          ></i>
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/218/218641.png"
                            height="40"
                            alt="shoping Logo"
                            loading="lazy"
                            style={{ marginTop: "-1px", marginRight: "5px" }}
                          />
                          <span className="h1 fw-bold mb-0">Shop Online</span>
                        </div>

                        <h3
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: "1px", fontStyle: "normal" }}
                        >
                          Sign into your account
                        </h3>

                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form2Example17"
                          >
                            Email address
                          </label>
                          <input
                            type="email"
                            id="email"
                            className="form-control form-control-lg"
                            onChange={handlechange}
                          />
                          {isemailvalid === false ? (
                            <div style={{ color: "red" }}>
                              please enter a valid email
                            </div>
                          ) : (
                            <div></div>
                          )}
                        </div>

                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form2Example27"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            id="password"
                            className="form-control form-control-lg"
                            onChange={handlechange}
                          />

                          {ispasswordvalid === false ? (
                            <div style={{ color: "red" }}>
                              Password Should Contain atleast 6 Characters
                            </div>
                          ) : (
                            <div></div>
                          )}
                        </div>
                        <div className="pt-1 mb-4">
                          <button
                            disabled={flag}
                            className="btn btn-dark btn-lg btn-block"
                            type="button"
                            onClick={handlelogin}
                          >
                            Login
                          </button>
                        </div>
                        {response ? (
                          response.status === false && (
                            <div style={{ color: "red" }}>{response.msg}</div>
                          )
                        ) : (
                          <div> </div>
                        )}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Loginpage;
