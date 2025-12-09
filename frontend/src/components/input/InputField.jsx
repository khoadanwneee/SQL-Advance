import React from 'react';
import './Input.css';

const InputField = ({
  label,
  type = 'text',
  placeholder,
  icon,
  required,
  isSelect,
  options = [],
  value,
  onChange,
  ...rest
}) => {
  return (
    <div className="input-group">
      <label className="input-label">
        {label} {required && <span style={{ color: '#ef4444' }}>*</span>}
      </label>
      <div className="input-wrapper">
        {icon && !isSelect && <span className="input-icon">{icon}</span>}

        {isSelect ? (
          <select
            className="input-field select-field"
            value={value}
            onChange={onChange}
            required={required}
            {...rest}
          >
            <option value="">{placeholder}</option>
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={type}
            className="input-field"
            placeholder={placeholder}
            required={required}
            value={value}
            onChange={onChange}
            {...rest}
          />
        )}
      </div>
    </div>
  );
};

export default InputField;