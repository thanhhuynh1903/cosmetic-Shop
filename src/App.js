// App.js
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import publicRoutes from "./route/publicRoutes";
import Header from "./components/layouts/Header/Header";
import "./App.css"; // Import file CSS
import Footer from "./components/layouts/Footer/Footer";
import ErrorPage404 from "./page/ErrorPage/ErrorPage";
import { useEffect } from "react";
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App = () => {
  const location = useLocation();
  const hideHeaderFooter =
    location.pathname === "/checkout" ||
    location.pathname === "/complete" ||
    location.pathname === "/error";

  return (
    <div className="app-container">
      {!hideHeaderFooter && <Header />}
      <div className="content">
        <ScrollToTop />
        <Routes>
          {publicRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
              title={route.title}
            />
          ))}
          {!hideHeaderFooter && <Route path="*" element={<ErrorPage404 />} />}
        </Routes>
      </div>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

export default App;
