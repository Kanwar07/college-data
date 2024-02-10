import React from "react";
import { Button } from "@mui/material";
import buttonstyle from "./Button.module.css";

function DetailsButton() {
  return <Button className={buttonstyle.detailbutton}>Product Details</Button>;
}

export default DetailsButton;
