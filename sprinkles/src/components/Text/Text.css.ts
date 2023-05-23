import { style } from "@vanilla-extract/css";

export const textContainerStyles = style({
  containerType: "inline-size",
});

export const textStyles = style({
  fontSize: "clamp(1rem, 4vw + 1rem, 3rem)",

  "@container": {
    "(inline-size > 300px)": {
      fontSize: "clamp(1rem, 4cqi, 3rem)",
    },
  },
});
