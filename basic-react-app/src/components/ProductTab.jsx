import Product from './Product.jsx';

function ProductTab() {
  let options = ['hi-tech', 'durable', 'fast'];
  return (
    <>
      <Product
        title="Phone"
        price={25000}
        features={['hi-tech', 'durable', 'fast'].join(', ')}
      />
      <Product title="Laptop" price={50000} features={options} />
    </>
  );
}

export default ProductTab;
