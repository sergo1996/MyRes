import React from "react";

export default function SidebarNav({ isAboutMe, toggleNav }) {
  return (
    <ul className="sidebar__nav">
      <li
        className={`sidebar__nav-item ${
          isAboutMe ? "sidebar__nav-item--focus" : ""
        }`}
        onClick={() => {
          toggleNav(true);
        }}
      >
        About me
      </li>
      <li
        className={`sidebar__nav-item ${
          isAboutMe ? "" : "sidebar__nav-item--focus"
        }`}
        onClick={() => {
          toggleNav(false);
        }}
      >
        My skills
      </li>
    </ul>
  );
}
