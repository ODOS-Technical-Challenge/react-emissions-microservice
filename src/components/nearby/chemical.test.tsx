import React from "react";
import { render, screen } from "@testing-library/react";

import { Chemical } from "./chemical.component";
import { ChemicalType } from "../../types";

describe("Nearby Component: Chemical", () => {
  it("should handle rendering component.", async () => {
    const data: ChemicalType = {
      name: "Iron",
    } as ChemicalType;

    render(<Chemical data={data} />);

    const name = await screen.findByText(data.name);
    expect(name).toBeInTheDocument();
  });

  it("should handle rendering dangerous chemical.", async () => {
    const data: ChemicalType = {
      name: "Iron",
      carcinogenInd: true,
    } as ChemicalType;

    const { container } = render(<Chemical data={data} />);

    expect(container.innerHTML).toContain("rgb(125, 40, 40)");
  });

  it("should handle rendering warning chemical.", async () => {
    const data: ChemicalType = {
      name: "Iron",
      pfasInd: true,
    } as ChemicalType;

    const { container } = render(<Chemical data={data} />);

    expect(container.innerHTML).toContain("rgb(255, 176, 32)");
  });

  it("should handle rendering okay chemical.", async () => {
    const data: ChemicalType = {
      name: "Iron",
    } as ChemicalType;

    const { container } = render(<Chemical data={data} />);

    expect(container.innerHTML).toContain("rgb(20, 41, 102)");
  });
});
