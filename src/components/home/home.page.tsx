import React, { Fragment, FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { CenterPane, Page, Search, SubHeader } from "../../common";
import { ROUTES } from "../../utils";
import { Counties } from "../counties/counties.component";

export const HomePage: FunctionComponent = () => {
  const navigate = useNavigate();
  const onSubmit = (zip: string) => {
    navigate(
      `${ROUTES.Nearby.path}?${new URLSearchParams({ zip }).toString()}`
    );
  };

  return (
    <Fragment>
      <SubHeader />
      <CenterPane style={{ alignItems: "center", backgroundColor: "#255EA2" }}>
        <h4 style={{ marginRight: "16px", color: "white" }}>
          Enter your zip code to see potential hazards in your area
        </h4>
        <Search
          placeholder="zip code"
          onClick={onSubmit}
          style={{ marginTop: "unset" }}
        />
      </CenterPane>

      <Page>
        <div style={{ marginBottom: "32px" }}>
          <h3>Welcome to the EPA&apos;s ChemCheck</h3>
          <p>
            Here you&apos;ll be able to search your area for harmful chemicals
            and other environmental concerns.
          </p>
        </div>

        <Counties />
      </Page>
    </Fragment>
  );
};
