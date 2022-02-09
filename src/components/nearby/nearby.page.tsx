import React, { Fragment, FunctionComponent } from "react";
import {
  Page,
  FlexPane,
  SubHeader,
  CenterPane,
  Loading,
  DropdownField,
  TextField,
} from "../../common";
import { useNavigate, useSearchParams } from "react-router-dom";

import { useNearby } from "../../hooks";

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

      <Page>
        <div>
          <h3>Chemical Exposure by Zip Code</h3>
          <p>Chemical Exposure by Zip Code</p>
        </div>
        <FlexPane>
          <TextField
            value={zip}
            placeholder="Search by zip"
            style={{ width: "200px", marginRight: "16px" }}
            onBlur={(value) => onSubmit({ zip: value })}
          />
          <DropdownField
            value={effects}
            options={["All"]}
            style={{ width: "200px", marginRight: "16px" }}
            onChange={(value) => {
              onSubmit({ effects: value });
            }}
          />
        </FlexPane>

        {isLoading && (
          <CenterPane>
            <Loading />
          </CenterPane>
        )}

        {data.map(({ name }) => (
          <FlexPane key={name}>
            <p>{name}</p>
          </FlexPane>
        ))}
      </Page>
    </Fragment>
  );
};
