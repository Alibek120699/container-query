import { style } from "@vanilla-extract/css";

export const firstColumnStyles = style({
  border: "1px solid violet",
  gridColumn: `auto / span ${1}`,
  backgroundColor: "orange",

  "@container": {
    "(max-width: 800px)": {
      gridColumn: `auto / span ${4}`,
      backgroundColor: "lightgoldenrodyellow",
    },
    "(max-width: 600px)": {
      gridColumn: `auto / span ${8}`,
      backgroundColor: "lightgreen",
    },
    "(max-width: 400px)": {
      gridColumn: `auto / span ${6}`,
      backgroundColor: "magento",
    },
  },
});

export const secondColumnStyles = style({
  border: "1px solid violet",
  gridColumn: `auto / span ${1}`,
  backgroundColor: "orange",

  "@container": {
    "(max-width: 800px)": {
      gridColumn: `auto / span ${8}`,
      backgroundColor: "lightgoldenrodyellow",
    },
    "(max-width: 600px)": {
      gridColumn: `auto / span ${4}`,
      backgroundColor: "lightgreen",
    },
    "(max-width: 400px)": {
      gridColumn: `auto / span ${6}`,
      backgroundColor: "magento",
    },
  },
});
