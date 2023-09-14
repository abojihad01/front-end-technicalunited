import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
export const ContextGlobal = React.createContext();
function getInitialLanState() {
  const lang = localStorage.getItem("lang");
  return lang ? JSON.parse(lang) : false;
}
const ContextData = (props) => {
  const [Lan, setLan] = React.useState(getInitialLanState);
  const [mobileNav, setMobileNav] = useState(false);
  // const [Lan, setLan] = React.useState(getInitialLanState);
  const [openSearch, setSearch] = React.useState(false);
  const [Link, setLink] = React.useState([]);
  const [selectCat, setSelectCat] = React.useState("");
  const [searchText, setSearchText] = React.useState("");

  // const handelSearch = (e) => {
  //   setSearchText(e);
  //   console.log(e, "this data");
  // };

  useEffect(() => {
    localStorage.setItem("lang", JSON.stringify(Lan));
  }, [Lan]);


  return (
    <ContextGlobal.Provider
      value={{
        Lan,
        setLan,
        openSearch,
        setSearch,
        mobileNav,
        setMobileNav,
        // Link,
        selectCat,
        setSelectCat,
        searchText,
        setSearchText,
      }}
    >
      {props.children}
    </ContextGlobal.Provider>
  );
};

export default ContextData;
