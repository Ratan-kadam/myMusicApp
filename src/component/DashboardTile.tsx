import React from "react";
import { HomePageVideos } from "../Types";
import { Link } from "react-router-dom";

export default function DasboardTile({ data }: { data: HomePageVideos }) {
  return (
    <div className="dashboard__tile">
      <Link to={`/watch/${data.videoId}`}>
        <img src={data.videoThumbnail} alt="thumbnail" />
      </Link>
      <div className="dashboard__tile__details">
        <img
          src={data.channelInfo.image}
          alt="channel"
          className="dashboard__tile__details--circle"
        />
        <div>{data.videoTitle}</div>
      </div>
      <div className="dashboard__tile__sub">
        <div>{data.channelInfo.name}</div>
        <div> {data.videoViews} views</div>
        <span>{data.videoAge}</span>
      </div>
    </div>
  );
}
