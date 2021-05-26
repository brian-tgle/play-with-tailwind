const Widget: React.FC = () => {
  return (
    <div className="w-3/12 bg-white pt-4 px-4">
      <div className="text-2xl font-bold">Suggested</div>
      <div className="grid grid-cols-1">
        <div className="relative z-10 col-start-1 row-start-1 px-4 pt-40 pb-3 bg-gradient-to-t from-black sm:bg-none">
          <p className="text-sm font-medium text-white sm:mb-1 sm:text-gray-500">Entire house</p>
          <h2 className="text-xl font-semibold text-white sm:text-2xl sm:leading-7 sm:text-black md:text-3xl">Beach House in Collingwood</h2>
        </div>
        <div className="col-start-1 row-start-2 px-4 sm:pb-16">
          <div className="flex items-center text-sm font-medium my-5 sm:mt-2 sm:mb-4">
            <div>Collingwood, Ontario</div>
          </div>
          <hr className="w-16 border-gray-300 hidden sm:block" />
        </div>
        <div className="col-start-1 row-start-1 flex sm:col-start-2 sm:row-span-3">
          <div className="w-full grid grid-cols-3 grid-rows-2 gap-2">
            <div className="relative col-span-3 row-span-2 md:col-span-2">
              <img src="https://tailwindcss.com/_next/static/media/beach-house.dc0f86781422bcb8f89e64d49cd7adf6.jpg" alt="" className="absolute inset-0 w-full h-full object-cover bg-gray-100 sm:rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widget;
