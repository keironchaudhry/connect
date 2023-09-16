import React from "react";
import "./Navbar.css";
import { Search, Person } from "@mui/icons-material";

export default function Navbar() {
  return (
    <div className="navbarContainer">
      <div className="navbarLeft">
        <span className="logo">Connect</span>
      </div>
      <div className="navbarCentre">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input placeholder="Search away..." className="searchInput" />
        </div>
      </div>
      <div className="navbarRight">
        <div className="navbarLinks">
          <span className="navbarLink">Home</span>
          <span className="navbarLink">Feed</span>
        </div>
        <div className=".navbarIcons">
          <div className="navbarIconItem">
            <Person />
            <span className="navbarIconBadge">1</span>
          </div>
        </div>
      </div>
    </div>
  );
}
