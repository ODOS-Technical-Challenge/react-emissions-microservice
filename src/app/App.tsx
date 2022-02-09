import React, { FunctionComponent } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppStore } from "../store";
import { Header } from "../common";
import { ROUTES } from "../utils";

import "./App.css";

import { HomePage } from "../components";
import { EngineerPage } from "../components/engineer/engineer.page";
import { ResearcherPage } from "../components/researcher/researcher.page";

export const App: FunctionComponent = () => {
  return (
    <div className="App">
      <AppStore>
        <Header />
        <Routes>
          <Route {...ROUTES.Home} element={<HomePage />} />
          <Route {...ROUTES.Engineer} element={<EngineerPage />} />
          <Route {...ROUTES.Researcher} element={<ResearcherPage />} />

          {/** Fallback Redirect / Default Page */}
          <Route path="" element={<Navigate to={ROUTES.Home.path} />} />
        </Routes>
      </AppStore>
    </div>
  );
};
