import "./RadioButton.scss";

const RadioButton = ({ id, label, value, name, checked, onChange }) => {
  return (
    <label
      htmlFor={id}
      className={`radio-button ${
        checked ? "radio-button--primary" : "radio-button--secondary"
      }`}
    >
      <input
        id={id}
        className="radio-button__input"
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span className="radio-button__label">{label}</span>
    </label>
  );
};

export default RadioButton;
