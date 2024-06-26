import React, { useContext } from "react";
import productpagestyle from "./ProductPage.module.css";
import { AllData } from "../context/Context";
import DetailsButton from "../button/DetailsButton.jsx";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

function ProductPage() {
  const { itemdata, selectedlist, setselectedlist, searchlist, setsearchlist } =
    useContext(AllData);

  const handleClick = (item) => {
    setselectedlist(item);
  };

  const getsearchdata = (e) => {
    setsearchlist(e.target.value);
  };

  return (
    <>
      <div>
        {selectedlist.length !== 0 ? (
          <progress
            className={productpagestyle.progress}
            id="file"
            max="100"
            value="25"
          >
            25%
          </progress>
        ) : (
          <progress
            className={productpagestyle.progress}
            id="file"
            max="100"
            value="0"
          >
            0%
          </progress>
        )}
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "0rem 2rem 1rem 2rem",
            fontFamily: "Courier New, monospace",
          }}
        >
          Select your Desired Product
        </h1>
        <div className={productpagestyle.input}>
          <input
            type="text"
            value={searchlist}
            onChange={getsearchdata}
            placeholder="Enter your desired course"
            style={{
              padding: "1.5rem 1rem",
              borderRadius: "25px",
              backgroundColor: "transparent",
              border: "none",
              fontFamily: "Courier New, monospace",
              width: "20%",
            }}
          />
        </div>
        <div className={productpagestyle.main}>
          <ul className={productpagestyle.ulist}>
            {searchlist
              ? itemdata
                  .filter((list) =>
                    list.title.toLowerCase().includes(searchlist)
                  )
                  .map((item) => (
                    <li
                      key={item.id}
                      className={productpagestyle.list}
                      onClick={() => handleClick(item)}
                    >
                      <div>{item.title}</div>
                      <div>{item.category}</div>
                      <div>{item.rating}</div>
                    </li>
                  ))
              : itemdata.map((item) => (
                  <li
                    key={item.id}
                    className={productpagestyle.list}
                    onClick={() => handleClick(item)}
                  >
                    <div>{item.title}</div>
                    <div>{item.category}</div>
                    <div>{item.rating}</div>
                  </li>
                ))}
          </ul>
        </div>
        <div>
          {selectedlist.length !== 0 ? (
            <Stack
              spacing={2}
              direction="row"
              className={productpagestyle.stack}
            >
              <div className={productpagestyle.name}>{selectedlist.title}</div>
              <Link to="/details" className={productpagestyle.detailbutton}>
                {<DetailsButton />}
              </Link>
            </Stack>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default ProductPage;
