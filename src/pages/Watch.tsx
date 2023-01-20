import React from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getVideoDetails } from "../store/reducers/getVideoDetails";
import { getRecommendedVideos } from "../store/reducers/getRecommendedVideos";
// import { DashboardTile} from '../component/DashboardTile';
import { Link } from "react-router-dom";

export default function Watch() {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const store = useAppSelector((state) => state);
  const { youtubeApp } = store || {};
  const { currentPlaying, recommendedVideos } = youtubeApp || {};

  console.log("redux store:", store);

  useEffect(() => {
    dispatch(getVideoDetails(id));
    dispatch(getRecommendedVideos(id));
  }, [id]);

  return (
    <div className="watch_grid">
      <div className="video__section">
        <iframe
          width="900"
          height="500"
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="video_recommendation">
        <React.Fragment>
          {recommendedVideos.map((video) => {
            return (
              <Link to={`/watch/${video?.videoId}`}>
                <img
                  src={video?.videoThumbnail}
                  alt={`/watch/${video?.videoId}`}
                />
                )
              </Link>
            );
          })}
        </React.Fragment>
      </div>
      <div className="comment_section">
        <div className="watch_current_details">
          <div>
            <img src={currentPlaying?.channelInfo?.image}></img>
          </div>
          <div>
            <div> Channel: {currentPlaying?.channelInfo?.name}</div>
            <div>{""}</div>
            <div> Likes: {currentPlaying?.videoLikes}</div>
            <div> Views: {currentPlaying?.videoViews}</div>
            <div> subscribers: {currentPlaying?.channelInfo?.subscribers}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
