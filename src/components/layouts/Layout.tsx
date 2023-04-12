export const Layout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className="h-screen overflow-hidden dark:bg-black">{children}</div>
  );
};
