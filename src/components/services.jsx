import React from "react";
import "../list.css";

const Services = ({ title, price, description, button }) => {
  return (
    <div class="card d-flex border-0">
      <div class="card-body">
        <h3 class="card-title">{title}</h3>
        <h5 class="card-text">{price}</h5>
        <p class="card-text">{description}</p>
        <button class="btn btn-outline-primary col-12">{button}</button>
      </div>
    </div>
  );
};
export default Services;
