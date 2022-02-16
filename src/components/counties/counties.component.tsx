import React, { FunctionComponent } from "react";
import { IconPark } from "@trussworks/react-uswds";
import { CenterPane, FlexPane, Loading } from "../../common";
import { useCounties } from "../../hooks";

export const Counties: FunctionComponent = () => {
  const { data, isLoading } = useCounties();

  return (
    <div>
      <h4>List of counties with the most chemical exposure currently</h4>
      {isLoading && (
        <CenterPane>
          <Loading />
        </CenterPane>
      )}
      <FlexPane
        style={{
          justifyContent: "space-evenly",
        }}
      >
        {data.map(({ county = "Empty", state = "No Where", img }) => (
          <div
            key={county}
            style={{
              borderRadius: "10px",
              width: 150,
              boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
            }}
          >
            {img ? (
              <img
                src={img}
                alt={county}
                height="75px"
                style={{
                  width: "100%",
                  objectFit: "cover",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              />
            ) : (
              <CenterPane
                style={{
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                  height: "75px",
                  backgroundColor: "#00000029",
                }}
              >
                <IconPark style={{ color: "#B9B5B5", width: 48, height: 48 }} />
              </CenterPane>
            )}
            <div
              style={{
                padding: 8,
                marginBottom: 16,
              }}
            >
              <h4 style={{ margin: 0 }}>{county}</h4>
              <p style={{ margin: 0, marginTop: 8 }}>{state}</p>
            </div>
          </div>
        ))}
      </FlexPane>
    </div>
  );
};
