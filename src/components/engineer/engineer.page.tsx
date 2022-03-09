import React, { Fragment, FunctionComponent, useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import {
  Page,
  SubHeader,
  CenterPane,
  Loading,
  FlexPane,
  TextField,
} from "../../common";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Dropdown, Label } from "@trussworks/react-uswds";
import { useExposure } from "../../hooks/exposure.hook";
import { Facility } from "../nearby/facility.component";
import axios from "axios";

export const EngineerPage: FunctionComponent = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const { data, fetch, isLoading } = useExposure();
  const zip = params.get("zip") || "";
  const [air, setAir] = useState<string>("");
  const [geoCoder, setGeoCoder]: any = useState<any>(null);

  const [center, setCenter] = useState({
    lat: 44.42767,
    lng: -71.97842,
  });

  const setLocation = (zip: string) => {
    const g = new geoCoder.maps.Geocoder();
    g.geocode({ address: "US zipcode " + zip }, async (results: any) => {
      const lat = results[0].geometry.location.lat();
      const lng = results[0].geometry.location.lng();
      const date = new Date().toJSON().split("T")[0];
      const { data } = await axios.get(
        `https://www.airnowapi.org/aq/forecast/zipCode/?format=application/json&zipCode=${zip}&date=${date}&distance=50&API_KEY=8B47C42B-FCF9-4DA3-80DC-4FFA1C0E8664`
      );
      if (data.length) {
        setAir(`${data[0].AQI} ${data[0].Category.Name}`);
      } else {
        setAir("NA");
      }
      setCenter({ lat, lng });
    });
  };

  const onSubmit = async (zip: string) => {
    navigate({
      search: `?${new URLSearchParams({ zip }).toString()}`,
    });
    fetch(zip);
    setLocation(zip);
  };

  const K_WIDTH = 40;
  const K_HEIGHT = 40;

  const initGeocoder = (google: any) => {
    setGeoCoder(google);
  };

  useEffect(() => {
    if (geoCoder && zip) {
      setTimeout(() => setLocation(zip), 1000);
      console.log("geo ready");
    }
  }, [geoCoder]);

  const onChange = (args: any) => {
    const { center: newCenter } = args;
    setCenter(newCenter);
  };

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
          <TextField
            value={zip}
            placeholder="Search by zip"
            style={{ width: "200px", marginRight: "16px" }}
            onBlur={(value) => onSubmit(value)}
          />
          <Label htmlFor="options">Exposure Type</Label>
          <Dropdown
            id="options"
            name="input-dropdown"
            style={{ width: "100%" }}
          >
            <option>- Select - </option>
            <option value="value1">Air</option>
            <option value="value2">Underground</option>
            <option value="value3">Land</option>
            <option value="value4">Water</option>
          </Dropdown>
          <h3>Air Quality: {air}</h3>
        </div>
        <div style={{ width: "100%", height: "300px", marginTop: "20px" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyAz1o5MKx77vb9lDRDB1Iw566ZiwOHFiQ4",
            }}
            center={center}
            zoom={8}
            yesIWantToUseGoogleMapApiInternals={true}
            onChange={onChange}
            onGoogleApiLoaded={initGeocoder}
          >
            {data.map((facility: any, index: number) => (
              <MarkerComponent
                key={index}
                lat={facility.latitude}
                lng={facility.longitude}
                text="1"
              />
            ))}
          </GoogleMapReact>
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
            <strong style={{ width: 120 }}>Chemical</strong>
            <strong style={{ width: 120 }}>Health Effect</strong>
            <strong style={{ width: 120 }}>Exposure</strong>
          </FlexPane>
        </FlexPane>

        <div>
          {data.map((facility: any) => (
            <Facility key={facility.name} data={facility} />
          ))}
        </div>
      </Page>
    </Fragment>
  );
};
