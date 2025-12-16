import "./List.scss";

const List = ({ variant = "unordered", className = "", children }) => {
  const Tag = variant === "ordered" ? "ol" : "ul";
  const baseClass = "list";
  const variantClass = `${baseClass}--${variant}`;
  const combinedClassName = `${baseClass} ${variantClass}${
    className ? " " + className : ""
  }`;

  return <Tag className={combinedClassName}>{children}</Tag>;
};

export default List;
