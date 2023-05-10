import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

const responsiveProperties = defineProperties({
  conditions: {
    wide: {},
    "cu-800": { "@container": "screen and (max-width: 800px)" },
    "cu-600": { "@container": "screen and (max-width: 600px)" },
    "cu-400": { "@container": "screen and (max-width: 400px)" },
  },
  defaultCondition: "wide",
  properties: {
    display: ["none", "grid", "flex", "block", "inline"],
  },
  shorthands: {},
});

export const sprinkles = createSprinkles(responsiveProperties);

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinkles>[0];
