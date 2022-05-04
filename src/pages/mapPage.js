import React from "react";
import MAP from "../components/map";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const mapPage = () => {
  return (
    <div>
      <Navbar
        styling3="navbarListItemActive"
        styling2="navbarListItemUnactive"
        styling1="navbarListItemUnactive"
      />
      <MAP />
      <Footer />
    </div>
  );
};

export default mapPage;
