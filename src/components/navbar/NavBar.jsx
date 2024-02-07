import React from "react";
import { Link } from "react-router-dom";
import navbarstyle from "./NavBar.module.css";
import CourseButton from "../button/CourseButton";
import SchoolIcon from "@mui/icons-material/School";

function NavBar() {
  return (
    <nav className={navbarstyle.navbar}>
      <div>{<SchoolIcon fontSize="large" />} The DataBase</div>
      <Link to="/">{<CourseButton />}</Link>
    </nav>
  );
}

export default NavBar;
