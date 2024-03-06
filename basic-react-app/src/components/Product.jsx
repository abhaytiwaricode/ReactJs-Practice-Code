import './Product.css';

function Product({title, price}) {
    let isDiscount = price > 30000;
    let styles = {backgroundColor: isDiscount ? 'blue' : ''};
        return (
            <div className="Product">
                <h3 style={styles}>{title}</h3>
                <h5>Price: {price}</h5>
                {isDiscount && <p>Discount 5%</p>}
            </div>
        )
}

export default Product;
