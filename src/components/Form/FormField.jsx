const FormField = ({ label, htmlFor, className = "", children }) => {
  const baseClass = "form__field";
  const combined = `${baseClass}${className ? " " + className : ""}`;
  return (
    <div className={combined}>
      {label && (
        <label className="form__label" htmlFor={htmlFor}>
          {label}
        </label>
      )}
      <div className="form__control">{children}</div>
    </div>
  );
};
export default FormField;
