import "./SecondaryButton.scss";

const SecondaryButton = ({
  type = "button",
  variant = "primary",
  disabled = false,
  isLink = false,
  to,
  className = "",
  children,
  ...props
}) => {
  let combinedClassName = "button secondarybutton--" + variant;
  if (className) combinedClassName += " " + className;

  if (isLink) {
    return (
      <a to={to} className={combinedClassName} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClassName}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
