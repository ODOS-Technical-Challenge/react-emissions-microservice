import React from "react";
import { render, screen } from "@testing-library/react";

import { Chemical } from "./chemical.component";
import { ChemicalType } from "../../types";

describe("Nearby Component: Chemical", () => {
  it("should handle rendering component.", async () => {
    const data: ChemicalType = {
      name: "Iron",
      healthEffects: "none",
    };

    render(<Chemical data={data} />);

    const name = await screen.findByText(data.name);
    expect(name).toBeInTheDocument();
  });

  it("should handle rendering dangerous chemical.", async () => {
    const data: ChemicalType = {
      name: "Iron",
      healthEffects: "death",
    };

    const { container } = render(<Chemical data={data} />);

    expect(container.innerHTML).toContain("red");
  });
});
