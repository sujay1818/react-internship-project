import React from "react";
import AboutUs from "../components/aboutUs";
import Faq from "../components/faq";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Review from "../components/review";
import Hero from "../components/Hero/Hero";
const HomePage = () => {
  return (
    <div>
      <Navbar
        styling1="navbarListItemActive"
        styling2="navbarListItemUnactive"
        styling3="navbarListItemUnactive"
      />
      <div>
        <Hero />
      </div>
      <AboutUs />
      <div className="compose">
        <Review />
        <Faq />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
