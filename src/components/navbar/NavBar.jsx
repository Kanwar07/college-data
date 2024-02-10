import React from "react";
import { Link } from "react-router-dom";
import navbarstyle from "./NavBar.module.css";
import ProductButton from "../button/ProductButton.jsx";
import SchoolIcon from "@mui/icons-material/School";

function NavBar() {
  return (
    <nav className={navbarstyle.navbar}>
      <div style={{ display: "flex", alignItems: "flex-end" }}>
        {<SchoolIcon fontSize="large" style={{ marginRight: "5px" }} />}The
        DataBase
      </div>
      <Link to="/">{<ProductButton />}</Link>
    </nav>
  );
}

export default NavBar;
