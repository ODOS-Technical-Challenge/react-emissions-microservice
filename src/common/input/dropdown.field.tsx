import React, { FunctionComponent } from "react";
import { Dropdown } from "@trussworks/react-uswds";
import { useId, useValue } from "../index";

export interface Props {
  value?: string;
  options: string[];
  id?: string;
  placeholder?: string;
  title?: string;

  style?: React.CSSProperties;

  onChange: (value: string) => void;
}

export const DropdownField: FunctionComponent<Props> = ({
  id,
  value = "",
  placeholder,
  title = "",
  options,
  onChange,
  style = {},
}: Props) => {
  const [internal, setInternal] = useValue(value);
  const [cid] = useId(id);

  return (
    <div style={{ display: "flex", alignItems: "flex-end" }}>
      {title && <label htmlFor={cid}>{title}</label>}
      <Dropdown
        placeholder={placeholder}
        style={style}
        id={cid}
        name={title}
        value={internal}
        onChange={({ target }) => {
          setInternal(target.value);
          onChange(target.value);
        }}
      >
        <option disabled>- Select - </option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </Dropdown>
    </div>
  );
};
