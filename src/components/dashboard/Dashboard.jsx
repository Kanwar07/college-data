import React, { useContext } from "react";
//import { useSelector } from "react-redux";
import { AllData } from "../context/Context";
import dashboardstyle from "./Dashboard.module.css";
import { Link } from "react-router-dom";
import EnrollButton from "../button/EnrollButton";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { selectedlist, setselectedlist, itemlist, setitemlist } =
    useContext(AllData);

  const navigate = useNavigate();

  const handleenroll = () => {
    const isAlreadyEnrolled = itemlist.some(
      (item) => item.id === selectedlist.id
    );
    if (!isAlreadyEnrolled) {
      setitemlist((prevItemlist) => {
        if (prevItemlist.length > 0) {
          return [...prevItemlist, selectedlist];
        } else if (prevItemlist.find((list) => list.id === selectedlist.id)) {
          console.log(selectedlist.id);
        } else {
          return [selectedlist];
        }
      });
    } else {
      alert("Item is already enrolled select a different item");
      navigate("/");
    }
    setselectedlist("");
  };

  const {
    id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
  } = selectedlist;
  return (
    <>
      {selectedlist.length === 0 ? (
        <progress
          className={dashboardstyle.progress}
          id="file"
          max="100"
          value="100"
        >
          100%
        </progress>
      ) : (
        <progress
          className={dashboardstyle.progress}
          id="file"
          max="100"
          value="75"
        >
          75%
        </progress>
      )}
      {selectedlist.length === 0 ? (
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          Go Back to Products Page to select a different product to buy
        </h1>
      ) : (
        <Stack>
          <div key={id} className={dashboardstyle.list}>
            <Stack
              spacing={2}
              direction="row"
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                margin: "5% 10% 5% 10%",
              }}
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
                    Stock :{" "}
                  </span>
                  {stock}
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
            <div onClick={handleenroll}>
              <Link to="/dashboard" className={dashboardstyle.enrollbutton}>
                <EnrollButton />
              </Link>
            </div>
          </div>
        </Stack>
      )}
      {itemlist.length !== 0 ? (
        <div className={dashboardstyle.order}>
          <div className={dashboardstyle.text}>Items you have ordered</div>
          {itemlist.map((course) => {
            return (
              <div key={course.id} className={dashboardstyle.orderitem}>
                <div style={{ fontFamily: "Courier New", fontWeight: "bold" }}>
                  {course.title}
                </div>
                <img
                  src={course.thumbnail}
                  alt={course.thumbnail}
                  style={{ height: "100px", width: "150px" }}
                />
              </div>
            );
          })}
        </div>
      ) : null}
    </>
  );
}

export default Dashboard;
