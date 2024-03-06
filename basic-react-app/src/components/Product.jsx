import './Product.css';

function Product({title, price}) {
        return (
            <div className="Product">
                <h3>{title}</h3>
                <h5>Price: {price}</h5>
                {price > 30000 && <p>Discount 5%</p>}
            </div>
        )
}

export default Product;
