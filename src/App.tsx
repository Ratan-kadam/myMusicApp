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
      <BrowserRouter>
        <div className="container">
          <div id="nav">
            <Nav></Nav>
          </div>
          <div id="menu">
            <Menu />
          </div>
          <div id="content">
            <Routes>
              <Route path="/" element={<MyHome />} />
              <Route path="/search" element={<Search />} />
              <Route path="/watch/:id" element={<Watch />} />
            </Routes>
          </div>
        </div>
        <div id="footer"></div>
      </BrowserRouter>
    </React.Fragment>
  );
}
