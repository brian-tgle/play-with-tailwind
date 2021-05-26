import EventImg from '../assets/images/event.png';
const Sidebar: React.FC = () => {
  return (
    <div className="w-3/12 bg-white pt-4 px-4">
      <div className="flex justify-between">
        <div className="text-2xl font-bold">Home</div>
        <div className="text-blue-500">Created</div>
      </div>
      <ul>
        {Array.from(Array(10).keys()).map((item) => (
          <li className="py-2" key={item}>
            <img className="w-8 mx-2 rounded-lg inline-block" src={EventImg} alt="events" /> 
            <span className="font-xl inline-block font-bold">Events {item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
