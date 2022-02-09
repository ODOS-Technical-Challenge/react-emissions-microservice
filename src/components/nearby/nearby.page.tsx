import React, { Fragment, FunctionComponent } from "react";
import {
  Page,
  FlexPane,
  SubHeader,
  CenterPane,
  Loading,
  Search,
  DropdownField,
} from "../../common";
import { useNavigate, useSearchParams } from "react-router-dom";

import { useUsers } from "../../hooks";

export const NearbyPage: FunctionComponent = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const zip = params.get("zip") || "";
  const effects = params.get("effects") || "";

  const { data, fetch, isLoading } = useUsers();

  const onSubmit = (query: Record<string, string | undefined>) => {
    const base = {
      effects: effects,
      zip: zip,
      ...query,
    };
    console.log(base);
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
          <Search
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

        {data.map(({ id, firstName, lastName, avatar }: any) => (
          <FlexPane key={id}>
            {avatar && <img src={avatar} alt={firstName} />}
            <p>
              {firstName} {lastName}
            </p>
          </FlexPane>
        ))}
      </Page>
    </Fragment>
  );
};