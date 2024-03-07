import './Product.css';
import Price from './Price.jsx';

function Product({title, idx }) {
    let oldPrices = ["12,495", "11,900", "1,599", "1,2000"]
    let newPrices = ["8,999", "9,800", "1,299", "1,1400"]
    let description = [["8,000 DPI", "5 programmable buttons"],
        ["Intuitive surface", "designed for ipad Pro"],
        ["optical-orientation", "wireless"],
        ["New M3 Chip", "18x faster"],
    ]
    return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    )
}

export default Product;
