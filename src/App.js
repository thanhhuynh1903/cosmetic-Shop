// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import publicRoutes from './route/publicRoutes';
import Header from './components/layouts/Header/Header';
import './App.css'; // Import file CSS
import Footer from './components/layouts/Footer/Footer';
const App = () => {
  return (
    <div className="app-container">
    <Header/>
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
    <Footer/>
    </div>
  );
};

export default App;
