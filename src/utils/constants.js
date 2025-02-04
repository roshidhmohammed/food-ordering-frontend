import foodImage from "../../logos/pngtree-food-delicious-burger-png-image_6712851-removebg-preview.png"
import groceryImage from "../../logos/pngtree-assortment-of-grocery-items-arranged-on-png-image_10536689.png"

export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const RESTAURANT_API = "http://localhost:8001/api/restaurant";

export const INSTAMART_API =
  "https://www.swiggy.com/api/instamart/home?clientId=INSTAMART-APP";
// export const RESTAURANT_API = "http://localhost:8001/api/restaurant";

// export const INSTAMART_API =
//   "https://www.swiggy.com/api/instamart/home?clientId=INSTAMART-APP";

export const navItems = [
  { name: "Home", path: "/" },
  { name: " About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
  { name: "Cart", path: "/cart" },
];
export const LandingPageItems = [
  {
    heading:"Food Delivery",
    subHeading:"From Restaurants",
    image:foodImage,
    path:"/food"
  },
  {
    heading:"Groceries",
    subHeading:"From Hunger Wave Store",
    image:groceryImage,
    path:"/groceries"
  }
]

export const githubProfile = "https://api.github.com/users/roshidhmohammed"
