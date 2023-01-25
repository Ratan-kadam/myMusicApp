import React from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { TiMicrophone } from "react-icons/ti";
import { BsYoutube, BsCameraVideo, BsBell } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoAppsSharp } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { watch } from "fs";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getMySearch } from "../store/reducers/getHomePageData";

export default function Nav() {
  const dispatch = useAppDispatch();
  const [search, setSearch] =  useState("");

  const handleSearch = (val:any) => {
    console.log(val.target.value);
    setSearch(val.target.value);
  }

  const handleClick = () => {
    dispatch(getMySearch(search))
  }

  return (
    <React.Fragment>
      <div className="nav">
        <div className="nav__icon">
          <GiHamburgerMenu />
        </div>
        <Link to={`/`}>
          <div className="youtube">
            <BsYoutube className="youtube_symbol" />
            <span className="youtube-text">MyYoutube</span>
          </div>
        </Link>
        <input className="nav__input" onChange={(e) => handleSearch(e)}></input>
        <button onClick={(e) => handleClick()}>Search</button>
        <div className="nav__micro">
          <TiMicrophone />
        </div>
        <div className="nav__rest">
          <div className="nav__micro">
            <BsCameraVideo />
          </div>
          <div className="nav__micro">
            <IoAppsSharp />
          </div>
          <div className="nav__micro nav__micro--bell">
            <BsBell />
          </div>
          <div className="nav__micro nav__micro--user">RK</div>
        </div>
      </div>
    </React.Fragment>
  );
}
