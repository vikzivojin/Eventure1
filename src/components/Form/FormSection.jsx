import Typography from "../Typography/Typography.jsx";

const FormSection = ({ title, children, className = "", icon }) => {
  const baseClass = "form__section";
  const combined = `${baseClass}${className ? " " + className : ""}`;

  return (
    <div className={combined}>
      {icon && <div className="form__section-icon">{icon}</div>}
      {title && (
        <Typography variant="h2" className="form__section-title">
          {title}
        </Typography>
      )}
      {children}
    </div>
  );
};

export default FormSection;
