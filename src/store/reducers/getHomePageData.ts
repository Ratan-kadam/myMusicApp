import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "..";

interface DashboardData {
    videoId: string;
}

const API_KEY = process.env.REACT_APP_YOTUBE_DATA_API_KEY;
const YOUTUBE_API_URL= 'https://youtube.googleapis.com/youtube/v3';

export const getDashboardData = createAsyncThunk('dashboardData', async (isNext: false,thunkAPI) => {
 console.log("data", isNext, thunkAPI);
 const { getState, dispatch } = thunkAPI;
 const API =  `${YOUTUBE_API_URL}/search?maxResults=20&q="reactjs projects"&key=${API_KEY}&part=snippet&type=video&${
    isNext ? `pageToken=${1}` : ""
  }`
})