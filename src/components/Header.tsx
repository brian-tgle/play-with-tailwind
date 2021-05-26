const Header: React.FC = () => {
  return (
    <div className="bg-white py-4 px-4 shadow-md relative z-50">
      <div className="w-3/12 inline-block space-x-4">
        <div className="inline-block text-blue-500 font-bold">Fakebook</div>
        <div className="inline-block">
          <input className="rounded-full w-72 py-3 px-6 bg-gray-200 focus:outline-none placeholder-gray-500" placeholder="Search Facebook" type="text" />
        </div>
      </div>
      <div className="w-6/12 inline-grid grid-cols-6 justify-items-center space-x-4">
        <div>Icon</div>
        <div>Icon</div>
        <div>
        <img className="w-10 h-10 rounded-full mx-auto" src="https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg" alt="" />
        </div>
        <div>Icon</div>
        <div>Icon</div>
      </div>
      <div className="w-3/12 inline-block">
        <div className="inline-block rounded-full bg-gray-200 h-10 w-10">Icon</div>
        <div className="inline-block rounded-full bg-gray-200 h-10 w-10">Icon</div>
        <div className="inline-block rounded-full bg-gray-200 h-10 w-10">Icon</div>
      </div>
    </div>
  );
};

export default Header;
