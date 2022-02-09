import React, { Fragment, FunctionComponent } from "react";
import { Page, SubHeader } from "../../common";
import { Counties } from "../counties/counties.component";

export const HomePage: FunctionComponent = () => {
  return (
    <Fragment>
      <SubHeader />

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
