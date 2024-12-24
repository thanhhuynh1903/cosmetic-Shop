// App.js
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import publicRoutes from "./route/publicRoutes";
import Header from "./components/layouts/Header/Header";
import "./App.css"; // Import file CSS
import Footer from "./components/layouts/Footer/Footer";
const App = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/checkout";
  console.log(hideHeaderFooter);

  return (
    <div className="app-container">
      {!hideHeaderFooter && <Header />}
      <div className="content">
        <Routes>
          {publicRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
              title={route.title}
            />
          ))}
        </Routes>
      </div>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

export default App;
