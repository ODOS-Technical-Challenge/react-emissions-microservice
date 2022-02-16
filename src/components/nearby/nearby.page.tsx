import React, { Fragment, FunctionComponent } from "react";
import {
  Page,
  FlexPane,
  SubHeader,
  CenterPane,
  Loading,
  TextField,
} from "../../common";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useNearby } from "../../hooks";

import { Facility } from "./facility.component";

export const NearbyPage: FunctionComponent = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const zip = params.get("zip") || "";
  const effects = params.get("effects") || "";

  const { data, fetch, isLoading } = useNearby();

  const onSubmit = (query: Record<string, string | undefined>) => {
    const base = {
      effects,
      zip,
      ...query,
    };
    // fetch();
    navigate({
      search: `?${new URLSearchParams(base).toString()}`,
    });
  };

  return (
    <Fragment>
      <SubHeader />
      <CenterPane style={{ alignItems: "center", backgroundColor: "#255EA2" }}>
        <h4 style={{ marginRight: "16px", color: "white" }}>
          Enter your zip code to see potential hazards in your area
        </h4>
        <TextField
          style={{ width: 150 }}
          value={zip}
          placeholder="zip code"
          onBlur={(value) => onSubmit({ zip: value })}
        />
      </CenterPane>

      <FlexPane
        style={{
          justifyContent: "flex-end",
          width: "75vw",
          margin: "8px auto",
        }}
      >
        <p style={{ marginRight: 8 }}>Filter by health effects</p>
        <TextField
          value={effects}
          placeholder="Health effect"
          style={{ width: "200px", marginRight: "16px" }}
          onBlur={(value) => onSubmit({ effects: value })}
        />
      </FlexPane>
      <Page>
        <div>
          <h3>Chemical Exposure by Zip Code</h3>
        </div>

        {isLoading && (
          <CenterPane>
            <Loading />
          </CenterPane>
        )}

        <FlexPane
          style={{
            padding: 8,
            margin: 16,
            borderBottom: "1px solid rgb(21,22,21)",
          }}
        >
          <strong style={{ marginRight: 32, width: 300 }}>Facility Name</strong>
          <FlexPane style={{ alignItems: "center" }}>
            <strong style={{ width: 144 }}>Chemical</strong>
            <strong style={{ width: 120 }}>Classification</strong>
            <strong style={{ width: 240 }}>Health Effect</strong>
          </FlexPane>
        </FlexPane>
        {data.map((facility) => (
          <Facility key={facility.name} data={facility} query={effects} />
        ))}
      </Page>
    </Fragment>
  );
};
