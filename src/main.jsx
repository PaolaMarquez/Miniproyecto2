import React from "react";
import ReactDOM from "react-dom/client";
import { HomePageUrl, MovieDetailPageUrl } from "./constants/urls";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { MovieDetailPage } from "./pages/MovieDetailPage/MovieDetailPage";
import { Layout } from "./pages/Layout/Layout";
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={HomePageUrl} element={<HomePage />} />
          <Route path={MovieDetailPageUrl} element={<MovieDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
