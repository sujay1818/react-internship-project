import React from "react";
import Buy from "../components/buy";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const BuyPage = () => {
  return (
    <div>
      <Navbar
        styling3="navbarListItemActive"
        styling2="navbarListItemUnactive"
        styling1="navbarListItemUnactive"
      />
      <Buy />
      <Footer />
    </div>
  );
};

export default BuyPage;
