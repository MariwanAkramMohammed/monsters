import React from "react";

import { Card } from "../card/card";

import "./card-list.style.css";

export const CardList = (props) => (
  <div className="card-list">
    {props.mon.map((monster) => (
      <Card key={monster.id} monst={monster} />
    ))}
  </div>
);

// props will be an obj to cardlist value which attribute name will be a key for obj and this.state.monsters will be valule
//  props={
//    mon:this.state.monsters
//  }
