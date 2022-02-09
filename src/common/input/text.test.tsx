import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import { Props } from "./text.field";
import { TextField } from "../index";

describe("Common Component: Text Field", () => {
  const onBlur = jest.fn();

  let props: Props = {
    value: "",
    onBlur,
  };

  beforeEach(() => {
    onBlur.mockClear();

    props = {
      value: "",
      onBlur,
    };
  });

  it("should handle rendering a text input.", () => {
    render(<TextField {...props} />);
    const input = screen.getByRole("textbox");

    expect(input).toBeInTheDocument();
  });

  it("should handle an default value.", () => {
    props.value = "Hello World";
    render(<TextField {...props} />);
    const input: HTMLInputElement = screen.getByRole("textbox");

    expect(input.value).toEqual(props.value);
  });

  it("should handle an undefined 'value' property.", () => {
    props.value = undefined;
    render(<TextField {...props} />);
    const input: HTMLInputElement = screen.getByRole("textbox");

    expect(input.value).toEqual("");
  });

  it("should handle an defined 'style' property.", () => {
    props.style = { marginLeft: "10px" };
    const { container } = render(<TextField {...props} />);

    expect(container.innerHTML).toContain("margin-left");
  });

  it("should handle the 'on blur' action.", () => {
    const value = "hey";

    render(<TextField {...props} />);
    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value } });
    fireEvent.blur(input, { target: { value } });

    expect(onBlur).toHaveBeenLastCalledWith(value);
  });
});
