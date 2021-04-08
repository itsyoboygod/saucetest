import { render } from "@testing-library/react";
import { React, Component, useState, useEffect } from "react";
import Maindrop from "../../Dropdowns/maindrop";
import "./style.css";
import api from "../../../api";
import { Link } from "react-router-dom";

export default class Loadbox extends Component {
  state = {
    filmes: [],
  };

  async componentDidMount() {
    const response = await api.get("");
    this.setState({ filmes: response.data });
    console.log(response.data);
  }

  render() {
    const { filmes } = this.state;

    return (
      <>
        {filmes.map((filme) => (
          <div className="loadbox-div" key={filme.show.id} id="id-loadbox-div">
            <a href={filme.show.url}>
              <div className="loadbox" id="id-loadbox">
                <Maindrop />
              </div>
            </a>
            <div className="loadbox-bottom">
              <Link to={`/Profile`}>
                <div className="loadbox-bottom-circle"></div>
              </Link>
              <a href={filme.show.url}>
                <div className="loadbox-bottom-txt">
                  <p>
                    <strong>{filme.show.name}</strong>
                  </p>
                </div>
              </a>
            </div>
          </div>
        ))}
      </>
    );
  }
}
