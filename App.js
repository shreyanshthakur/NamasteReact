import React from "react";
import ReactDOM from "react-dom/client";

/*
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - restaurant container
 *    - restaurant Card
 *      - Img
 *      - Name of Res, star rating, Cuisine, delicery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://png.pngtree.com/png-clipart/20230106/original/pngtree-simple-and-modern-food-logo-vector-design-png-image_8876455.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId, 
    name, 
    cuisines,
    avgRating,
    costForTwo,
    sla} = resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />

      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} min</h4>
    </div>
  );
};

const resList = [
  {
    info: {
      id: "770396",
      name: "Oven Story Pizza - Standout Toppings",
      cloudinaryImageId: "b39e4312ae2e9f65c3b58faaed83f488",
      locality: "lake view appartment",
      areaName: "T POINT HINGNA",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 4.6,
      parentId: "3534",
      avgRatingString: "4.6",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 4.6,
        serviceability: "SERVICEABLE",
        slaString: "19-27 mins",
        lastMileTravelString: "4.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-17 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-145702b8-016c-40c1-9ec6-0459e448c7d5",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/oven-story-pizza-standout-toppings-lake-view-appartment-t-point-hingna-nagpur-770396",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "756289",
      name: "Bappa Foods",
      cloudinaryImageId: "236152bfc9b3945b4a368e55fb3def62",
      locality: "Kala Nagar",
      areaName: "Nas_College Road",
      costForTwo: "₹200 for two",
      cuisines: ["Chinese"],
      veg: true,
      parentId: "433628",
      avgRatingString: "--",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 4.6,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-17 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-145702b8-016c-40c1-9ec6-0459e448c7d5",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/bappa-foods-kala-nagar-nas-college-road-nagpur-756289",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "790839",
      name: "Chinese Wok",
      cloudinaryImageId: "b4817ea5bb972089f419c6f14e5a0bdd",
      locality: "Wardha Road",
      areaName: "Eternity Mall",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
      avgRating: 4.3,
      parentId: "61955",
      avgRatingString: "4.3",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 67,
        lastMileTravel: 4.2,
        serviceability: "SERVICEABLE_WITH_BANNER",
        slaString: "65-70 mins",
        lastMileTravelString: "4.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextOpenTimeMessage: "Currently not taking orders for this location",
        nextCloseTime: "2024-03-18 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹199",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-145702b8-016c-40c1-9ec6-0459e448c7d5",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/chinese-wok-wardha-road-eternity-mall-nagpur-790839",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "105240",
      name: "UBQ by Barbeque Nation",
      cloudinaryImageId: "ubypvyevkrogfvj1ygio",
      locality: "Eternity Mall",
      areaName: "Sitabuldi",
      costForTwo: "₹300 for two",
      cuisines: [
        "North Indian",
        "Barbecue",
        "Biryani",
        "Kebabs",
        "Mughlai",
        "Desserts",
      ],
      avgRating: 4,
      parentId: "10804",
      avgRatingString: "4.0",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 63,
        lastMileTravel: 4.2,
        serviceability: "SERVICEABLE_WITH_BANNER",
        slaString: "60-65 mins",
        lastMileTravelString: "4.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextOpenTimeMessage: "Currently not taking orders for this location",
        nextCloseTime: "2024-03-17 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹195 OFF",
        subHeader: "ABOVE ₹1300",
        discountTag: "MIN",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-145702b8-016c-40c1-9ec6-0459e448c7d5",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-eternity-mall-sitabuldi-nagpur-105240",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "580263",
      name: "Chicago Pizza",
      cloudinaryImageId: "m1ucy7ixwi3euhhonzsz",
      locality: "Bajaj Nagar",
      areaName: "Bajaj Nagar",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 3.6,
      parentId: "60277",
      avgRatingString: "3.6",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 38,
        lastMileTravel: 1.7,
        serviceability: "SERVICEABLE_WITH_BANNER",
        slaString: "35-40 mins",
        lastMileTravelString: "1.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextOpenTimeMessage: "Currently not taking orders for this location",
        nextCloseTime: "2024-03-18 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-145702b8-016c-40c1-9ec6-0459e448c7d5",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/chicago-pizza-bajaj-nagar-nagpur-580263",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "741553",
      name: "Top 'N Town",
      cloudinaryImageId: "6dcc1ab71ec75ea24d2082a98166af2b",
      locality: "Deo Nagar, Nagpur",
      areaName: " Deo Nagar ",
      costForTwo: "₹149 for two",
      cuisines: ["Ice Cream"],
      avgRating: 4.8,
      veg: true,
      parentId: "217200",
      avgRatingString: "4.8",
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 0.3,
        serviceability: "SERVICEABLE_WITH_BANNER",
        slaString: "25-30 mins",
        lastMileTravelString: "0.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextOpenTimeMessage: "Currently not taking orders for this location",
        nextCloseTime: "2024-03-17 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-145702b8-016c-40c1-9ec6-0459e448c7d5",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/top-n-town-deo-nagar-nagpur-741553",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "510859",
      name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
      cloudinaryImageId: "owmnx4cmhygad1dtxxzw",
      locality: "Surendra Nagar",
      areaName: "Manish Nagar",
      costForTwo: "₹200 for two",
      cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
      avgRating: 4.7,
      veg: true,
      parentId: "582",
      avgRatingString: "4.7",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 0.3,
        serviceability: "SERVICEABLE_WITH_BANNER",
        slaString: "25-30 mins",
        lastMileTravelString: "0.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextOpenTimeMessage: "Currently not taking orders for this location",
        nextCloseTime: "2024-03-17 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹90 OFF",
        subHeader: "ABOVE ₹189",
        discountTag: "MIN",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-145702b8-016c-40c1-9ec6-0459e448c7d5",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-surendra-nagar-manish-nagar-nagpur-510859",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "55319",
      name: "Variety Foods",
      cloudinaryImageId: "g7of9ljmc31lmx01i1ow",
      locality: "Vivekanand Nagar",
      areaName: "Vivekanand Nagar",
      costForTwo: "₹300 for two",
      cuisines: [
        "North Indian",
        "Maharashtrian",
        "Snacks",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.4,
      parentId: "9584",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 0.7,
        serviceability: "SERVICEABLE_WITH_BANNER",
        slaString: "25-30 mins",
        lastMileTravelString: "0.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextOpenTimeMessage: "Currently not taking orders for this location",
        nextCloseTime: "2024-03-17 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹85 OFF",
        subHeader: "ABOVE ₹179",
        discountTag: "MIN",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-145702b8-016c-40c1-9ec6-0459e448c7d5",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/variety-foods-vivekanand-nagar-nagpur-55319",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "84476",
      name: "Shruti Veg Restaurant",
      cloudinaryImageId: "r0t5uk2tf181civh9muc",
      locality: "Vivekanand Nagar",
      areaName: "Vivekanand Nagar",
      costForTwo: "₹400 for two",
      cuisines: [
        "North Indian",
        "Maharashtrian",
        "chinese",
        "Snacks",
        "Desserts",
        "Beverages",
        "tandoor",
      ],
      avgRating: 4.4,
      parentId: "187282",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 0.9,
        serviceability: "SERVICEABLE_WITH_BANNER",
        slaString: "30-35 mins",
        lastMileTravelString: "0.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextOpenTimeMessage: "Currently not taking orders for this location",
        nextCloseTime: "2024-03-17 22:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹85 OFF",
        subHeader: "ABOVE ₹179",
        discountTag: "MIN",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-145702b8-016c-40c1-9ec6-0459e448c7d5",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/shruti-veg-restaurant-vivekanand-nagar-nagpur-84476",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {
          resList.map((restaurant) => <RestaurantCard key = {restaurant.info.id} resData = {restaurant}/>)
        }
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
