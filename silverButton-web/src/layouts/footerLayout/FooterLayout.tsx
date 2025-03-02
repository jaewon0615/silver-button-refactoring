/** @jsxImportSource @emotion/react */
import React from "react";
import * as s from "./style";

interface FooterLayoutProps {
  children: React.ReactNode;
}

export default function HeaderLayout({ children }: FooterLayoutProps) {
  return <div css={s.footerLayout}>{children}</div>;
}
