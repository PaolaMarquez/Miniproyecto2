import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  HomePageUrl,
  MovieDetailPageUrl,
  LoginPageUrl,
  RegisterPageUrl,
  SearchPageUrl,
} from "./constants/urls";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { MovieDetailPage } from "./pages/MovieDetailPage/MovieDetailPage";
import { SearchPage } from "./pages/SearchPage/SearchPage";
import { Layout } from "./pages/Layout/Layout";
import "./index.css";
// import { PrivateRoutes } from "./components/PrivateRoutes";
// import { UserContextProvider } from "./contexts/userContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <UserContextProvider> */}
    <BrowserRouter>
      <Routes>
        <Route path={LoginPageUrl} element={<LoginPage />}></Route>
        <Route path={RegisterPageUrl} element={<RegisterPage />}></Route>
        {/* <Route element={<PrivateRoutes />}> */}
        <Route element={<Layout />}>
          <Route path={HomePageUrl} element={<HomePage />} />
          <Route path={MovieDetailPageUrl()} element={<MovieDetailPage />} />
          <Route path={SearchPageUrl} element={<SearchPage />} />
          {/* </Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
    {/* </UserContextProvider> */}
  </React.StrictMode>
);
