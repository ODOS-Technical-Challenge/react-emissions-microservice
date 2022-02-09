import React, { FunctionComponent } from "react";
import { TextInput } from "@trussworks/react-uswds";
import { useId, useValue } from "../index";

export interface Props {
  value?: string;
  id?: string;
  placeholder?: string;

  style?: React.CSSProperties;

  onBlur: (value: string) => void;
}

export const Search: FunctionComponent<Props> = ({
  id,
  value = "",
  placeholder,
  onBlur,
  style = {},
}: Props) => {
  const [internal, setInternal] = useValue(value);
  const [cid] = useId(id);

  return (
    <TextInput
      placeholder={placeholder}
      id={cid}
      style={style}
      name="search"
      type="text"
      value={internal}
      onChange={({ target }) => setInternal(target.value)}
      onBlur={({ target }) => {
        if (target.value !== value) {
          onBlur(target.value);
        }
      }}
    />
  );
};
