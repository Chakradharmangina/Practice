import { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";

function SignupPage() {
  const [email, setemail] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [isemailvalid, setemailvalid] = useState("");
  const [flag, setflage] = useState(true);
  useEffect(() => {
    if (
      email != "" &&
      username != "" &&
      password.length >= 6 &&
      phonenumber.length == 10 &&
      isemailvalid
    ) {
      setflage(false);
    }
  }, [email, username, password, phonenumber]);
  function handlechange(e) {
    setflage(true);
    const { id, value } = e.target;
    if (id == "username") {
      setusername(value);
    }
    if (id == "email") {
      setemail(value);
      var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (value.match(validRegex)) {
        setemailvalid(true);
      } else {
        setemailvalid(false);
      }
    }
    if (id == "phonenumber") {
      setphonenumber(value);
    }
    if (id == "password") {
      setpassword(value);
    }
  }
  function handlesubmit(e) {
    e.preventDefault();
    console.log(e);
    axios
      .post(`http://localhost:3001/signup`, {
        username: username,
        email: email,
        password: password,
        phonenumber: phonenumber,
      })
      .then((res) => {
        window.alert(res.data);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up Form
                      </p>

                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="name">
                              Name
                            </label>
                            <input
                              type="text"
                              id="username"
                              className="form-control"
                              value={username}
                              onChange={handlechange}
                              placeholder="Enter Full Name"
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="email">
                              Email
                            </label>
                            <input
                              type="email"
                              id="email"
                              className="form-control"
                              value={email}
                              onChange={handlechange}
                              placeholder="Example@yaho.com"
                            />
                            {isemailvalid === false ? (
                              <div>please enter a valid email</div>
                            ) : (
                              <div></div>
                            )}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="password">
                              Password
                            </label>
                            <input
                              type="password"
                              id="password"
                              className="form-control"
                              value={password}
                              onChange={handlechange}
                              placeholder="Minimum Password Length is 6"
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="phonenumber">
                              Phone Number
                            </label>
                            <input
                              type="text"
                              id="phonenumber"
                              className="form-control"
                              value={phonenumber}
                              onChange={handlechange}
                              placeholder="Should Contain 10 Digits"
                            />
                          </div>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            disabled={flag}
                            type="submit"
                            className="btn btn-primary btn-lg"
                            onClick={(e) => handlesubmit(e)}
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample image"
                      />
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

export default SignupPage;
