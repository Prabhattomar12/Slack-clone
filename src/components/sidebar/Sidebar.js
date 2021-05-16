import React, { useState, useEffect } from "react";
import EditIcon from "@material-ui/icons/Edit";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import SidebarOption from "./SidebarOption";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CommentIcon from "@material-ui/icons/Comment";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import DraftsIcon from "@material-ui/icons/Drafts";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import WebAssetIcon from "@material-ui/icons/WebAsset";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import db from "../../firebase";
import { useDataLayerValue } from "../../StateProvider";

import "./sidebar.css";

export default function Sidebar() {
  const [{ user }] = useDataLayerValue();

  const [channels, setChannels] = useState([]);

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) => {
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      );
    });
  }, [channels]);

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="sidebar_header_details">
          <h2>{user?.displayName}</h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName?.toLowerCase()}
          </h3>
        </div>

        <EditIcon className="edit_icon" />
      </div>

      <SidebarOption Icon={MoreVertIcon} title="Browse stack" />
      <SidebarOption Icon={CommentIcon} title="Threads" />
      <SidebarOption Icon={QuestionAnswerIcon} title="Mentions & reactions" />
      <SidebarOption Icon={DraftsIcon} title="Saved item" />
      <SidebarOption Icon={WebAssetIcon} title="Channel browser" />
      <SidebarOption Icon={GroupAddIcon} title="People and user groups" />
      <SidebarOption Icon={InsertDriveFileIcon} title="File browser" />
      <SidebarOption Icon={ExpandLessIcon} title="show less" />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Channels" />

      <br />
      <SidebarOption Icon={AddIcon} title="Add channels" addChannel={true} />

      {channels.map((channel) => (
        <SidebarOption id={channel.id} title={channel.name} />
      ))}
    </div>
  );
}
