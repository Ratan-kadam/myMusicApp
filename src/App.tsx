import React from "react";
 import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import Watch from "./pages/Watch";
import MyHome from "./pages/MyHome";
import Nav from "./component/Nav";
import Menu from "./component/Menu";

export default function App() {
  return (
    <React.Fragment>
      <div className="container">
        <div id="nav">
           <Nav></Nav>
        </div>
        <div id="menu">
          menu
        </div>
        <div id="content">
          content
          <BrowserRouter>
            <Routes>
            <Route path="/" element={<MyHome />} />
              <Route path="/search" element={<Search />} />
              <Route path="/watch/:id" element={<Watch />} />
            </Routes>
          </BrowserRouter>
          </div>
        </div>
    </React.Fragment>
  );
}