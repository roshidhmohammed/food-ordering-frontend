import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const MobileHeader = (props) => {
  const {
    logo,
    pathname,
    showName,
    handleMenuTab,
    navItems,
    handleNavItem,
    cartItems,
    handleProfileForMobile,
    showMenuTab,
  } = props;
  return (
    <div
      className={` z-[50] fixed top-0 flex bottom-0 flex-col justify-between  right-0 left-0   bg-secondary shadow-lg transform transition-all duration-500 ease-in-out ${
        showMenuTab
          ? "translate-x-0 translate-y-0 duration-500 opacity-100 scale-100 "
          : " translate-x-full  opacity-0 scale-100 duration-500"
      }`}
    >
      <div className=" bg-secondary flex justify-between items-center py-7 mb-4 px-3  shadow-lg ">
        <div>
          <img src={logo} className=" h-16 " />
        </div>
        <IoClose color="black" size={40} onClick={handleMenuTab} />
      </div>
      <div className=" h-[200vh] flex justify-start pl-5 font-sans font-bold text-gray-100 text-lg my-5 mt-12">
        <div className=" flex flex-col gap-5 items-start">
          {navItems?.map((item) => (
            <Link key={item?.name} to={item?.path} onClick={handleNavItem}>
              <>
                <button
                  className={`text-gray-800 ${
                    pathname === item.path && !showName && "text-[#FC4100]"
                  }`}
                >
                  {item?.name}
                  {item?.name === "Cart" && (
                    <span className="cart-badge ">{cartItems?.length}</span>
                  )}
                </button>
              </>
            </Link>
          ))}
          <button
            className={`text-gray-800 ${showName && "text-[#FC4100]"} `}
            onClick={() => handleProfileForMobile()}
          >
            profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
