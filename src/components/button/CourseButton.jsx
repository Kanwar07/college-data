import React from "react";
import { Button } from "@mui/material";
import buttonstyle from "./Button.module.css";

function CourseButton() {
  return <Button className={buttonstyle.button}>Courses</Button>;
}

export default CourseButton;
