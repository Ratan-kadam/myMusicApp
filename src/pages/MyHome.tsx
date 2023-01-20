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
    console.log("rendering now:")
    console.log(videos);

    useEffect(() => {
        dispatch(getHomePageVideos(false))
        return () => { dispatch(clearVideos())}
    }, [dispatch]);

    return (
        <React.Fragment>
           <InfiniteScroll
            dataLength={videos.length}
            hasMore={videos.length < 100}
            height={'100vh'}
            next={() => dispatch(getHomePageVideos(false))}
            loader={<div className="loader">loading...</div>}
            >
             <div className="dashboard">
             {videos.map((item: HomePageVideos) => {
                return <DasboardTile data={item} key={item.videoId} />;
              })}
              </div>
            </InfiniteScroll>
        </React.Fragment>
    )
}