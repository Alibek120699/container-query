import { FC, PropsWithChildren } from "react";
import { gridStyles } from "./Grid.css";

export const Grid: FC<PropsWithChildren> = ({ children }) => {
  return <div className={gridStyles}>{children}</div>;
};
