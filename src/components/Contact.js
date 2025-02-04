import React from "react";
const Contact = () => {
  return (
    <div className=" text-center my-10 pt-40  h-screen">
      <h1 className=" component-heading">Contact Us</h1>
      <form className=" flex-col flex justify-between items-center gap-5 mt-5 py-12 bg-gray-200  lg:mx-[400px] md:mx-[200px] mx-5 rounded-md ">
        <input
          type="text"
          className=" border-2 p-3 w-2/3 mx-10"
          placeholder="name"
          required
        />
        <input
          type="text"
          className=" border-2 p-3 w-2/3 mx-20"
          placeholder="message"
          required
        />
        <button className=" rounded-md bg-red-600 px-5 py-2 text-gray-100 font-bold">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
