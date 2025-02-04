import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import DishCard from "./DishCard";
import DishCardShimmer from "./shimmerUi/DishCardShimmer";

const RestaurantCategory = ({ category, showDishes, setShowDishes }) => {
  const { title } = category;

  const handleRestaurantCategory = () => {
    setShowDishes();
  };

  console.log(category?.dishes?.length)
  return (
    <div className=" my-1 px-3  font-roboto">
      <div className="">
        <div
          className="transition-transform duration-500  flex justify-between items-center  bg-white p-3 hover:cursor-pointer"
          onClick={handleRestaurantCategory}
        >
          <h1 className=" font-bold">
            {title} <span>(</span>
            {category?.dishes.length}
            <span>)</span>
          </h1>
          {!showDishes ? (
            <MdOutlineKeyboardArrowDown size={22} />
          ) : (
            <MdOutlineKeyboardArrowUp size={22} />
          )}
        </div>
        <div
          className={`transition-all  ease-in-out overflow-hidden  origin-top ${
            showDishes
              ? "max-h-full duration-500 opacity-100 scale-y-100"
              : " max-h-0 duration-300 opacity-0 scale-y-0"
          }`}
        >
          {category?.dishes?.length ===0 ? (
            <DishCardShimmer/>
          ):(

          category?.dishes?.map((dishes) => (
            <div
              key={dishes?.name}
              className=" duration-500 ease-in-out transition-transform "
            >
              <DishCard dishes={dishes} />
            </div>
          ))
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
