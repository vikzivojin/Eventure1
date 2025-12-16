import "./Select.scss";

const Select = ({
  id,
  name,
  options = [],
  value,
  onChange,
  placeholder = "Select an option...",
  className = "",
  ...props
}) => {
  return (
    <div className="select-wrapper">
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`select ${className}`}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option, index) => {
          // Handle both string arrays and object arrays
          if (typeof option === "string") {
            return (
              <option key={index} value={option}>
                {option}
              </option>
            );
          } else {
            return (
              <option key={option.value || index} value={option.value}>
                {option.label || option.text}
              </option>
            );
          }
        })}
      </select>
      <div className="select-arrow" />
    </div>
  );
};

export default Select;
