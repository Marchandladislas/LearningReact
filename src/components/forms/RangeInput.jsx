import PropTypes from "prop-types";

/**
 * @param {number} min minimum value for the range input
 * @param {number} max maximum value for the range input
 * @param {number} value current value of the range input
 * @param {(value: number) => void} onChange function to call when input value changes
 */
export function RangeInput({ min, max, value, onChange }) {
  return (
    <input
      type="range"
      className="form-range"
      min={min}
      max={max}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
    />
  );
}

RangeInput.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
