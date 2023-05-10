import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

const columns = Array(12)
  .fill(1)
  .map((_, index) => `auto / span ${index + 1}`);

const columnProperties = defineProperties({
  conditions: {
    wide: {},
    "cu-800": { "@container": "screen and (min-width: 800px)" },
    "cu-600": { "@container": "screen and (min-width: 600px)" },
    "cu-400": { "@container": "screen and (min-width: 400px)" },
  },
  defaultCondition: "wide",
  properties: {
    gridColumn: columns,
    border: ["1px solid violet"],
    backgroundColor: ["orange", "lightgreen", "yellowgreen"],
  },
});

export const columnSprinkles = createSprinkles(columnProperties);
