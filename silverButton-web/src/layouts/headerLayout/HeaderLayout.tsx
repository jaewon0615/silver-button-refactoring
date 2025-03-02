/** @jsxImportSource @emotion/react */
import React from "react";
import * as s from "./style";

interface HeaderLayoutProps {
  children: React.ReactNode;
}

export default function HeaderLayout({ children }: HeaderLayoutProps) {
  return <div css={s.headerLayout}>{children}</div>;
}
