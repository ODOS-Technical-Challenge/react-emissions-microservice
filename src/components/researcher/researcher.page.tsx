import React, { Fragment, FunctionComponent } from "react";
import { Page, SubHeader, CenterPane, Loading, TextField } from "../../common";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  CardGroup,
  CardHeader,
} from "@trussworks/react-uswds";
import { useExposure } from "../../hooks/exposure.hook";

export const ResearcherPage: FunctionComponent = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const chemical = params.get("chemical") || "";
  const { data, fetch, isLoading } = useExposure();

  const onSubmit = (checmical: string) => {
    fetch();
    navigate({
      search: `?${new URLSearchParams({ checmical }).toString()}`,
    });
  };

  return (
    <Fragment>
      <SubHeader />

      <Page>
        <div>
          <h3>Search by Chemicals</h3>
        </div>
        <div>
          <TextField
            value={chemical}
            placeholder="Search by chemical"
            style={{ width: "200px", marginRight: "16px" }}
            onBlur={(value) => onSubmit(value)}
          />
        </div>

        {isLoading && (
          <CenterPane>
            <Loading />
          </CenterPane>
        )}
        <CardGroup style={{ marginTop: "20px" }}>
          {data.map(({ name, exposure }: any) => (
            <Card key={name} gridLayout={{ tablet: { col: 12 } }}>
              <CardHeader>{name}</CardHeader>
              <CardBody>{exposure}</CardBody>
              <CardFooter>chemicals</CardFooter>
            </Card>
          ))}
        </CardGroup>
      </Page>
    </Fragment>
  );
};
