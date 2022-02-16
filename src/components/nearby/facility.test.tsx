import React from "react";
import { render, screen } from "@testing-library/react";
import { FacilityType } from "../../types";

import { Facility } from "./facility.component";

describe("Nearby Component: Facility", () => {
  const data: FacilityType = {
    name: "Here",
    county: "Fairfax",
    state: "VA",
    city: "",
    street: "",
    zipCode: 20121,
    latitude: 1,
    longitude: 1,
    chemicals: [
      {
        name: "Iron",
        healthEffects: "none",
      },
    ],
  };
  it("should handle rendering component.", async () => {
    render(<Facility data={data} />);

    const name = await screen.findByText(data.name);
    expect(name).toBeInTheDocument();
  });

  it("should handle filtering component.", async () => {
    render(<Facility data={data} query={"none"} />);

    const name = await screen.findByText(data.name);
    expect(name).toBeInTheDocument();
  });

  it("should handle filtering component.", async () => {
    const { container } = render(<Facility data={data} query={"death"} />);

    expect(container.innerHTML).toEqual("");
  });
});
