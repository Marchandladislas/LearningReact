import PropTypes from "prop-types";

/**
 * @param {string} placeholder text to show when input is empty
 * @param {string} value current value of the input
 * @param {(s: string) => void} onChange function to call when input value changes
 */
export function Input({ placeholder, value, onChange }) {
  return (
    <div>
      <input
        type="text"
        className="form-control"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
