import { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  className: string;
}>;

export const Column: FC<Props> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};
