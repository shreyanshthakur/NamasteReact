import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[250px] bg-gray-100 rounded-xl hover:bg-gray-200 h-[400px] flex flex-col"
    >
      <img
        className="rounded-lg h-40 object-cover"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="flex flex-col justify-between flex-grow">
        <div>
          <h3 className="font-bold py-2">{name}</h3>
          <h4 className="text-gray-600">{cuisines.join(", ")}</h4>
        </div>
        <div className="mt-2">
          <h4 className="text-yellow-600">{avgRating}⭐</h4>
          <h4 className="text-gray-600">{costForTwo}</h4>
          <h4 className="text-gray-600">Delivery in {sla.deliveryTime} min</h4>
        </div>
      </div>
    </div>
  );
};

// Higher order component

// input - RestaurantCard => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-1 p-1 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
