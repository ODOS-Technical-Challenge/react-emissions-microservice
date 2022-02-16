import React, { FunctionComponent } from "react";
import { FlexPane } from "../../common";
import { FacilityType } from "../../types";
import { Chemical } from "./chemical.component";
import Fuse from "fuse.js";

interface Props {
  data: FacilityType;
  query?: string;
}

export const Facility: FunctionComponent<Props> = ({
  data,
  query = "",
}: Props) => {
  const { name, county, state, chemicals } = data;

  if (query) {
    const fuse = new Fuse(chemicals, { keys: ["healthEffects"] });

    const result = fuse.search(query);

    if (!result.length) {
      return null;
    }
  }

  return (
    <FlexPane
      key={name}
      style={{
        borderBottom: "1px solid rgb(21,22,21)",
        padding: 8,
        margin: 16,
      }}
    >
      <div style={{ marginRight: 32, width: 300 }}>
        <p>{name}</p>
        <p>
          {county}, {state}
        </p>
      </div>
      <div>
        {chemicals.map((chemical) => (
          <Chemical key={`${name}-${chemical.name}`} data={chemical} />
        ))}
      </div>
    </FlexPane>
  );
};
