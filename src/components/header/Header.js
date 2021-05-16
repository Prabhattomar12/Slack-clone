import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import Avatar from "@material-ui/core/Avatar";
import HistoryIcon from "@material-ui/icons/History";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useDataLayerValue } from "../../StateProvider";
import "./header.css";

function Header() {
  const [{ user }] = useDataLayerValue();
  return (
    <div className="header">
      <div className="header_left">
        <Avatar src={user?.photoURL} alt={user?.displayName} />
        <HistoryIcon />
      </div>
      <div className="header_search">
        <SearchIcon />
        <input placeholder="Search Tomar's team" type="text" />
      </div>
      <div className="header_right">
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;
