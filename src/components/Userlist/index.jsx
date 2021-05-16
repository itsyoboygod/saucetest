import React, { Component, useState } from "react";
import Filter from "../Filter";
import Infodelete from "../Infos/Infodelete/index.";
import Inforeport from "../Infos/Inforeport/index.";
import "./style.css";
import JASONDATA from "../../mydata.json";

const Listusers = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const myFunction = () => {
    // var input , filter, ul, li, a, i, txtValue;
    // input = document.getElementById('#navtop-input-id');
    // filter = input.value.toUpperCase();
    // ul = document.getElementById("myUL");
    // li = ul.getElementsByTagName("li");
    // for (i = 0; i < li.length; i++) {
    //     a = li[i].getElementsByTagName("a")[0];
    //     txtValue = a.textContent || a.innerText;
    //     if (txtValue.toUpperCase().indexOf(filter) > -1) {
    //         li[i].style.display = "";
    //     } else {
    //         li[i].style.display = "none !importatnt";
    //     }
    // }
  }
  
 

  return (
    <>
      <div className="input-div" id="id-input-div-users-search">
        <form>
          <input
            className="navtop-input"
            id="navtop-input-id"
            placeholder=" search user ..."
            type="search"
            onChange={(event) => setSearchTerm(event.target.value)}
            onKeyUp={myFunction}
          />
          <button type="submit">Go</button>
        </form>
      </div>
      <div className="users-list">
        <div className="title-list">
          <h1>Users list:</h1>
        </div>

        <ul id="myUL">
        {JASONDATA.filter((val) => {
          if (searchTerm == "") {
            return val;
          } else if (
            val.first_name
              .toLowerCase()
              .includes(
                searchTerm
                  .toLowerCase()
                  .startsWith(setSearchTerm(val.first_name))
              )
          ) {
            return val;
          }
        }).map((val, key) => {
          return (
          <li>
            <a href="/Profile">
            {val.first_name}
            </a>

            <div className="div-span-report-delete">
              <Inforeport />
              <Infodelete />
            </div>
          </li>
        
        )
      })}

        </ul>
        <div>
          <h2>
            scroll down to load more info <span>&#129147;</span>
          </h2>
        </div>
      </div>
    </>
  );

 
};

export default Listusers;
