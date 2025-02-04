import { FaStar } from "react-icons/fa";
import { CDN_URL } from "../utils/constants";
// import { CDN_URL } from "../utils/constants";
import React from "react";

const RestaurantCard = (props) => {
  const { name, cloudinaryImageId, avgRating, cuisines, costForTwo, id } =
    props?.restaurantData?.info;
  const { deliveryTime } = props?.restaurantData?.info?.sla;
  const CDN_URL =process.env.REACT_APP_CDN_URL

  return (
    <div
      data-testId="res-card"
      className=" hover:bg-gray-200 transition-all  p-4 flex flex-col justify-between rounded-md  sm:w-[300px] w-full"
    >
      <div className="">
        <img
          src={`${CDN_URL}${cloudinaryImageId}`}
          alt=""
          className="sm:h-[150px] h-[300px] sm:w-[300px] w-full rounded-md"
        />
      </div>
      <div className=" flex flex-col mx-2 my-3">
        <div className=" flex justify-between ">
          <h3 className=" font-bold text-lg">
            {name?.length > 26 ? name.slice(0, 26) + "..." : name}
          </h3>
        </div>
        <div className="my-1">
          <h4 className=" font-medium">
            {cuisines?.length > 2
              ? cuisines.slice(0, 2).join(",") + " ...."
              : cuisines.slice(0, 3).join(",")}
          </h4>
        </div>
        <div className="flex justify-between my-1">
          <h4 className="font-medium">{costForTwo}</h4>
          <h3 className=" flex items-center gap-1 font-bold ">
            {avgRating}{" "}
            <FaStar className="restaurant-star-icon bg-green-900 rounded-full text-gray-100 p-[2px]" />
          </h3>
        </div>
        <div className="flex justify-between my-1">
          <h5 className="font-medium">Delivery Time: {deliveryTime} min</h5>
        </div>
      </div>
    </div>
  );
};

export const withPromotedlabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className=" text-gray-100 absolute z-50 bg-gray-950 px-2 py-1 mt-0 text-sm font-semibold rounded-md">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
