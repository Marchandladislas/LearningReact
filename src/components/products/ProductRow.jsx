import propTypes from "prop-types";
/**
 *
 * @param {{name: string, stocked: boolean, price: string}} product product information
 * @returns {JSX.Element} JSX Element containing product information
 * @
 */
export function ProductRow({ product }) {
  const style = product.stocked ? undefined : { color: "red" };

  return (
    <tr>
      <td style={style}>{product.name}</td>
      <td style={style}>{product.price}</td>
    </tr>
  );
}

ProductRow.propTypes = {
  product: propTypes.shape({
    name: propTypes.string.isRequired,
    stocked: propTypes.bool.isRequired,
    price: propTypes.string.isRequired,
  }).isRequired,
};
