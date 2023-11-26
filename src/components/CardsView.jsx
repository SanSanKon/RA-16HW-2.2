import ShopCard from "./views/ShopCard"
import { v4 as uuidv4 } from 'uuid'

// eslint-disable-next-line react/prop-types
const CardsView = ({ cards }) => {
    return (
        <div className="card-view">
            {cards.map((card) => (
                <ShopCard 
                    key={uuidv4()} 
                    name={card.name}
                    color={card.color}
                    img={card.img}
                    price={card.price}
                />
            ))}
        </div>
    )
}

export default CardsView