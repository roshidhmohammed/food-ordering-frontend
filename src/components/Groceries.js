import { useEffect, useState } from "react";
import GroceriesCard from "./shimmerUi/GroceriesCard";

const Groceries = () => {
  const [groceriesData, setGroceriesData] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      // `http://localhost:8001/api/restaurant/get-all-groceries`
      `${process.env.REACT_APP_BACKEND_URL}grocery/get-all-groceries`
    );

    const json = await data.json();
    const groceries = json.groceriesData.groceriesData;
    setGroceriesData(groceries);
  };
  return (
    <>
      {groceriesData?.length === 0 ? (
        <GroceriesCard />
      ) : (
        <div className=" pt-40 font-roboto grid sm:justify-start justify-center  grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-5  px-20 pb-20">
          {groceriesData?.map((grocery) => (
            <div
              data-testId="res-card"
              key={grocery?.id}
              className=" bg-gray-200 hover:cursor-pointer transition-all  p-4 flex flex-col justify-between i rounded-md  "
            >
              <div className="">
                <img
                  src={grocery?.image}
                  alt=""
                  className="h-[150px] w-[300px] rounded-md"
                />
              </div>
              <div className=" flex flex-col mx-2 my-3">
                <div className=" flex justify-between ">
                  <h3 className="md:block hidden font-bold text-lg">
                    {grocery?.name}
                  </h3>
                  <h3 className="md:hidden block font-bold text-lg">
                    {grocery?.name.length > 10
                      ? grocery?.name.slice(0, 10) + "..."
                      : grocery?.name}
                  </h3>
                </div>
                <div className="my-1">
                  <h4 className=" font-medium trext-gray-700 font-roboto">
                    Delivery Time: {grocery?.eta}
                  </h4>
                </div>
                <div className="flex justify-between my-1 items-center">
                  <h4 className="font-bold">₹ {grocery?.price}</h4>
                  <h3 className=" flex items-center font-bold">
                    {grocery?.weight}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Groceries;
