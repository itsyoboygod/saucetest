import React, { Component } from "react";
// import api from "../../services/api";
import api from "../../api";

import "./style.css";
import { Link } from "react-router-dom";

export default class Mainpage extends Component {
  state = {
    shows: [],
    filmsInfo: {},
  };

  componentDidMount() {
    this.loadFilms();
  }

  loadFilms = async () => {
    const response = await api.get(`/shows`);

    const { docs, ...filmsInfo } = response.data;

    this.setState({ products: docs, filmsInfo });
  };

  // state = {
  //   products: [],
  //   productInfo: {},
  //   page: 1,
  // };

  // componentDidMount() {
  //   this.loadProducts();
  // }

  // loadProducts = async (page = 1) => {
  //   const response = await api.get(`/products?page=${page}`);

  //   const { docs, ...productInfo } = response.data;

  //   this.setState({ products: docs, productInfo, page });
  // };

  // prevPage = () => {
  //   const { page, productInfo } = this.state;

  //   if (page === 1) return;

  //   const pageNumber = page - 1;

  //   this.loadProducts(pageNumber);
  // };
  // nextPage = () => {
  //   const { page, productInfo } = this.state;

  //   if (page === productInfo.pages) return;

  //   const pageNumber = page + 1;

  //   this.loadProducts(pageNumber);
  // };

  render() {
    // const { products, page, productInfo } = this.state;
    const { shows, filmsInfo } = this.state;

    return (
      <div className="main-content">
        <div className="films-list">
          {this.state.shows.map((shows) => (
            <article key={shows._id}>
              <strong>{shows.title}</strong>
              <p>{shows.description}</p>
              <Link to={`/films/${shows._id}`}>Acessar</Link>
            </article>
          ))}
        </div>
      </div>
      // <div className="product-list">
      //   {this.state.products.map((product) => (
      //     <article key={product._id}>
      //       <strong>{product.title}</strong>
      //       <p>{product.description}</p>
      //       <Link to={`/products/${product._id}`}>Acessar</Link>
      //     </article>
      //   ))}
      //   <div className="actions">
      //     <button disabled={page === 1} onClick={this.prevPage}>
      //       Anterior
      //     </button>
      //     <button disabled={page === productInfo.pages} onClick={this.nextPage}>
      //       Proxima
      //     </button>
      //   </div>
      // </div>
    );
  }
}
