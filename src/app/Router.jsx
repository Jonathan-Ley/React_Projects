import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage";

export default function Router() {
  return (
    <Routes>
      <Route path="/homepage" element={<HomePage />} />
    </Routes>
  );
}
