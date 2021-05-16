import React from "react";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

function ChatHeader({ roomDetails }) {
  return (
    <div className="chat_header">
      <h4>
        # {roomDetails?.name}
        <StarBorderIcon />
      </h4>

      <h4>
        <AccessTimeIcon />
        details
      </h4>
    </div>
  );
}

export default ChatHeader;
