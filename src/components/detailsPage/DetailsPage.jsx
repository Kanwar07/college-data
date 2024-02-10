import React, { useContext } from "react";
import { AllData } from "../context/Context";
import detailspagestyle from "./DetailsPage.module.css";
import DashboardButton from "../button/DashboardButton";
import { Link } from "react-router-dom";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Accordion from "@mui/material/Accordion";
import { Stack } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function DetailsPage() {
  const { selectedlist } = useContext(AllData);
  const {
    id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    brand,
    category,
    thumbnail,
    images,
  } = selectedlist;
  return (
    <>
      <progress
        className={detailspagestyle.progress}
        id="file"
        max="100"
        value="50"
      >
        50%
      </progress>
      {selectedlist.length !== 0 ? (
        <div key={id} className={detailspagestyle.list}>
          <Stack spacing={2} direction="column">
            <Stack
              spacing={2}
              direction="row"
              className={detailspagestyle.list1}
              style={{ margin: "0% 10%" }}
            >
              <div>
                <div>
                  <span style={{ fontSize: "large", fontFamily: "monospace" }}>
                    Title :{" "}
                  </span>
                  {title}
                </div>
                <div>
                  <span style={{ fontSize: "large", fontFamily: "monospace" }}>
                    Description :{" "}
                  </span>
                  {description}
                </div>
                <div>
                  <span style={{ fontSize: "large", fontFamily: "monospace" }}>
                    Price :{" "}
                  </span>
                  {price}
                </div>
                <div>
                  <span style={{ fontSize: "large", fontFamily: "monospace" }}>
                    Discount:{" "}
                  </span>
                  {discountPercentage}
                </div>
                <div>
                  <span style={{ fontSize: "large", fontFamily: "monospace" }}>
                    Rating :{" "}
                  </span>
                  {rating}
                </div>
                <div>
                  <span style={{ fontSize: "large", fontFamily: "monospace" }}>
                    Brand :{" "}
                  </span>
                  {brand}
                </div>
                <div>
                  <span style={{ fontSize: "large", fontFamily: "monospace" }}>
                    Category :{" "}
                  </span>
                  {category}
                </div>
              </div>
              <img src={thumbnail} alt={thumbnail} />
            </Stack>
            <Accordion className={detailspagestyle.accordion}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                Images for Product
              </AccordionSummary>
              <AccordionDetails>
                {images.map((image) => {
                  return (
                    <img
                      key={image}
                      src={image}
                      alt={image}
                      style={{ padding: "1rem" }}
                    />
                  );
                })}
              </AccordionDetails>
            </Accordion>
          </Stack>
        </div>
      ) : (
        <h1
          style={{ display: "flex", justifyContent: "center", margin: "10%" }}
        >
          Go Back to Products Page to select a product of your choice
        </h1>
      )}
      {selectedlist.length !== 0 ? (
        <div>
          <Link to="/dashboard" className={detailspagestyle.dashboardbutton}>
            <DashboardButton />
          </Link>
        </div>
      ) : null}
    </>
  );
}

export default DetailsPage;
