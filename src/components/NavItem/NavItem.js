"use client"
import { NavLink } from "react-router-dom"

const NavItem = ({ children, className, to, onClick }) => {
  return (
    <NavLink to={to} className={className} onClick={onClick}>
      {children}
    </NavLink>
  )
}

export default NavItem
