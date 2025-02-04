import { Link } from "react-router-dom";
import { LandingPageItems } from "../utils/constants";

const LandingPage = () => {
  return (
    <div className="  bg-primary   font-roboto md:pt-0 sm:pt-12 pt-[350px]">
      <div className=" h-screen  flex justify-center md:flex-row flex-col md:pb-0 sm:pb-0 pb-[400px] gap-8 items-center pt-40">
        {LandingPageItems?.map((item) => (
          <div key={item?.heading}>
            <Link to={item?.path}>
              <div className=" bg-gray-100 rounded-lg  flex justify-between flex-col pt-5   hover:cursor-pointer hover:scale-110 transition-all duration-500">
                <div>
                  <h1 className=" text-center text-gray-800 font-bold tracking-widest text-2xl">
                    {item?.heading}
                  </h1>
                  <h1 className=" text-center text-gray-500 font-bold  text-xl">
                    {item?.subHeading}
                  </h1>
                </div>
                <img
                  src={item?.image}
                  alt="food"
                  className=" rounded-b-lg   sm:h-[300px] h-[250px] w-[250px] sm:w-[300px]"
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
