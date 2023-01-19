import React from "react";
 import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import Watch from "./pages/Watch";
import MyHome from "./pages/MyHome";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<MyHome />} />
        <Route path="/search" element={<Search />} />
        <Route path="/watch/:id" element={<Watch />} />
      </Routes>
    </BrowserRouter>
  );
}