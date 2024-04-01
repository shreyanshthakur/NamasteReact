import RestaurantCard from "./RestaurantCard";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import { API_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    
    const data = await fetch(API_URL);
    const json = await data.json();

    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>Looks like you are offline, please connect to the internet</h1>

  return (listOfRestaurants.length === 0) ? ( 
    <Shimmer/>
  ) : (
    <div className="body">
      <div className=" filter flex">
        <div className="search ml-5 p-4">
          <input 
            type="text" 
            className="border border-solid border-black" 
            value={searchText} 
            onChange={(e) => {
              setSearchText(e.target.value);
            }} 
          />
          <button className="px-4 py-0.3 bg-green-300 m-4 rounded-lg"
            onClick={() => {
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter(
                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex items-center">
          <button 
            className="px-4 py-0.3 bg-gray-300 rounded-lg" 
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                res=> res.info.avgRating > 4
              );
              setListOfRestaurants(filteredList);
            }}
          >
            ⬆️Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link 
            key={restaurant.info.id} 
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData = {restaurant}/>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;