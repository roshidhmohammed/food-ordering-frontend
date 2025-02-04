import { IoClose } from "react-icons/io5";

const MobileProfile = (props) => {
  const { setShowName, showName, userName, setUserName} = props;
  return (
    <div className=" bg-slate-900 rounded-xl flex flex-col justify-center items-center gap-10 absolute p-5 top-[100px] shadow-xl shadow-gray-400 right-2">
      <div className=" absolute right-0 top-0 m-1 mb-20 mr-2 mt">
        <IoClose
          color="white"
          className="flex justify-end"
          size={22}
          onClick={() => setShowName(!showName)}
        />
      </div>
      <h1 className=" text-gray-200"> {userName}</h1>
      <div className=" flex justify-between flex-col items-center">
        <div className="  text-red-500 font-bold rounded-lg px-3 p-1">
          Edit User Name
        </div>
        <div className=" flex justify-end">
          <input
            type="text"
            className=" border-solid border-2 mr-2 p-2  rounded-lg"
            placeholder="Enter the user name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileProfile
