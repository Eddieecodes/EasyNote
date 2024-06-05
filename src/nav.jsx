import icon from "./images/icon.png";
const NavBar = () => {
  return (
    <>
      <div className="flex flex-row">
        <h2 className="text-xl font-bold">EasyNote</h2>
        <img src={icon} alt="icon" className="w-4 h-4 mt-2" />
      </div>
    </>
  );
};

export default NavBar;
