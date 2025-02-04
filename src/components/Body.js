import RestaurantCard, { withPromotedlabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import OnlineStatus from "./OnlineStatus";
import * as React from "react";
import FoodCard from "./shimmerUi/FoodCard";
import Button from "./reusableUi/Button";
import InputBox from "./reusableUi/InputBox";
// import axios from "axios";
import { axiosInstance } from "../utility/axios";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  const PromotedRestaurantCard = withPromotedlabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch("http://localhost:8001/api/restaurant/get-all");
    const data = await axios.get(`${process.env.REACT_APP_BACKEND_URL}restaurant/get-all`);

    const json = await data?.json();
    setResList(
      json?.restaurantList?.data?.cards[1]?.card?.card?.gridElements
        ?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.restaurantList?.data?.cards[1]?.card?.card?.gridElements
        ?.infoWithStyle?.restaurants
    );
  };
  if (!onlineStatus) {
    return <OnlineStatus />;
  }

  const updateInputBox = (e) => {
    setSearchText(e);
  };

  return (
    <div className="body py-36 xl:mx-28 mx-5 ">
      <div className="flex justify-between md:flex-row flex-col items-center  ">
        <div className="m-3 flex flex-wrap gap-2 items-center justify-center ">
          <InputBox
            dataTestId="searchInput"
            inputValue={searchText}
            updateInputBox={updateInputBox}
          />
          <div
            onClick={() => {
              setFilteredRestaurants(
                resList?.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                )
              );
            }}
          >
            <Button bgColor="blue" hoverBgColor="lightBlue" name="Search" />
          </div>
        </div>
        <div
          onClick={() => {
            const list = resList?.filter(
              (restaurant) => restaurant.info.avgRating > 4.5
            );
            setFilteredRestaurants(list);
          }}
        >
          <Button
            bgColor="primary"
            hoverBgColor="lightOrange"
            name="Filter Restaurants"
          />
        </div>
      </div>
      {resList?.length === 0 ? (
        <FoodCard />
      ) : (
        <>
          <div className="grid sm:justify-start justify-center  grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-5 mt-5 my-10">
            {filteredRestaurants?.map((restaurant) => (
              <Link
                className="Link"
                to={"/restaurant/" + restaurant?.info?.id}
                key={restaurant?.info?.id}
              >
                {restaurant.info.promoted ? (
                  <PromotedRestaurantCard restaurantData={restaurant} />
                ) : (
                  <RestaurantCard restaurantData={restaurant} />
                )}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Body;
