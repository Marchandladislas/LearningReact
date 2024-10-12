import PropTypes from "prop-types";

/**
 * ProductCategoryRow component is a functional component that renders a table row with a single cell that spans two columns.
 * @param {string} name
 */
export function ProductCategoryRow({ name }) {
  return (
    <tr>
      <th colSpan="2">
        <strong>{name}</strong>
      </th>
    </tr>
  );
}

ProductCategoryRow.propTypes = {
  name: PropTypes.string.isRequired,
};
