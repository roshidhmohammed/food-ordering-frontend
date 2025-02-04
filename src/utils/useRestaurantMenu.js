import { useEffect, useState } from "react";
import { RESTAURANT_API } from "./constants";
import { axiosInstance } from "../utility/axios";

const useRestaurantMenu = (resId) => {
  const [resDetails, setResDetails] = useState(null);
  useEffect(() => {
    fetchRestaurantMenu();
  }, []);
  const fetchRestaurantMenu = async () => {
     await axiosInstance.get("/get-all-restaurants-menu", {
      params: { resId }, // Query parameter for GET
    })
    .then((res)=>{
      
      // const json =  res.data.json();
      console.log(res.data.restaurantCategories)
      const restaurantDetails = res.data.restaurantCategories
      setResDetails(restaurantDetails);
      console.log(restaurantDetails)
    })
    .catch((error) =>{
      console.log(error)
    })
    
    await axiosInstance
      .get("restaurant/get-all-restaurants-menu", {
        params: { resId }, // Query parameter for GET
      })
      .then((res) => {
        const restaurantDetails = res.data.restaurantCategories;
        setResDetails(restaurantDetails);
      })
      .catch((error) => {});
  };
  return resDetails;
};

export default useRestaurantMenu;
