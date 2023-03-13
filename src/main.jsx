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
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { Layout } from "./pages/Layout/Layout";
import "./index.css";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={LoginPageUrl} element={
          <LoginPage/>
          }
        />

        <Route path={RegisterPageUrl} element={
          <RegisterPage/>
          }
        />

        <Route element={<Layout />}>
          <Route path={HomePageUrl} element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
            } 
          />

          <Route path={MovieDetailPageUrl()} element={
            <PrivateRoute>
              <MovieDetailPage />
            </PrivateRoute>
            } 
          />

          <Route path={SearchPageUrl} element={
            <PrivateRoute>
              <SearchPage />
            </PrivateRoute>
            } 
          />
        </Route>

        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
