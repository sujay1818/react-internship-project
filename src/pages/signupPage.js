import React from "react";
import Signup from "./../components/signup";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const SignupPage = () => {
  return (
    <div>
      <Navbar
        styling2="navbarListItemUnactive"
        styling1="navbarListItemUnactive"
        styling3="navbarListItemUnactive"
        noLogin={false}
        noSignup={true}
      />
      <Signup />
      <Footer />
    </div>
  );
};

export default SignupPage;
