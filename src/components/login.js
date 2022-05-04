import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";

import { useGlobalAuthContext } from "../AuthContext";
import "../static/login.css";

const Login = () => {
const navigate=useNavigate();
  const {
    setAuthBackdrop,
    setUserId,
    setCurrentUser,
    setToken,
    setIsLogedIn,
    expirationDate,
  } = useGlobalAuthContext();

  const [loginActive, setLoginActive] = useState(true);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [loaderOpen, setLoaderOpen] = useState(false);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  //* LOGIN HANDLER LOGIC

  const loginHandler = async (e) => {
    e.preventDefault();
    setLoaderOpen(!loaderOpen);
    setError(null);

    try {
      const response = await fetch(
        "https://pashu-bazzar.herokuapp.com/api/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: loginEmail,
            password: loginPassword,
          }),
        }
      );

      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message);
      }
      console.log(responseData);

      setUserId(responseData.user.id);
      setCurrentUser(responseData.user);
      setLoginEmail("");
      setLoginPassword("");
      setToken(responseData.token);
      setIsLogedIn(!!responseData.token);
      setLoaderOpen(false);
      setAuthBackdrop(false);

      const tokenExpirationDate =
        expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);

      localStorage.setItem(
        "userData",
        JSON.stringify({
          userId: responseData.user.id,
          user: responseData.user,
          token: responseData.token,
          expiration: tokenExpirationDate.toISOString(),
        })
      );
      navigate("/");
    } catch (err) {
      console.log(err.message);
      setError(err.message || "Something went wrong, Please try again");
      setOpen(true);
      setLoaderOpen(false);
    }
  };

  return (
    <>
      <section className="loginFormContainer">
        <div className="loginImg">
          <img
            src="https://images.unsplash.com/photo-1598715685267-0f45367d8071?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
            alt=""
          />
          <div className="upperFilmLogin">
            <h1>WELCOME BACK</h1>
            <p>
              We are happy to see you back. Hope that you are doing well, login
              to catch up!
            </p>
            <p style={{ marginTop: "3rem" }}>Don't have an account?</p>
            <Link
              to="/signup"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <button className="signupLink">Signup</button>
            </Link>
          </div>
        </div>
        <form className="loginForm">
          <h1
            style={{ textAlign: "center", margin: "0.2rem", color: "orange" }}
          >
            Login
          </h1>
          <p style={{ textAlign: "center", margin: "0.2rem" }}>
            Fill the form To log in to your Pashu Bazar account
          </p>

          <div className="loginEmail">
            <p className="name">Email</p>
            <input
              type="email"
              name="loginEmail"
              className="emailInput"
              placeholder="Email Address"
              onChange={(e) => setLoginEmail(e.target.value)}
              value={loginEmail}
              required
            />
          </div>
          {/* <div className="loginName">
            <p className="name">Name</p>
            <input
              type="text"
              name="LoginName"
              className="nameInput"
              placeholder="Full name"
              
              required
            />
          </div>

          <div className="loginCity">
            <p className="name">City</p>
            <input
              type="text"
              name="loginCity"
              className="cityInput"
              placeholder="Your City"
              required
            />
          </div> */}
          <div className="loginPassword">
            <p className="name">Password</p>
            <input
              type="password"
              name="loginPassword"
              className="passwordInput"
              placeholder="Enter  Your Password"
              onChange={(e) => setLoginPassword(e.target.value)}
              value={loginPassword}
              required
            />
          </div>

          <button
            onClick={(e) => loginHandler(e)}

            type="submit"
            className="loginSubmit"
          >
            LOGIN
          </button>
        </form>
      </section>
    </>
  );
};

export default Login;
