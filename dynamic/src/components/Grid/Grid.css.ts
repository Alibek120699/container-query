import { style } from "@vanilla-extract/css";

export const gridStyles = style({
  display: "grid",
  gridTemplateColumns: "repeat(12, 1fr)",
  containerType: "inline-size",
});
