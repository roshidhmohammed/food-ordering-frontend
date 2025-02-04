import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showDishes, setShowDishes] = useState(0);
  const { resId } = useParams();
  const resDetails = useRestaurantMenu(resId);

  const categories = resDetails?.dishes;

  return (
    <div className=" flex flex-col items-center pt-40 font-roboto">
      <div className=" px-[10px] flex flex-col  items-center mt-10 bg-gradient-to-t from-gray-400 to-gray-200 py-5  rounded-lg ">
        <div className=" flex flex-col items-start ml-5">
          <div className="my- ">
            <h1 className=" text-2xl  font-bold w-full flex justify-start">
              {resDetails?.name}
            </h1>
          </div>
          <div className=" border-1 rounded-md bg-gray-100 w-[600px] mt-5 p-5 px-5 ">
            <div className="flex justify-start gap-5 items-center">
              <div>
                <h2 className=" flex text-md font-bold gap-1">
                  <FaStar size={20} className=" mr-1  text-green-600" />
                  {resDetails?.ratings} ({resDetails?.ratingCount}
                  ratings)
                </h2>
              </div>
              <div>
                <h2 className=" text-2xl text-gray-600 mb-">.</h2>
              </div>
              <div className="text-md font-bold">
                <h4>{resDetails?.costForTwo}</h4>
              </div>
            </div>

            <div className=" ml-2">
              <h4 className=" font-bold text-orange-600">
                {resDetails?.cuisines.join(", ")}
              </h4>
            </div>
            <div className=" ml-2">
              <h4 className=" font-bold  font-roboto ">
                Outlet:{" "}
                <span className="font-bold  text-md text-gray-700 ml-1">
                  {resDetails?.areaName}
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[640px] mt-5 mb-40">
        {categories?.map((category, index) => (
          <div key={category?.title}>
            <div className="border-b-[1px] border-gray-300 rounded-md"></div>
            <RestaurantCategory
              category={category}
              showDishes={index === showDishes}
              setShowDishes={() =>
                index !== showDishes
                  ? setShowDishes(index)
                  : setShowDishes(null)
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
