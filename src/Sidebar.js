import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import HistoryIcon from "@material-ui/icons/History"
import WatchLaterIcon from "@material-ui/icons/WatchLater"
import ExpandMoreOutLinedIcon from "@material-ui/icons/ExpandMoreOutlined"
import OneDemandVideoIcon from "@material-ui/icons/OndemandVideo"
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary"
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined"

import WhatshotIcon from "@material-ui/icons/Whatshot"
import HomeIcon from "@material-ui/icons/Home"
import SubcriptionIcon from "@material-ui/icons/Subscriptions"
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__fixed">
     
      <SidebarRow selected title="Home" Icon={HomeIcon}/>
      <SidebarRow title="Trending" Icon={WhatshotIcon}/>
      <SidebarRow title="Subcription" Icon={SubcriptionIcon}/>
      <hr/>
      <SidebarRow  title="Library" Icon={VideoLibraryIcon}/>
      <SidebarRow title="History" Icon={HistoryIcon}/>
      <SidebarRow title="Your Videos" Icon={OneDemandVideoIcon}/>
      <SidebarRow  title="Watch Later" Icon={WatchLaterIcon}/>
      <SidebarRow title="Like Video" Icon={ThumbUpAltOutlinedIcon}/>
      <SidebarRow title="Show more" Icon={ExpandMoreOutLinedIcon}/>
      <hr/>
      </div>
    </div>
  );
};

export default Sidebar;
