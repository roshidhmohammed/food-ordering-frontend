import { useState, useContext } from "react";
import logo from "../../logos/Frame3.png";
import { Link, useLocation } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";
import * as React from "react";
import { CgProfile } from "react-icons/cg";
import { IoMenu } from "react-icons/io5";
import Profile from "./Profile";
import MobileHeader from "./MobileView/MobileHeader";
import MobileProfile from "./MobileView/MobileProfile";
import { navItems } from "../utils/constants";

const Header = () => {
  const { pathname } = useLocation();
  const cartItems = useSelector((store) => store.cart.items);
  const [btnNameReact, setBtnNameReact] = useState("login");
  const { userName, setUserName } = useContext(UserContext);
  const [showName, setShowName] = useState(false);
  const [showMenuTab, setShowMenuTab] = useState(false);
  const onlineStatus = useOnlineStatus();

  const handleProfile = () => {
    setShowName(!showName);
  };

  const handleProfileForMobile = () => {
    setShowName(!showName);
    setShowMenuTab(!showMenuTab);
  };

  const handleMenuTab = () => {
    setShowMenuTab(!showMenuTab);
  };

  const handleNavItem = () => {
    setShowMenuTab(!showMenuTab);
  };

  return (
    <div className="text-teritary  flex md:px-0 px-2 justify-between items-center bg-secondary font-inter fixed top-0 left-0 right-0 z-[99999] shadow-lg shadow-gray-600  ">
      <div className=" ">
        <img src={logo} className="h-20" />
      </div>
      <div className="">
        <ul className="md:flex hidden justify-between gap-10 items-center mr-20 font-bold text-md">
          <li>Online Status : {onlineStatus ? "✅" : "🔴"}</li>

          {pathname !== "/" && (
            <>
              {navItems?.map((item) => (
                <div  key={item?.name}>
                  <li>
                    <Link
                      to={item?.path}
                      className={`${
                        pathname === item?.path && "text-headerHighlight"
                      } 
                        "font-bold text-md relative"
                      `}
                    >
                      {item?.name}
                      {item?.name === "Cart" && (
                        <span className=" cart-badge">{cartItems.length}</span>
                      )}
                    </Link>
                  </li>
                </div>
              ))}
            </>
          )}

          {pathname === "/" && (
            <>
              <button
                className=" border border-solid w-[100px] py-2 bg-primary text-gray-100 rounded-md"
                onClick={() => {
                  btnNameReact === "login"
                    ? setBtnNameReact("logout")
                    : setBtnNameReact("login");
                }}
              >
                {btnNameReact}
              </button>
            </>
          )}
          <li>
            {pathname !== "/" && (
              <div>
                <button onClick={() => handleProfile()} className=" relative">
                  <CgProfile size={30} />
                </button>
                {showName && (
                  <Profile userName={userName} setUserName={setUserName} />
                )}
              </div>
            )}
          </li>
        </ul>
      </div>

      <div className="md:hidden block">
        {!showMenuTab && <IoMenu size={34} onClick={handleMenuTab} />}
        {showMenuTab && (
          <MobileHeader
            handleProfileForMobile={handleProfileForMobile}
            showMenuTab={showMenuTab}
            logo={logo}
            handleMenuTab={handleMenuTab}
            navItems={navItems}
            showName={showName}
            pathname={pathname}
            handleNavItem={handleNavItem}
            cartItems={cartItems}
          />
        )}

        {showName && (
          <MobileProfile
            showName={showName}
            setUserName={setUserName}
            userName={userName}
            setShowName={setShowName}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
