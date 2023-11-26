import '../../App.css'

// eslint-disable-next-line react/prop-types
const ShopItem = ({ name, price, color, img }) => {
    return (
        <div className="shop-item">
            <img src={img} />
            <h2>{name}</h2>
            <p>{color}</p>
            <p className="item-price">${price}</p>
            <button>ADD TO CART</button>
        </div>
    )
}

export default ShopItem;