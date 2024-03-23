import RestaurantCard from "./RestaurantCard";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  console.log("Body Renderd");
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const API_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    const data = await fetch(API_URL);
    const json = await data.json();

    console.log(json);

    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  

  return listOfRestaurants.length === 0 ? ( 
    <Shimmer/>
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input 
            type="text" 
            className="search-box" 
            value={searchText} 
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button 
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
        <button 
          className="filter-btn" 
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              res=> res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key = {restaurant.info.id} resData = {restaurant}/>
        ))}
      </div>
    </div>
  );
};

export default Body;