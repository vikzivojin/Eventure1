import "./Form.scss";

const Form = ({ onSubmit, className = "", wrapper = true, children }) => {
  const baseClass = "form";
  const combined = `${baseClass}${className ? " " + className : ""}`;
  if (wrapper) {
    return (
      <div className="form-wrapper">
        <form className={combined} onSubmit={onSubmit}>
          {children}
        </form>
      </div>
    );
  } else {
    return (
      <form className={combined} onSubmit={onSubmit}>
        {children}
      </form>
    );
  }
};

export default Form;
