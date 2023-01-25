import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getHomePageVideos } from "../store/reducers/getHomePageVideos";
import { clearVideos } from "../store";
import InfiniteScroll from "react-infinite-scroll-component";
import { HomePageVideos } from "../Types";
import DasboardTile from "../component/DashboardTile";

export default function MyHome() {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);
  const mySearch = useAppSelector((state) => state.youtubeApp.searchTerm);
  
  console.log("rendering now:");
  console.log(videos);

  useEffect(() => {
    dispatch(getHomePageVideos({isNext: false, searchTerm: mySearch}));
    return () => {
      dispatch(clearVideos());
    };
  }, [dispatch, mySearch]);

  return (
    <React.Fragment>
      <InfiniteScroll
        dataLength={videos.length}
        hasMore={videos.length < 100}
        height={"100vh"}
        next={() => dispatch(getHomePageVideos({isNext: true, searchTerm: mySearch}))}
        loader={<div className="loader">loading...</div>}
      >
        <div className="dashboard">
          {videos.map((item: HomePageVideos) => {
            return <DasboardTile data={item} key={item.videoId} />;
          })}
        </div>
      </InfiniteScroll>
    </React.Fragment>
  );
}
