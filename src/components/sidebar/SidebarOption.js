import React from "react";
import "./sidebarOption.css";
import { useHistory } from "react-router-dom";
import db from "../../firebase";

export default function sidebarOption({ Icon, title, addChannel, id }) {
  const history = useHistory();

  const selectChannel = () => {
    if (id) {
      history.push("/room/" + id);
    } else {
      history.push(title);
    }
  };

  const addChannelToList = () => {
    const newChannelName = prompt("Enter channel name");
    if (newChannelName) {
      db.collection("rooms").add({
        name: newChannelName,
      });
    }
  };

  return (
    <div
      className="sidebar_option"
      onClick={addChannel ? addChannelToList : selectChannel}
    >
      {Icon && <Icon />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="channel_heading">
          <span className="hash"># </span>
          {title}
        </h3>
      )}
    </div>
  );
}
