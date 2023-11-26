import '../../App.css'

// eslint-disable-next-line react/prop-types
const ShopCard = ({ name, price, color, img }) => {
    return (
            <div className="shop-card">
                <h2>{name}</h2>
                <p>{color}</p>
                <img src={img}/>
                <div className="card-price">   
                    <p>${price}</p>
                    <button>ADD TO CART</button>
                </div>
            </div>
    )
}

export default ShopCard