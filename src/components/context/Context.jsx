import React, { createContext, useState, useEffect } from "react";
import data from "../data/data.json";

export const AllData = createContext();

function Context({ children }) {
  const [itemdata, setitemdata] = useState([]);
  const [selectedlist, setselectedlist] = useState([]);
  const [searchlist, setsearchlist] = useState("");
  const [itemlist, setitemlist] = useState([]);

  useEffect(() => {
    const getdata = () => {
      setitemdata(data.products);
    };
    getdata();
  });
  return (
    <AllData.Provider
      value={{
        itemdata,
        setitemdata,
        selectedlist,
        setselectedlist,
        searchlist,
        setsearchlist,
        itemlist,
        setitemlist,
      }}
    >
      {children}
    </AllData.Provider>
  );
}

export default Context;
