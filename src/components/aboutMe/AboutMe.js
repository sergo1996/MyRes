import React from "react";

import Socials from "./Socials";
import Info from "./Info";
import "./Info.scss";

export default function AboutMe() {
  return (
    <>
      <div className="sidebar__image">
        <img alt="photo_of_me" src="https://i.ibb.co/b1DDHjz/ST.jpg" />
      </div>
      <Info />
      <div className="sidebar__contact">
        <h3 className="sidebar__contact-title">Contact me</h3>
        <p className="sidebar__contact-email">
          Gmail: stimchuk123@gmail.com <br />
          phone: +380934411892
        </p>
        <Socials />
      </div>
    </>
  );
}
