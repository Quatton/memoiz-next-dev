import clsx from "clsx";
export const Main: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  return <main className="flex h-full transition-all">{children}</main>;
};
