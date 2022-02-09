import React, { Fragment, FunctionComponent } from "react";
import { Page, SubHeader, CenterPane, Loading } from "../../common";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  CardGroup,
  CardHeader,
  Search,
} from "@trussworks/react-uswds";
import { useExposure } from "../../hooks/exposure.hook";

export const ResearcherPage: FunctionComponent = () => {
  const navigate = useNavigate();
  const { data, fetch, isLoading } = useExposure();

  const onSubmit = (value: any) => {
    fetch();
    navigate({
      search: `?search=${value}`,
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
          <Search
            placeholder="Search by chemical"
            size="small"
            onSubmit={onSubmit}
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
