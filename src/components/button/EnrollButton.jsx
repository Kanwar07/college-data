import React from "react";
import { Button } from "@mui/material";
import buttonstyle from "./Button.module.css";

function EnrollButton() {
  return <Button className={buttonstyle.enrollbutton}>Click to Buy</Button>;
}

export default EnrollButton;
