import React from "react";
import styles from "./Navbar.module.css";
import person from "../../assets/people/person1.jpeg";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";

export default function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarLeft}>
        <span className={styles.logo}>Connect</span>
      </div>
      <div className={styles.navbarCentre}>
        <div className={styles.searchBar}>
          <Search className={styles.searchIcon} />
          <input placeholder="Search away..." className={styles.searchInput} />
        </div>
      </div>
      <div className={styles.navbarRight}>
        <div className={styles.navbarLinks}>
          <span className={styles.navbarLink}>Home</span>
          <span className={styles.navbarLink}>Feed</span>
        </div>
        <div className={styles.navbarIcons}>
          <div className={styles.navbarIconItem}>
            <Person />
            <span className={styles.navbarIconBadge}>1</span>
          </div>
          <div className={styles.navbarIconItem}>
            <Chat />
            <span className={styles.navbarIconBadge}>2</span>
          </div>
          <div className={styles.navbarIconItem}>
            <Notifications />
            <span className={styles.navbarIconBadge}>1</span>
          </div>
        </div>
        <img src={person} alt="User Profile Picture" className={styles.navbarProfileImage} />
      </div>
    </div>
  );
}
