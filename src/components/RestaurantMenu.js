import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResInfo(json.data);
        
    }

    if (resInfo === null) return <Shimmer/>;

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    // const {name, cuisines, costForTwoMessage} = resInfo?.data?.cards?.card[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(resInfo);
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h1>{cuisines.join(",")}</h1>
            <h1>{costForTwoMessage}</h1>
            <h2>Menu</h2>
            <ul> 
                {itemCards.map(item => <li>{item.card.info.name} - {" Rs."} {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>  )}
            </ul>
        </div>
    );
};
export default RestaurantMenu;