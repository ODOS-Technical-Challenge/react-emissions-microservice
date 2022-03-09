import React, { FunctionComponent } from "react";
import { IconSearch, TextInput } from "@trussworks/react-uswds";
import { IconButton, useId, useValue } from "../index";

export interface Props {
  value?: string;
  id?: string;
  placeholder?: string;

  onClick: (value: string) => void;

  style?: React.CSSProperties;
}

export const Search: FunctionComponent<Props> = ({
  id,
  value = "",
  placeholder,
  onClick,
  style = {},
}: Props) => {
  const [internal, setInternal] = useValue(value);
  const [cid] = useId(id);

  return (
    <div style={{ display: "flex", alignItems: "flex-end" }}>
      <TextInput
        style={style}
        placeholder={placeholder}
        id={cid}
        name="search"
        type="text"
        value={internal}
        onChange={({ target }) => setInternal(target.value)}
        onKeyDown={({ key }) => {
          if (key === "Enter") {
            onClick(internal);
          }
        }}
      />
      <IconButton
        name="search"
        style={{
          height: 40,
          width: 40,
          background: "#4AD01A",
          color: "white",
          border: "none",
        }}
        onClick={() => onClick(internal)}
        icon={IconSearch}
      />
    </div>
  );
};
