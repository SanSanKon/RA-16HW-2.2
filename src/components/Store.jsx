import CardsView from "./CardsView"
import IconSwitch from "./IconSwitch"
import ListView from "./ListView"
import "../App.css"
import { useState } from "react"

const Store = () => {

    const products = [{
        name: "Nike Metcon 2",
        price: "130",
        color: "red",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "blue",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
      }, {
        name: "Nike free run",
        price: "170",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
      }, {
        name: "Nike Metcon 3",
        price: "150",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
    }];

    const [view, setView] = useState("cards");

    const onSwitch = () => {
        setView(view === "cards" ? "list" : "cards")
    }

    return(
        <div>
            <IconSwitch 
                icon={view === "cards" ? "view_list" : "view_module"}
                onSwitch={onSwitch}
            />

            { view === "cards" ? (
              <CardsView cards={products} />
              ) : (
                <ListView items={products} />
              )}
        </div>
    )
}

export default Store