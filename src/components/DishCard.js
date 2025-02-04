import { BiSolidStar } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { addItems } from "../slices/cartSlice";

const DishCard = ({ dishes }) => {
  console.log(dishes)
  const dispatch = useDispatch()
  // const { rating, ratingCount } = dishes?.card?.info?.ratings?.aggregatedRating;

  const { name, price, image, rating , ratingCount} = dishes

  // console.log(dishes?.card?.info)

  const handleAddItems = () =>{
dispatch(addItems(dishes))
  }


  return (
    <div className=" font-roboto ">
      <div className=" my-3 py-10 bg-gray-300 p-5 rounded-lg ">
        <div className="flex justify-between items-center">
          <div>
            <div className=" ml-1">

            <h1 className=" font-bold text-gray-700 text-lg">{name}</h1>
            <h1 className=" font-bold text-md text-gray-900 mt-2">
            ₹ {price}
            </h1>
            </div>
            <div className=" mt-2 flex text-sm">
          <BiSolidStar  className=" text-green-700 font-bold mr-1" />
          <h1 className=" font-bold ">
            {rating ? rating : 0} ({ratingCount ? ratingCount : "0 ratings"})
          </h1>
        </div>
          </div>
          <div className="relative">
            <img src={image} alt="dish" className="h-[110px] w-[120px]  rounded-lg "/>
            <button className="bg-gray-100 px-3 py-2 font-bold text-green-700 rounded-md absolute  bottom-[-20px] left-[10px] right-[10px] mx-auto" onClick={()=>handleAddItems()}>
              Add
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default DishCard;
