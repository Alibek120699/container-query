import { FC, PropsWithChildren, useMemo } from "react";
import { columnSprinkles } from "./Column.css";
import { type ColumnsCount } from "../../types";

type Props = PropsWithChildren<{
  cols: Record<string, ColumnsCount>;
}>;

export const Column: FC<Props> = ({ cols, children }) => {
  const gridColumn = useMemo(() => {
    return Object.entries(cols).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: `auto / span ${value}`,
      }),
      {}
    );
  }, []);

  return (
    <div
      className={columnSprinkles({
        gridColumn,
        border: {
          wide: "1px solid violet",
        },
        backgroundColor: {
          wide: "orange",
          "cu-800": "lightgreen",
        },
      })}
    >
      {children}
    </div>
  );
};
