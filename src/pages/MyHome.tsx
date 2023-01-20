import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getHomePageVideos } from "../store/reducers/getHomePageVideos";

export default function MyHome() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getHomePageVideos(false))
    }, []);
    return (
        <div>Hom1e</div>
    )
}