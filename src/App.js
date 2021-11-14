import React from "react";
import Countries from "./components/Countries";
import Country from "./components/Country";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="countries/:name" element={<Country />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
