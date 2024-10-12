import { useState } from "react";
import { Checkbox } from "./components/forms/checkbox";
import { ProductCategoryRow } from "./components/products/productCategoryRow";
import { Input } from "./components/forms/Input";
import { ProductRow } from "./components/products/ProductRow";
import "./App.css";
import { RangeInput } from "./components/forms/RangeInput";
import PropTypes from "prop-types";

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$2", stocked: false, name: "Banana" },
  { category: "Fruits", price: "$3", stocked: true, name: "Cherry" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Cucumber" },
  { category: "Vegetables", price: "$5", stocked: true, name: "Potato" },
  { category: "Vegetables", price: "$6", stocked: false, name: "Tomato" },
  { category: "Meat", price: "$7", stocked: true, name: "Beef" },
  { category: "Meat", price: "$8", stocked: false, name: "Chicken" },
  { category: "Meat", price: "$9", stocked: true, name: "Pork" },
  { category: "Fish", price: "$10", stocked: false, name: "Salmon" },
  { category: "Fish", price: "$11", stocked: true, name: "Tuna" },
];

function App() {
  const [showStockedOnly, setShowStockedOnly] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [rangeValue, setRangeValue] = useState(0);

  const visibleProducts = PRODUCTS.filter((product) => {
    if (showStockedOnly && !product.stocked) {
      return false;
    }

    if (searchTerm && !product.name.includes(searchTerm)) {
      return false;
    }

    if (parseInt(product.price.substring(1)) > rangeValue) {
      return false;
    }

    return true;
  });

  return (
    <div className="container">
      <SearchBar
        showStockedOnly={showStockedOnly}
        onStockedOnlyChange={setShowStockedOnly}
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        rangeValue={rangeValue}
        onRangeValueChange={setRangeValue}
      />
      <ProductTable products={visibleProducts} />
    </div>
  );
}

function SearchBar({
  showStockedOnly,
  onStockedOnlyChange,
  searchTerm,
  onSearchTermChange,
  rangeValue,
  onRangeValueChange,
}) {
  return (
    <div className="form-check">
      <div className="form-group">
        <Input
          value={searchTerm}
          onChange={onSearchTermChange}
          placeholder="Rechercher..."
        />
        <RangeInput
          min={0}
          max={15}
          value={rangeValue}
          onChange={onRangeValueChange}
        />
        <Checkbox
          id="stocked"
          checked={showStockedOnly}
          onChange={onStockedOnlyChange}
          label="Afficher seulement les produits en stock"
        />
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  showStockedOnly: PropTypes.bool.isRequired,
  onStockedOnlyChange: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  onSearchTermChange: PropTypes.func.isRequired,
  rangeValue: PropTypes.number.isRequired,
  onRangeValueChange: PropTypes.func.isRequired,
};

function ProductTable({ products }) {
  const rows = [];
  let lastCategory = null;

  for (let product of products) {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow key={product.category} name={product.category} />
      );
    }
    lastCategory = product.category;
    rows.push(<ProductRow product={product} key={product.name} />);
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prix</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

ProductTable.propTypes = {
  products: PropTypes.array.isRequired,
};

export default App;
