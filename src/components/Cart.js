import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../slices/cartSlice";
import Lottie from "lottie-react";
import Animation from "../assets/lottie_files//Animation - 1738250627315.json";
import Button from "./reusableUi/Button";

const Cart = () => {
  const cartItems = useSelector((store) => store?.cart?.items);
  const dispatch = useDispatch();

  const totalCartPrice = cartItems?.reduce(
    (accumulator, currentItem) => currentItem.price + accumulator,
    0
  );

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <div className=" ">
        <div className="mt-40 lg:mx-80 md:mx-20 mx-10 flex flex-col mb-40 bg-gray-100  rounded-lg shadow-xl shadow-gray-500 font-roboto">
          <div className=" border-b-2 py-5 pl-5 flex justify-between">
            <h1 className=" font-bold text-2xl">Your Orders</h1>
            {cartItems.length > 0 && (
              <div className="mr-3" onClick={handleClearCart}>
                <Button
                  bgColor="primary"
                  hoverBgColor="lightOrange"
                  name=" Clear Cart"
                />
              </div>
            )}
          </div>
          {cartItems?.length === 0 ? (
            <div className=" flex justify-center items-center flex-col font-roboto py-20">
              <h1 className=" font-bold text-xl"> Your Cart is Empty... </h1>
              <Lottie animationData={Animation} />
            </div>
          ) : (
            <>
              {cartItems?.map((dish) => (
                <div
                  className=" p-5 flex flex-col font-roboto border-b "
                  key={dish?.name}
                >
                  <div className=" flex justify-between sm:flex-row flex-col sm:gap-0 gap-10 mt-3 items-center">
                    <img
                      src={dish.image}
                      alt="food"
                      className="h-32 w-20 lg:w-40 sm:w-32  rounded-lg"
                    />
                    <div>
                      <h1 className=" font-bold ">{dish?.name}</h1>
                    </div>

                    <div>
                      <h1 className=" font-bold ">₹{dish?.price}</h1>
                    </div>
                  </div>
                </div>
              ))}
              <div className=" flex justify-end items-center mr-5 py-5">
                <h1 className=" font-bold text-lg mr-2  text-gray-600 tracking-wider">
                  Total
                </h1>
                <h1 className=" font-bold text-md ">: ₹ {totalCartPrice}</h1>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
