interface ContentLayoutInterface {
  children: React.ReactNode;
}

const Content = ({ children }: ContentLayoutInterface): JSX.Element => {
  return <div className="px-5 overflow-auto">{children}</div>;
};

export default Content;
