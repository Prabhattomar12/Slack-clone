import React, { useState } from "react";
import { useDataLayerValue } from "../../StateProvider";
import db from "../../firebase";
import firebase from "firebase";
import "./chatInput.css";

function ChatInput({ channelId, channelName }) {
  const [{ user }] = useDataLayerValue();

  const [input, setInput] = useState("");

  const sendMessage = (event) => {
    event.preventDefault();
    if (channelId) {
      db.collection("rooms").doc(channelId).collection("messages").add({
        name: user?.displayName,
        Image: user?.photoURL,
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
    setInput("");
  };

  return (
    <div className="chat_input">
      <form>
        <input
          type="text"
          placeholder={channelName}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={sendMessage}> Send</button>
      </form>
    </div>
  );
}

export default ChatInput;
