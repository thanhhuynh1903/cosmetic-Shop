"use client";

import { useState, useEffect } from "react";
import NavItem from "../../NavItem/NavItem";
import routes from "../../../route/routes";
import { Link } from "react-router-dom";
// import logo from "../../../assets/imgs/logo.png";
import { Menu, X } from "lucide-react";
import "./Header.css";
import { motion } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navVariants = {
    inactive: { scale: 1, opacity: 1 },
    active: {
      scale: 1.1,
      opacity: 1,
      transition: { type: "spring", stiffness: 300 },
    },
  };
  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    // Add scroll event listener to change header style on scroll
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Common NavItem styling
  const navItemStyle = ({ isActive }) =>
    isActive
      ? "mx-[20px]  hover:border-[f8fafc] border-b-[2px] border-[f8fafc]"
      : "mx-[20px]  hover:border-[f8fafc] ";

  // Mobile NavItem styling
  const mobileNavItemStyle = ({ isActive }) =>
    isActive
      ? "block border-b border-gray-200 text-center font-medium"
      : "block border-b border-gray-200 text-center";

  return (
    <div
      className={`color-header w-full sticky top-0 z-50 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="w-full md:w-[88%] h-full mx-auto px-4 md:px-0">
        <div className="flex items-center justify-between p-3">
          {/* Logo */}
          <div className="flex items-center justify-center">
            {/* <img src={logo || "/placeholder.svg"} className="w-12 h-12 md:w-16 md:h-16 object-cover" /> */}
            <Link to="/">
              <h1 className="custom-logo text-2xl md:text-3xl">Beauty</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex text-white">
            <NavItem className={navItemStyle} to={routes.home}>
              {({ isActive }) => (
                <motion.div
                  variants={navVariants}
                  animate={isActive ? "active" : "inactive"}
                  whileHover="hover"
                >
                  Home
                </motion.div>
              )}
            </NavItem>
            <NavItem className={navItemStyle} to={routes.products}>
              {({ isActive }) => (
                <motion.div
                  variants={navVariants}
                  animate={isActive ? "active" : "inactive"}
                  whileHover="hover"
                >
                  Products
                </motion.div>
              )}
            </NavItem>
            <NavItem className={navItemStyle} to={routes.about}>
              {({ isActive }) => (
                <motion.div
                  variants={navVariants}
                  animate={isActive ? "active" : "inactive"}
                  whileHover="hover"
                >
                  About
                </motion.div>
              )}
            </NavItem>
            <NavItem className={navItemStyle} to={routes.blog}>
              {({ isActive }) => (
                <motion.div
                  variants={navVariants}
                  animate={isActive ? "active" : "inactive"}
                  whileHover="hover"
                >
                  Blog
                </motion.div>
              )}
            </NavItem>
            <NavItem className={navItemStyle} to={routes.content}>
              {({ isActive }) => (
                <motion.div
                  variants={navVariants}
                  animate={isActive ? "active" : "inactive"}
                  whileHover="hover"
                >
                  Contact
                </motion.div>
              )}
            </NavItem>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white text-gray-800 py-2 px-4 shadow-lg rounded-b-lg absolute left-0 right-0 z-50 transition-all duration-300 ease-in-out">
            <NavItem
              className={mobileNavItemStyle}
              to={routes.home}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavItem>
            <NavItem
              className={mobileNavItemStyle}
              to={routes.products}
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </NavItem>
            <NavItem
              className={mobileNavItemStyle}
              to={routes.about}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavItem>
            <NavItem
              className={mobileNavItemStyle}
              to={routes.blog}
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </NavItem>
            <NavItem
              className={mobileNavItemStyle}
              to={routes.content}
              onClick={() => setIsMenuOpen(false)}
            >
              Content
            </NavItem>
          </div>
        )}
      </div>
    </div>
  );
}
