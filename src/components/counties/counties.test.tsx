import React from "react";
import { render } from "@testing-library/react";

import { Counties } from "./counties.component";

describe("Counties List", () => {
  it("should handle rendering component.", async () => {
    render(<Counties />);
  });
});
