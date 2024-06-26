import React from "react";
import { Button } from "@mui/material";
import buttonstyle from "./Button.module.css";

function BuyButton() {
  return <Button className={buttonstyle.buybutton}>Click to Buy</Button>;
}

export default BuyButton;
