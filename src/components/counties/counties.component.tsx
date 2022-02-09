import React, { FunctionComponent } from "react";
import { IconEco } from "@trussworks/react-uswds";
import { CountyType } from "../../types";
import { CenterPane, FlexPane } from "../../common";

export const Counties: FunctionComponent = () => {
  const list: CountyType[] = [{}, {}, {}, {}, {}] as CountyType[];
  return (
    <div>
      <h4>List of counties with the most chemical exposure currently</h4>
      <FlexPane
        style={{ justifyContent: "space-evenly", borderRadius: "10px" }}
      >
        {list.map(({ county = "Empty", state = "No Where" }) => (
          <div key={county}>
            <CenterPane
              style={{ height: "75px", backgroundColor: "light-grey" }}
            >
              <IconEco />
            </CenterPane>
            <h4>{county}</h4>
            <p>{state}</p>
          </div>
        ))}
      </FlexPane>
    </div>
  );
};
