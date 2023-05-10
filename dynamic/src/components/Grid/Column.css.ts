import { createThemeContract, style } from "@vanilla-extract/css";

export const breakpointVars = createThemeContract({
  gridColumns: {
    wide: null,
    cu_1000: null,
    cu_800: null,
    cu_600: null,
    cu_400: null,
    cu_200: null,
    cu_100: null,
  },
  backgroundColors: {
    cu_1000: null,
    cu_800: null,
    cu_600: null,
    cu_400: null,
    cu_200: null,
    cu_100: null,
  },
});

export const columnStyles = style({
  border: "1px solid violet",
  gridColumn: `auto / span ${breakpointVars.gridColumns.wide}`,

  "@container": {
    "(max-width: 800px)": {
      gridColumn: `auto / span ${breakpointVars.gridColumns.cu_800}`,
      backgroundColor: breakpointVars.backgroundColors.cu_800,
    },
    "(max-width: 600px)": {
      gridColumn: `auto / span ${breakpointVars.gridColumns.cu_600}`,
      backgroundColor: breakpointVars.backgroundColors.cu_600,
    },
    "(max-width: 400px)": {
      gridColumn: `auto / span ${breakpointVars.gridColumns.cu_400}`,
      backgroundColor: breakpointVars.backgroundColors.cu_400,
    },
  },
});
