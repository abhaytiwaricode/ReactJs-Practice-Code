import PropTypes from 'prop-types';
import './Product.css';

function Product({ title, price, features, features2 }) {
  return (
    <div className="Product">
      <h3>{title}</h3>
      <h5>Price: {price}</h5>
      <p>{features}</p>
    </div>
  );
}

export default Product;
