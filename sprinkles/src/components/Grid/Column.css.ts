import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

const columns = Array(12)
  .fill(1)
  .map((_, index) => `auto / span ${index + 1}`);

const columnProperties = defineProperties({
  conditions: {
    wide: {},
    "cu-800": { "@container": `(max-width: 800px)` },
    "cu-600": { "@container": `(max-width: 600px)` },
    "cu-400": { "@container": `(max-width: 400px)` },
  },
  defaultCondition: "wide",
  properties: {
    gridColumn: columns,
    border: ["1px solid violet"],
    backgroundColor: ["orange", "lightgreen", "yellowgreen"],
  },
});

export const columnSprinkles = createSprinkles(columnProperties);
