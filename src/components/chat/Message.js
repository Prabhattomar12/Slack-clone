import React from "react";
import "./message.css";

function Message({ user, message, timestamp, imageUrl }) {
  console.log("timestamp ", timestamp);
  return (
    <div className="message">
      <img src={imageUrl} alt="user-image" />
      <div className="message_info">
        <div className="message_info_heading">
          <p>
            <strong>{user}</strong>
            <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
          </p>
        </div>
        <p className="message_text">{message}</p>
      </div>
    </div>
  );
}

export default Message;
