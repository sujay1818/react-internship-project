import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
// import LoginPage from "./pages/loginPage";
// import SignupPage from "./pages/signupPage";
// import SellPage from "./pages/sellPage";
// import BuyPage from "./pages/buyPage";
import { useGlobalAuthContext } from "./AuthContext";

// const HomePage = React.lazy(() => import("./pages/homePage"));
const LoginPage = React.lazy(() => import("./pages/loginPage"));
const SignupPage = React.lazy(() => import("./pages/signupPage"));
const SellPage = React.lazy(() => import("./pages/sellPage"));
const BuyPage = React.lazy(() => import("./pages/buyPage"));
const MapPage = React.lazy(() => import("./pages/mapPage"));

const App = () => {
  const {
    setUserId,
    setCurrentUser,
    setToken,
    setIsLogedIn,
    setExpirationDate,
  } = useGlobalAuthContext();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      setCurrentUser(storedData.user);
      setUserId(storedData.userId);
      setToken(storedData.token);
      setIsLogedIn(!!storedData.token);
      setExpirationDate(new Date(storedData.expiration));
    }
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/sell" element={<SellPage />} />
          <Route path="/buy" element={<BuyPage />} />
          <Route path="/map" element={<MapPage />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
