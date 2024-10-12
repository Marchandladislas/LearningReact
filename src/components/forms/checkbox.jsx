import PropTypes from "prop-types";

/**
 *
 * @param checked boolean value to determine if checkbox is checked
 * @param {(checked: boolean) => void} onChange function to call when checkbox value changes
 * @param label text to show next to the
 * @param id id of the checkbox
 * checkbox input
 */
export function Checkbox({ checked, onChange, label, id }) {
  return (
    <div>
      <input
        id={id}
        type="checkbox"
        className="form=check-input"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label htmlFor={id} className="form-check-label">
        {label}
      </label>
    </div>
  );
}

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
