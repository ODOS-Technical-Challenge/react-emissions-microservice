import React, { Fragment, FunctionComponent } from "react";
import GoogleMapReact from "google-map-react";
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

export const EngineerPage: FunctionComponent = () => {
  const navigate = useNavigate();
  const { data, fetch, isLoading } = useExposure();
  const defaultProps = {
    center: {
      lat: 44.42767,
      lng: -71.97842,
    },
    zoom: 11,
  };

  const onSubmit = (value: any) => {
    fetch();
    navigate({
      search: `?search=${value}`,
    });
  };

  const K_WIDTH = 40;
  const K_HEIGHT = 40;

  const MarkerComponent = (props: any) => (
    <div
      style={{
        position: "absolute",
        width: K_WIDTH,
        height: K_HEIGHT,
        left: -K_WIDTH / 2,
        top: -K_HEIGHT / 2,

        border: "5px solid #f44336",
        borderRadius: K_HEIGHT,
        backgroundColor: "white",
        textAlign: "center",
        color: "#3f51b5",
        fontSize: 16,
        fontWeight: "bold",
        padding: 4,
      }}
    >
      {props.text}
    </div>
  );

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
        <div style={{ width: "100%", height: "200px", marginTop: "20px" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyAz1o5MKx77vb9lDRDB1Iw566ZiwOHFiQ4",
            }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <MarkerComponent lat={44.42767} lng={-71.97842} text="1" />
          </GoogleMapReact>
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
