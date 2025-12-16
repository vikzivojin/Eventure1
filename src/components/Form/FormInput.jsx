const FormInput = ({
  id,
  name,
  type = "text",
  className = "",
  required = false,
  error = false,
  ...props
}) => {
  const baseClass = "form__input";
  const errorClass = error ? " form__input--error" : "";
  const combined = `${baseClass}${errorClass}${
    className ? " " + className : ""
  }`;
  return (
    <input
      id={id}
      name={name}
      type={type}
      className={combined}
      required={required}
      {...props}
    />
  );
};

export default FormInput;
