import React, { FunctionComponent } from "react";
import { IconReport } from "@trussworks/react-uswds";
import { FlexPane } from "../../common";
import { ChemicalType } from "../../types";

interface Props {
  data: ChemicalType;
}

export const Chemical: FunctionComponent<Props> = ({ data }: Props) => {
  const isDeadly = data.healthEffects.includes("death");

  const style: React.CSSProperties = {};

  if (isDeadly) {
    style.color = "red";
  }

  return (
    <FlexPane style={{ alignItems: "center" }}>
      {isDeadly ? (
        <IconReport style={{ marginRight: 8, ...style }} />
      ) : (
        <div style={{ width: 24 }} />
      )}
      <p style={{ width: 200, ...style }}>{data.name}</p>
      <p style={style}>{data.healthEffects}</p>
    </FlexPane>
  );
};
