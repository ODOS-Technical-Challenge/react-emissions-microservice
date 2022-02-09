import React from "react";
import { render, screen } from "@testing-library/react";

import { Props } from "./dropdown.field";
import { DropdownField } from "../index";
import userEvent from "@testing-library/user-event";

describe("Common Component: Dropdown Field", () => {
  const onChange = jest.fn();

  let props: Props;

  beforeEach(() => {
    onChange.mockClear();

    props = {
      value: "",
      options: ["one"],
      title: "select",
      onChange,
    };
  });

  it("should handle rendering a text input.", () => {
    render(<DropdownField {...props} />);
    const input = screen.getByLabelText("select");

    expect(input).toBeInTheDocument();
  });

  it("should handle an undefined title.", () => {
    props.title = undefined;
    const { container } = render(<DropdownField {...props} />);

    expect(container).not.toContain("label");
  });

  it("should handle an default value.", () => {
    props.value = "one";
    render(<DropdownField {...props} />);
    const input: HTMLInputElement = screen.getByLabelText("select");

    expect(input.value).toEqual(props.value);
  });

  it("should handle an undefined 'value' property.", () => {
    props.options = [];
    props.value = undefined;
    render(<DropdownField {...props} />);
    const input: HTMLInputElement = screen.getByLabelText("select");

    expect(input.value).toEqual("");
  });

  it("should handle an defined 'style' property.", () => {
    props.style = { marginLeft: "10px" };
    const { container } = render(<DropdownField {...props} />);

    expect(container.innerHTML).toContain("margin-left");
  });

  it("should handle the 'on change' action.", () => {
    const value = "one";
    props.options = ["one", "two", "three"];

    render(<DropdownField {...props} />);
    const input = screen.getByLabelText("select");

    userEvent.selectOptions(input, value);

    expect(onChange).toHaveBeenLastCalledWith(value);
  });
});
