import "./Checkbox.scss";

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className="checkbox-icon"
  >
    <path
      d="M13.3332 4L5.99984 11.3333L2.6665 8"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Checkbox = ({
  id,
  name,
  className = "",
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  ...props
}) => {
  return (
    <label className={`checkbox-label ${className}`}>
      <input
        id={id}
        name={name}
        type="checkbox"
        className="checkbox"
        onChange={onChange}
        checked={!!checked}
        disabled={disabled}
        {...props}
      />
      <div className="checkbox-custom">
        <CheckIcon />
      </div>
      <span className="checkbox-label__text">{label}</span>
    </label>
  );
};
export default Checkbox;
