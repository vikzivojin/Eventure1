import "./Typography.scss";

const Typography = ({ variant = "p", as, className = "", children }) => {
  const Tag = as || variant;
  const baseClass = "typography";
  const variantClass = `${baseClass}--${variant}`;
  const combinedClassName = `${baseClass} ${variantClass}${
    className ? " " + className : ""
  }`;

  return <Tag className={combinedClassName}>{children}</Tag>;
};
export default Typography;
