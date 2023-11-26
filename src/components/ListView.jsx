import ShopItem from "./views/ShopItem"
import { v4 as uuidv4 } from 'uuid'

// eslint-disable-next-line react/prop-types
const ListView = ({ items }) => {
    return (
        <div className="item-view">
            {items.map((item) => (
                <ShopItem 
                    key={uuidv4()}
                    img={item.img}
                    name={item.name}
                    color={item.color}
                    price={item.price}
                />
            ))}
        </div>
    )
}

export default ListView