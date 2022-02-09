import React, { Fragment, FunctionComponent } from "react";
import { Page, SubHeader, CenterPane, Loading } from "../../common";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  CardGroup,
  CardHeader,
  Dropdown,
  Label,
  Search,
} from "@trussworks/react-uswds";
import { useExposure } from "../../hooks/exposure.hook";

export const ExposurePage: FunctionComponent = () => {
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
          <h3>Method of Exposure</h3>
          <p>Search by zip, filter by exposure.</p>
        </div>
        <div>
          <Search
            placeholder="Search by zip"
            size="small"
            onSubmit={onSubmit}
          />
          <Label htmlFor="options">Exposure Type</Label>
          <Dropdown
            id="input-dropdown"
            name="input-dropdown"
            style={{ width: "100%" }}
          >
            <option>- Select - </option>
            <option value="value1">Air</option>
            <option value="value2">Underground</option>
            <option value="value3">Land</option>
            <option value="value4">Water</option>
          </Dropdown>
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
