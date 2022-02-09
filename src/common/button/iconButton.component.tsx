import React, { FunctionComponent } from "react";
import { IconProps } from "@trussworks/react-uswds/lib/components/Icon/Icon";
import { Link } from "react-router-dom";

interface Props {
  icon: React.ComponentType<IconProps>;
  name: string;

  href?: string;
  onClick?: VoidFunction;

  appearance?: "muted" | "default" | "success";
  iconSize?: number;
  style?: React.CSSProperties;
}

export const IconButton: FunctionComponent<Props> = ({
  appearance,
  href,
  icon,
  name,
  style = {},
  iconSize = 24,
  ...props
}: Props) => {
  const Icon = icon;

  if (appearance === "muted") {
    style.backgroundColor = "transparent";
    style.border = "none";
  }

  if (href) {
    return (
      <Link to={href}>
        <button
          name={name}
          type="button"
          style={{ height: "32px", width: "32px", ...style }}
        >
          <Icon />
        </button>
      </Link>
    );
  }
  return (
    <button
      name={name}
      type="button"
      style={{ height: "32px", width: "32px", ...style }}
      {...props}
    >
      <Icon style={{ width: iconSize, height: iconSize }} />
    </button>
  );
};
