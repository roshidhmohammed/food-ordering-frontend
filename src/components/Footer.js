const Footer = () =>{
    return (
        <div className=" bottom-0 bg-black text-gray-50 font-roboto py-5 sm:px-10 flex justify-between sm:flex-row sm:gap-0 gap-3 items-center flex-col">
            <div className=" flex flex-col sm:justify-start justify-center sm:items-start items-center">
                <h1 className=" font-bold text-2xl tracking-wide text-[#FC4100]"> Hunger Wave</h1>
                <h1 className=" text-gray-400 font-bold">let's order your favourite one</h1>
            </div>
            <div className=" flex flex-col sm:justify-start justify-center sm:items-start items-center">
                <h1 className=" font-bold text-gray-400 sm:text-md text-sm tracking-wide">Copyright By</h1>
                <h1 className=" text-gray-400 font-bold sm:text-md text-sm ">Mohammed Roshidh S</h1>
            </div>
        </div>
    )
}

export default Footer