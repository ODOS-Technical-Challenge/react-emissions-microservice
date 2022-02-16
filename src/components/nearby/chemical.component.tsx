import React, { FunctionComponent } from "react";
import { IconReport } from "@trussworks/react-uswds";
import { FlexPane } from "../../common";
import { ChemicalType } from "../../types";

interface Props {
  data: ChemicalType;
}

export const Chemical: FunctionComponent<Props> = ({ data }: Props) => {
  const style: React.CSSProperties = {};

  if (data.carcinogenInd) {
    style.color = "#7D2828";
  } else if (data.pfasInd || data.metalInd) {
    style.color = "#FFB020";
  } else {
    style.color = "#142966";
  }

  return (
    <FlexPane style={{ alignItems: "center" }}>
      {data.carcinogenInd ? (
        <IconReport style={{ marginRight: 8, ...style }} />
      ) : (
        <div style={{ width: 24 }} />
      )}
      <p style={{ width: "120px", ...style }}>{data.name}</p>
      <p style={{ width: "120px", ...style }}>{data.classification}</p>

      <p style={{ width: "240px", ...style }}>
        {data.carcinogenInd && " Known to cause cancer."}
        {data.pfasInd && " Known to cause adverse health impacts."}
        {data.metalInd && " Potentially toxic in large doses."}
      </p>
    </FlexPane>
  );
};
