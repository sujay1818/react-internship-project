import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

import { useGlobalAuthContext } from "../AuthContext";
import "../static/signup.css";

const Signup = () => {
  const navigate=useNavigate();
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [loaderOpen, setLoaderOpen] = useState(false);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  const {
    setAuthBackdrop,
    setUserId,
    setCurrentUser,
    setToken,
    setIsLogedIn,
    expirationDate,
  } = useGlobalAuthContext();

  //* REGISTER HANDLER LOGIC

  const registerHandler = async (e) => {
    e.preventDefault();
    setLoaderOpen(!loaderOpen);
    setError(null);

    try {
      // console.log("upload ke baad ka response");
      const response = await fetch(
        "https://pashu-bazzar.herokuapp.com/api/users/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: registerName,
            email: registerEmail,
            password: registerPassword,
          }),
        }
      );

      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message);
      }
      console.log(responseData);
      setLoaderOpen(false);
      setAuthBackdrop(false);
      setUserId(responseData.user.id);
      setCurrentUser(responseData.user);
      setRegisterName("");
      setRegisterEmail("");
      setRegisterPassword("");
      setIsLogedIn(!!responseData.token);
      setToken(responseData.token);
      navigate("/");
      
    }
    
    catch (err) {
      // Create a reference to the file to delete
      console.log(err.message);
      setError(err.message || "Something went wrong, Please try again");
      setOpen(true);
      setLoaderOpen(false);
    }
  };

  return (
    <>
      <section className="signupFormContainer">
        <div className="signupImg">
          <img
            src="https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
          <div className="upperFilmSignup">
            <h1>WELCOME</h1>
            <p>
              If you are new to Pashu Bazar , to get connected with us please
              fill up this form and create an account.
            </p>
            <p style={{ marginTop: "3rem" }}>Already have an account?</p>
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <button className="loginLink">Login</button>
            </Link>
          </div>
        </div>
        <form className="signupForm">
          <Collapse in={open}>
            <Alert
              severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                    setError(null);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              {error}
            </Alert>
          </Collapse>
          <h1
            style={{ textAlign: "center", margin: "0.2rem", color: "orange" }}
          >
            Registration
          </h1>
          <p style={{ textAlign: "center", margin: "0.2rem" }}>
            Fill the form To Join Pashu Bazar
          </p>
          <div className="signupName">
            <p className="name">Name</p>
            <input
              type="text"
              name="signupName"
              className="nameInput"
              placeholder="Full name"
              onChange={(e) => setRegisterName(e.target.value)}
              value={registerName}
              required
            />
          </div>
          <div className="signupEmail">
            <p className="name">Email</p>
            <input
              type="signupEmail"
              name="email"
              className="emailInput"
              placeholder="Email Address"
              onChange={(e) => setRegisterEmail(e.target.value)}
              value={registerEmail}
              required
            />
          </div>
          {/* <div className="signupDOB">
            <p className="name">DOB</p>
            <input
              type="date"
              name="signupDob"
              className="DOBInput"
              placeholder="Date of birth"
              required
            />
          </div>
          <div className="signupGender">
            <p className="name">Gender</p>
            <input
              type="radio"
              name="signupGender"
              className="genderInput"
              placeholder="Your Gender"
              id="male"
              required
            />
            <label for="male">male</label>
            <input
              type="radio"
              name="signupGender"
              className="genderInput"
              placeholder="Your Gender"
              id="female"
              required
            />
            <label for="female">Female</label>
            <input
              type="radio"
              name="signupGender"
              className="genderInput"
              placeholder="Your Gender"
              id="others"
              required
            />
            <label for="others">Others</label>
          </div>
          <div className="signupCity">
            <p className="name">City</p>
            <input
              type="text"
              name="signupCity"
              className="cityInput"
              placeholder="Your City"
              required
            />
          </div> */}
          <div className="signupPassword">
            <p className="name">Password</p>
            <input
              type="password"
              name="signupPassword"
              className="passwordInput"
              placeholder="Choose a Password"
              onChange={(e) => setRegisterPassword(e.target.value)}
              value={registerPassword}
              required
            />
          </div>

          <button
            onClick={(e) => {
              registerHandler(e);
            }}
            type="submit"
            className="signupSubmit"
          >
            SIGN UP
          </button>
        </form>
      </section>
    </>
  );
};

export default Signup;
