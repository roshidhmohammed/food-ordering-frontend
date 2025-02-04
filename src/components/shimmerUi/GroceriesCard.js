const GroceriesCard = () => {
  const countOfcard = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="pt-40 pb-20 mx-20 grid sm:justify-start justify-center  grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-10 mt-5 my-10">
      {countOfcard?.map((item) => (
        <div className=" animate-pulse" key={item}>
          <div className=" flex flex-col gap-3">
            <div className=" h-40 w-full rounded-lg bg-gray-200"></div>
            <div class="shimmer-ui-text-4"></div>
            <div class="shimmer-ui-text-4"></div>
            <div class="grid grid-cols-3 gap-4">
              <div class="col-span-2 h-2   rounded bg-gray-200"></div>
              <div class="col-span-1 h-2 rounded bg-gray-200"></div>
            </div>
            <div class="shimmer-ui-text-5"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GroceriesCard;
