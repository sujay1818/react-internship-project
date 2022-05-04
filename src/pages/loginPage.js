import React from "react";
import Login from "./../components/login";
import Navbar from "../components/navbar";
import Footer from "../components/footer";



const LoginPage = () => {
  return (
    <div>
      <Navbar
        styling2="navbarListItemUnactive"
        styling1="navbarListItemUnactive"
        styling3="navbarListItemUnactive"
        noSignup={false}
        noLogin={true}
        />
      <Login />
      <Footer />
    </div>
    
  );
};
  

export default LoginPage;
