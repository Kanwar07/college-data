import React from "react";
import { Button } from "@mui/material";
import buttonstyle from "./Button.module.css";

function DashboardButton() {
  return (
    <Button className={buttonstyle.detailbutton}>
      Confirm your Product Details
    </Button>
  );
}

export default DashboardButton;
