import React, { Component } from "react";
import amsterdam from "../../assets/amsterdam.png";
import GetSurfer from "./GetSurfer";

export default class About extends Component {
  render() {
    return (
      <div className="w-full grid grid-cols-3">
        <div className="col-span-2 ">
          <div className="image w-4/5">
            <img src={amsterdam} alt="city" className="" />
          </div>
          <div className="description">
            <h2 className="text-5xl font-semibold">Culture</h2>
            <p className="my-2 text-lg">
            Culture is a complex concept that includes beliefs, customs, values, behaviors, and artifacts that define a society. It is an essential aspect of human identity, shaping how we view ourselves and the world around us. Through exploring different cultures, we can broaden our horizons and develop a more inclusive and empathetic view of the world.
            </p>
          </div>
        </div>
        <div className="col-span-1">
          <GetSurfer />
        </div>
      </div>
    );
  }
}
