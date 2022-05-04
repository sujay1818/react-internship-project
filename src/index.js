import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { AuthProvider } from "./AuthContext";
ReactDOM.render(
  <AuthProvider>
    <Suspense fallback={<div>Loading... </div>}>
      <App />
    </Suspense>
  </AuthProvider>,
  document.getElementById("root")
);
