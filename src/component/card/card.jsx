import React from "react";
import "./card.style.css";

export const Card = (props) => (
  <div className="card-container">
    <img
      alt="monster"
      src={`https://robohash.org/${props.monst.id}?set=set2`}
    />
    <h2>{props.monst.name}</h2>
    <p>{props.monst.email}</p>
  </div>
);
