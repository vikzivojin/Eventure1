const ListItem = ({ className = "", children }) => {
  const baseClass = "list__item";
  const combinedClassName = `${baseClass}${className ? " " + className : ""}`;
  return <li className={combinedClassName}>{children}</li>;
};

export default ListItem;
