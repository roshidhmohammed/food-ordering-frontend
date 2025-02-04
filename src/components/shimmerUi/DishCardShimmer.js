const DishCardShimmer = () => {
  const countOfcard = [1, 2, 3];
  return (
    <>
      {countOfcard?.map((item) => (
        <div class="md:mx-10  rounded-md border mb-3  p-4" key={item}>
          <div class="flex animate-pulse space-x-4">
            <div class="flex-1 space-y-6 py-1">
              <div class="shimmer-ui-text-3"></div>
              <div class=" h-2 rounded w-20 bg-gray-200"></div>
              <div class="shimmer-ui-text-3"></div>
            </div>
            <div class="size-20 rounded-lg bg-gray-200"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default DishCardShimmer;
