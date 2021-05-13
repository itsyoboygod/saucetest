import React, { Component } from "react";
import Infodelete from "../Infos/Infodelete/index.";
import Inforeport from "../Infos/Inforeport/index.";
import "./style.css";

const Listusers = () => {

  //  state = {
  //   users: [],
  //   page: 1,
  // };

  // componentDidMount = () => {
  //   this.loadUsers();
  // }

  // loadUsers = async (page = 1) => {
  //   const response = (`/users?page=${page}`);

  //   this.setState({users, page });
  // };

  // prevPage = () => {
  //   const { page, users } = this.state;

  //   if (page === 1) return;

  //   const pageNumber = page - 1;

  //   this.loadUsers(pageNumber);
  // };
  // nextPage = () => {
  //   const { page, users } = this.state;

  //   if (page === users.pages) return;

  //   const pageNumber = page + 1;

  //   this.loadUsers(pageNumber);
  // };

  return (
    <>
    <div className="input-div" id="id-input-div-users-search">
        <form>
          <input
            className="navtop-input"
            id="navtop-input-id"
            placeholder=" search user ..."
            type="search"
          />
          <button type="submit">Go</button>
        </form>
      </div>
    <div className="users-list">
      <div className="title-list">
        <h1>Users list:</h1>
      </div>

      <ul>
      <li>
          <a href="/Profile">
            <h1>xXUserXx</h1>
          </a>

          <div className="div-span-report-delete">
            <Inforeport />
            <Infodelete />
          </div>
        </li>
        <li>
          <h1>xXUser2Xx</h1>
          <div className="div-span-report-delete">
            <Inforeport />
            <Infodelete />
          </div>
        </li>
        <li>
          <h1>xXUser3Xx</h1>
          <div className="div-span-report-delete">
            <Inforeport />
            <Infodelete />
          </div>
        </li>
        <li>
          <h1>xXUser4Xx</h1>
          <div className="div-span-report-delete">
            <Inforeport />
            <Infodelete />
          </div>
        </li>
        <li>
          <h1>xXUser5Xx</h1>
          <div className="div-span-report-delete">
            <Inforeport />
            <Infodelete />
          </div>
        </li>
        <li>
          <h1>xXUser4Xx</h1>
          <div className="div-span-report-delete">
            <Inforeport />
            <Infodelete />
          </div>
        </li>
        <li>
          <h1>xXUser5Xx</h1>
          <div className="div-span-report-delete">
            <Inforeport />
            <Infodelete />
          </div>
        </li>
        <li>
          <h1>xXUser4Xx</h1>
          <div className="div-span-report-delete">
            <Inforeport />
            <Infodelete />
          </div>
        </li>
        <li>
          <h1>xXUser5Xx</h1>
          <div className="div-span-report-delete">
            <Inforeport />
            <Infodelete />
          </div>
        </li>
      </ul>
    </div>
    </>

  );
};

export default  Listusers;
