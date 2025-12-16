const FormTextarea = ({
  id,
  name,
  className = "",
  required = false,
  error = false,
  ...props
}) => {
  const baseClass = "form__textarea";
  const errorClass = error ? " form__textarea--error" : "";
  const combined = `${baseClass}${errorClass}${
    className ? " " + className : ""
  }`;
  return (
    <textarea
      id={id}
      name={name}
      className={combined}
      required={required}
      {...props}
    ></textarea>
  );
};

export default FormTextarea;
