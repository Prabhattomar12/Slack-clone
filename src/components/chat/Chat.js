import React, { useEffect, useState } from "react";
import db from "../../firebase";
import ChatHeader from "./ChatHeader";
import "./chat.css";
import { useParams } from "react-router-dom";
import Message from "./Message";
import ChatInput from "./ChatInput";

function Chat(props) {
  const { roomId } = useParams();
  // console.log("room Id ", roomId);
  const [roomDetails, setRoomDetails] = useState();
  const [roomMessages, setRoomMessages] = useState([]);

  useEffect(() => {
    db.collection("rooms")
      .doc(roomId)
      .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));

    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setRoomMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, [roomId]);

  console.log("room details", roomDetails);
  console.log("room messages", roomMessages);

  return (
    <div className="chat">
      <ChatHeader roomDetails={roomDetails} />
      {roomMessages.map((message) => (
        <Message
          imageUrl={message.Image}
          user={message.name}
          timestamp={message.timestamp}
          message={message.message}
        />
      ))}

      <ChatInput channelId={roomId} channelName={roomDetails?.name} />
    </div>
  );
}

export default Chat;
