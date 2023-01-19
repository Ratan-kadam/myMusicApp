import React from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { TiMicrophone } from "react-icons/ti";
import { BsYoutube, BsCameraVideo, BsBell } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoAppsSharp } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useAppDispatch, useAppSelector } from "../store/hooks";
// import { changeSearchTerm, clearSearchTerm, clearVideos } from "../store";
// import { getSearchPageVideos } from "../store/reducers/getSearchPageVideos";

export default function Nav() {
    return (
        <React.Fragment>
            <div className="nav">
                <div className="nav__icon"> 
                    <GiHamburgerMenu />
                </div>
                <div className="youtube">
                    <BsYoutube className="youtube_symbol" />
                    <span className="youtube-text">YouTube</span>
                </div>
            </div>
        </React.Fragment>
    )
}