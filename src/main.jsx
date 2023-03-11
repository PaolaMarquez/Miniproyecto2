import React from "react";
import ReactDOM from "react-dom/client";
import { HomePageUrl, MovieDetailPageUrl, SearchPageUrl } from "./constants/urls";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { MovieDetailPage } from "./pages/MovieDetailPage/MovieDetailPage";
import { SearchPage } from "./pages/SearchPage/SearchPage";
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={HomePageUrl} element={<HomePage />} />
        <Route path={MovieDetailPageUrl} element={<MovieDetailPage />} />
        <Route path={SearchPageUrl} element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
