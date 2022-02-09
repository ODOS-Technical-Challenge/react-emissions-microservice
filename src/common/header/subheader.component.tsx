import React, { FunctionComponent, ReactNode } from "react";
import { PrimaryNav, Header } from "@trussworks/react-uswds";
import { ROUTES } from "../../utils";

import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

interface Props {
  children?: ReactNode;
}

export const SubHeader: FunctionComponent<Props> = ({ children }: Props) => {
  const menuItems: React.ReactNode[] = [
    <>
      <Link to={ROUTES.Home.path} className="usa-nav__link">
        Home
      </Link>
    </>,
    <>
      <Link to={ROUTES.Engineer.path} className="usa-nav__link">
        Engineer
      </Link>
    </>,
    <>
      <Link to={ROUTES.Nearby.path} className="usa-nav__link">
        Nearby
      </Link>
    </>,
    <>
      <Link to={ROUTES.Researcher.path} className="usa-nav__link">
        Researcher
      </Link>
    </>,
  ];
  return (
    <Header
      style={{
        background: "white",
        boxShadow:
          "0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08)",
      }}
    >
      <div className="usa-nav-container">
        <div className="usa-navbar">
          <Link to={ROUTES.Home.path}>
            <img height={32} src={logo} alt="logo" style={{ margin: "16px" }} />
          </Link>
          <PrimaryNav items={menuItems}></PrimaryNav>
        </div>
        {children}
      </div>
    </Header>
  );
};
