import axios from "axios";
import { API_URL, MENU_API } from "./constants";

// Function to fetch restaurant list
export const fetchRestaurants = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching restaurant list:", error);
    throw error;
  }
};

// Function to fetch menu for a specific restaurant
export const fetchMenu = async (restaurantId) => {
  try {
    const response = await axios.get(`${MENU_API}${restaurantId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching menu:", error);
    throw error;
  }
};
