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

import { Chemical } from "./chemical.component";

export const NearbyPage: FunctionComponent = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const zip = params.get("zip") || "";
  const effects = params.get("effects") || "";

  const { data, fetch, isLoading } = useNearby();

  const onSubmit = (query: Record<string, string | undefined>) => {
    const base = {
      effects: effects,
      zip: zip,
      ...query,
    };
    fetch();
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
          width: "50vw",
          margin: "8px auto",
        }}
      >
        <p style={{ marginRight: 8 }}>Filter by health effects</p>
        <TextField
          value={effects}
          placeholder="Health effect"
          style={{ width: "200px", marginRight: "16px" }}
          onBlur={(value) => onSubmit({ zip: value })}
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

        {data.map(({ county, chemicals, name, state }) => (
          <FlexPane
            key={name}
            style={{
              borderBottom: "1px solid rgb(21,22,21)",
              padding: 8,
              margin: 16,
            }}
          >
            <div style={{ marginRight: 32, width: 300 }}>
              <p>{name}</p>
              <p>
                {county}, {state}
              </p>
            </div>
            <div>
              {chemicals.map((chemical) => (
                <Chemical key={`${name}-${chemical.name}`} data={chemical} />
              ))}
            </div>
          </FlexPane>
        ))}
      </Page>
    </Fragment>
  );
};
