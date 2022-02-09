import React, { Fragment, FunctionComponent } from "react";
import { Page, SubHeader } from "../../common";

export const HomePage: FunctionComponent = () => {
  return (
    <Fragment>
      <SubHeader />

      <Page>
        <div>
          <h3>Welcome to Demo App</h3>
          <p>A mock page that uses mock data.</p>
        </div>
      </Page>
    </Fragment>
  );
};
