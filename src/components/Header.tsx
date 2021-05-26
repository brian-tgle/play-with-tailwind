const Header: React.FC = () => {
  return (
    <div className="bg-white py-4 px-4 shadow-md relative z-50">
      <div className="w-3/12 inline-block space-x-4">
        <div className="inline-block text-blue-500 font-bold">Facebook</div>
        <div className="inline-block">
          <input className="rounded-full w-72 py-3 px-6 bg-gray-200 focus:outline-none placeholder-gray-500" placeholder="Search Facebook" type="text" />
        </div>
      </div>
      <div className="w-6/12 inline-block inline-grid grid-cols-6 justify-items-center space-x-4">
        <div>Icon</div>
        <div>Icon</div>
        <div>Icon</div>
        <div>Icon</div>
        <div>Icon</div>
        <div>Icon</div>
      </div>
      <div className="w-3/12 inline-block">
        <div className="inline-block rounded-full bg-gray-200 h-10 w-10 flex items-center justify-center ">Icon</div>
      </div>
    </div>
  );
};

export default Header;
