import React from "react";
import {
  MdHomeFilled,
  MdOndemandVideo,
  MdOutlineSlowMotionVideo,
  MdSubscriptions,
  MdOutlineVideoLibrary,
  MdHistory,
  MdOutlineSmartDisplay,
  MdOutlineWatchLater,
  MdThumbUpOffAlt,
  MdSettings,
  MdOutlinedFlag,
  MdOutlineHelpOutline,
  MdOutlineFeedback,
  MdOutlineSportsVolleyball,
} from "react-icons/md";

export const MENU_ITEMS = {
  Home: () => <MdHomeFilled />,
  Shorts: () => <MdOndemandVideo />,
  sunscription: () => <MdSubscriptions />,
  Library: () => <MdOutlineVideoLibrary />,
  History: () => <MdHistory />,
  "Your Videos": () => <MdHomeFilled />,
  "Watch Later": () => <MdOutlineWatchLater />,
  "Liked Videos": () => <MdThumbUpOffAlt />,
  Home1: () => <MdHomeFilled />,
  Shorts1: () => <MdOndemandVideo />,
  sunscription1: () => <MdSubscriptions />,
  Library1: () => <MdOutlineVideoLibrary />,
  History1: () => <MdHistory />,
};
