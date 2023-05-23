import type { FC, PropsWithChildren } from "react";
import { textContainerStyles, textStyles } from "./Text.css";

type Props = PropsWithChildren<{
  withContainer?: boolean;
}>;

export const Text: FC<Props> = ({ children, withContainer = false }) => {
  if (withContainer) {
    return (
      <div className={textContainerStyles}>
        <p className={textStyles}>{children}</p>
      </div>
    );
  }

  return <p className={textStyles}>{children}</p>;
};
