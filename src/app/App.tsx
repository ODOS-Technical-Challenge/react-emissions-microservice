import React, { FunctionComponent } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppStore } from "../store";
import { Header } from "../common";
import { ROUTES } from "../utils";

import "./App.css";
import {
  EngineerPage,
  HomePage,
  NearbyPage,
  ResearcherPage,
} from "../components";

export const App: FunctionComponent = () => {
  return (
    <div className="App">
      <AppStore>
        <Header />
        <Routes>
          <Route {...ROUTES.Home} element={<HomePage />} />
          <Route {...ROUTES.Engineer} element={<EngineerPage />} />
          <Route {...ROUTES.Researcher} element={<ResearcherPage />} />
          <Route {...ROUTES.Nearby} element={<NearbyPage />} />
          <Route {...ROUTES.Engineer} element={<EngineerPage />} />

          {/** Fallback Redirect / Default Page */}
          <Route path="" element={<Navigate to={ROUTES.Home.path} />} />
        </Routes>
      </AppStore>
    </div>
  );
};
