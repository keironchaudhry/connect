import React from "react";
import styles from "./Navbar.module.css";
import person from "../../assets/people/person1.jpeg";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";

export default function Navbar() {
  return (
    <div className={styles.navbarContainer}>
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
          <div className="navbarIconItem">
            <Chat />
            <span className="navbarIconBadge">2</span>
          </div>
          <div className="navbarIconItem">
            <Notifications />
            <span className="navbarIconBadge">1</span>
          </div>
        </div>
        <img
          src={person}
          alt=""
          className="navbarProfileImage"
        />
      </div>
    </div>
  );
}
