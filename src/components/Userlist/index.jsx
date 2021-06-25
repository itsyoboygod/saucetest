import React, { Component, useState } from "react";
import Filter from "../Filter";
import Infodelete from "../Infos/Infodelete/index.";
import Inforeport from "../Infos/Inforeport/index.";
import "./style.css";
import JASONDATA from "../../mydata.json";
import userset from "../../user.json";
import $ from "jquery";

const Listusers = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const myFunction = () => {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("#navtop-input-id");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none !importatnt";
      }
    }
  };

  var counter = 0;
  $(window).scroll(function () {
    if (
      $(window).scrollTop() == $(document).height() - $(window).height() &&
      counter < 2
    ) {
      appendData();
    }
  });
  function appendData() {
    var html = "";
    for (var i = 0; i < 10; i++) {
      html +=
        '<p class="dynamic">Dynamic Data :  This is test data.<br />Next line.</p>';
    }
    $("#myScroll").append(html);
    counter++;

    if (counter == 2)
      $("#myScroll").append(
        "<h1>BRUH</h1>"
        // '<button id="uniqueButton" style="margin-left: 50%; background-color: powderblue;">Click</button><br /><br />'
      );

    if (counter == 3)
      $("#myScroll").append(
        "<h1>BRUH</h1>"
        // '<button id="uniqueButton" style="margin-left: 50%; background-color: powderblue;">Click</button><br /><br />'
      );
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
        <div id="myScroll">
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
                <li className="li-users-list">
                  <a href="/Profile">
                    {val.first_name}
                    {/* {userset.user.PK} */}
                  </a>

                  <div className="div-span-report-delete">
                    <Inforeport />
                    <Infodelete />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Listusers;
