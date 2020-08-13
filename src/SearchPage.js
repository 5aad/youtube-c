import React from "react";
import "./SearchApp.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>Filter</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/a/AATXAJzGlF42GFscgQwuweaHH9JamulXIal0HddqWCAo=s88-c-k-c0x00ffffff-no-rj"
        channel="Taimoor Salahuddin aka Mooroo "
        verified
        subs="2.3M"
        noOfVideos={383}
        description="
                born in lahore to a muslim family, 
                was at a young age guaged to have interests suitable for a promising career in mechanics,
                fond of breaking apart toys and constructing music boxes,
                Mooroo found that to him there was something more to the music boxes than their actual mechanical functioning,  "
      />
      <hr />
      <VideoRow
        title="(Iktiyaar) اختیار | Mooroo ke khyalaat"
        views="2.3M Views"
        timestamp="3 days ago"
        subs="2.3M"
        description="born in lahore to a muslim family, "
        channel="Taimoor Salahuddin aka Mooroo"
        image="https://i.pinimg.com/originals/dd/a1/2c/dda12c587120e5e4378a01f31e812672.jpg"
      />

      <VideoRow
        title="(Iktiyaar) اختیار | Mooroo ke khyalaat"
        views="2.3M Views"
        timestamp="3 days ago"
        subs="2.3M"
        description="born in lahore to a muslim family, "
        channel="Taimoor Salahuddin aka Mooroo"
        image="https://i.pinimg.com/originals/dd/a1/2c/dda12c587120e5e4378a01f31e812672.jpg"
      />

      <VideoRow
        title="(Iktiyaar) اختیار | Mooroo ke khyalaat"
        views="2.3M Views"
        timestamp="3 days ago"
        subs="2.3M"
        description="born in lahore to a muslim family, "
        channel="Taimoor Salahuddin aka Mooroo"
        image="https://i.pinimg.com/originals/dd/a1/2c/dda12c587120e5e4378a01f31e812672.jpg"
      />

      <VideoRow
        title="(Iktiyaar) اختیار | Mooroo ke khyalaat"
        views="2.3M Views"
        timestamp="3 days ago"
        subs="2.3M"
        description="born in lahore to a muslim family, "
        channel="Taimoor Salahuddin aka Mooroo"
        image="https://i.pinimg.com/originals/dd/a1/2c/dda12c587120e5e4378a01f31e812672.jpg"
      />
    </div>
  );
};

export default SearchPage;
