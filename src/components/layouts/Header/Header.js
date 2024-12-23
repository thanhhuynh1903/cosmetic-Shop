import NavItem from "../../NavItem/NavItem";
import React from "react";
import routes from "../../../route/routes";
import { Link } from "react-router-dom";
// import logo from "../../../assets/imgs/logo.png";
import "./Header.css";

export default function Header() {
  return (
    <div className="color-header w-full">
      <div className="w-[88%] h-full m-auto p-auto">
        <div className="flex flex-wrap items-center justify-between  p-3">
          <div className="flex items-center justify-center ">
            {/* <img src={logo} className="w-16 h-16 object-cover" /> */}
            <Link to='/'><h1 className="custom-logo">Beauty</h1></Link> 
          </div>
          <div className="flex text-white">
            <NavItem
              className={({ isActive }) =>
                isActive
                  ? "mx-[20px] hover:border-b-[2.5px]  hover:border-[f8fafc] leading-[1.5rem] border-b-[2px] border-[f8fafc]"
                  : "mx-[20px] hover:border-b-[2.5px]  hover:border-[f8fafc] leading-[1.5rem]"
              }
              to={routes.home}
            >
              Home
            </NavItem>
            <NavItem className={({ isActive }) =>
                isActive
                  ? "mx-[20px] hover:border-b-[2.5px]  hover:border-[f8fafc] leading-[1.5rem] border-b-[2px] border-[f8fafc]"
                  : "mx-[20px] hover:border-b-[2.5px]  hover:border-[f8fafc] leading-[1.5rem]"
              } to={routes.products}>
              Products
            </NavItem>
            <NavItem className={({ isActive }) =>
                isActive
                  ? "mx-[20px] hover:border-b-[2.5px]  hover:border-[f8fafc] leading-[1.5rem] border-b-[2px] border-[f8fafc]"
                  : "mx-[20px] hover:border-b-[2.5px]  hover:border-[f8fafc] leading-[1.5rem]"
              } to={routes.about}>
              About
            </NavItem>
            <NavItem className={({ isActive }) =>
                isActive
                  ? "mx-[20px] hover:border-b-[2.5px]  hover:border-[f8fafc] leading-[1.5rem] border-b-[2px] border-[f8fafc]"
                  : "mx-[20px] hover:border-b-[2.5px]  hover:border-[f8fafc] leading-[1.5rem]"
              } to={routes.blog}>
              Blog
            </NavItem>
            <NavItem className={({ isActive }) =>
                isActive
                  ? "mx-[20px] hover:border-b-[2.5px]  hover:border-[f8fafc] leading-[1.5rem] border-b-[2px] border-[f8fafc]"
                  : "mx-[20px] hover:border-b-[2.5px]  hover:border-[f8fafc] leading-[1.5rem]"
              } to={routes.content}>
              Content
            </NavItem>
          </div>
        </div>
      </div>
    </div>
  );
}
