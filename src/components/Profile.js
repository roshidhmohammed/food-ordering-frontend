import InputBox from "./reusableUi/InputBox";

const Profile = (props) => {
  const { userName, setUserName } = props;

  const updateInputBox = (e) => {
    setUserName(e);
  };
  return (
    <div className=" bg-slate-900 rounded-xl flex flex-col justify-center items-center gap-10 absolute p-5 top-[100px] shadow-xl shadow-gray-400 right-2">
      <h1 className=" text-gray-200"> {userName}</h1>
      <div className=" flex justify-between flex-col items-center">
        <div className="  text-red-500 font-bold rounded-lg px-3 p-1">
          Edit User Name
        </div>
        <div className=" flex justify-end">
          <InputBox
            dataTestId="inputName"
            inputValue={userName}
            updateInputBox={updateInputBox}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
