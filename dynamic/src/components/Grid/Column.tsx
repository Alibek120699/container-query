import { FC, PropsWithChildren } from "react";
import { columnStyles, breakpointVars } from "./Column.css";
import { type ColumnsCount } from "../../types";
import { assignInlineVars } from "@vanilla-extract/dynamic";

type Props = PropsWithChildren<{
  cols: Record<string, ColumnsCount>;
}>;

export const Column: FC<Props> = ({ cols, children }) => {
  return (
    <div
      className={columnStyles}
      style={assignInlineVars(breakpointVars, {
        backgroundColors: {
          cu_1000: "orange",
          cu_800: "orange",
          cu_600: "lightgreen",
          cu_400: "lightgreen",
          cu_200: "yellowgreen",
          cu_100: "yellowgreen",
        },
        gridColumns: {
          wide: "",
          cu_1000: "",
          cu_800: "",
          cu_600: "",
          cu_400: "",
          cu_200: "",
          cu_100: "",
          ...cols,
        },
      })}
    >
      {children}
    </div>
  );
};
