import { NavLink } from "react-router-dom";
import logo from "../assets/image/LOGO HKT RED.png";

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: "/",
      title: "ទំព័រដើម",
    },
    {
      id: 2,
      path: "kind",
      title: "ប្រភេទម៉ូតូ",
    },
    {
      id: 3,
      path: "action",
      title: "រូបសកម្មភាព",
    },
    {
      id: 4,
      path: "ourteam",
      title: "ក្រុមការងារ",
    },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-[99]">
      <nav className="flex items-center justify-between px-[50px] h-[100px] bg-[#4c62bb]">
        <img src={logo} alt="" className="w-[80px]" />
        <ul className="flex items-center space-x-10">
          {links.map(({ id, path, title }) => {
            return (
              <NavLink
                key={id}
                to={path} 
                className="font-mainfont font-semibold text-white"
              >{title}</NavLink>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
