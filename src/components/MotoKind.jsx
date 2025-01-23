import { useState } from "react";
import slide from "../assets/image/image.jpg";
import Dream from "./kind/Dream";
import Scoopy from "./kind/Scoopy";
import ADV from "./kind/ADV";
import Wave from "./kind/Wave";
import Allmoto from "./kind/Allmoto";
import Beat from "./kind/Beat";
import Click from "./kind/Click";

const Moto = () => {
  const kind = [
    { id: 1, name: "ALL"},
    { id: 2, name: "DREAM" },
    { id: 3, name: "ADV" },
    { id: 4, name: "SCOOPY" },
    { id: 5, name: "WAVE" },
    { id: 6, name: "CLICK" },
    { id: 7, name: "BEAT" },
  ];

  const [selectedMoto, setSelectedMoto] = useState(""); // Track the selected motorcycle type

  const handleClick = (name) => {
    setSelectedMoto(name); // Update state with the clicked motorcycle type
  };

  const renderMotoComponent = () => {
    switch (selectedMoto) {
      case "SCOOPY":
        return <Scoopy />;
      case "DREAM":
        return <Dream />;
      case "All":
        return <Allmoto />;
      case "ADV":
        return <ADV />;
      case "WAVE":
        return <Wave />;
      case "CLICK":
        return <Click />;
      case "BEAT":
        return <Beat />;
      default:
        return (
          <h4 className="text-center">
            <Allmoto />
          </h4>
        );
    }
  };

  return (
    <div className="pb-[50px] mt-[100px]">
      <div>
        <img
          src={slide}
          alt="images"
          className="h-[430px] w-[100%] object-cover object-top"
        />
      </div>
      <div className="px-[50px]">
        <h3 className="rounded-lg p-5 font-mainfont text-center mt-[30px] text-maincolor font-semibold text-2xl style">
          ប្រភេទម៉ូតូ
        </h3>
      </div>

      <div className="grid grid-cols-7 place-items-center pt-[20px] px-[120px]">
        {kind.map(({ name, id }) => (
          <div
            onClick={() => handleClick(name)}
            key={id}
            className="border-2 border-[#4c62bb] px-[20px] py-[10px] w-[150px] rounded-xl cursor-pointer hover:bg-[gold] hover:border-none duration-300 ease-in-out group"
          >
            <h4 className="group-hover:text-white duration-300 ease-in-out text-center font-serif text-maincolor text-[18px]">
              {name}
            </h4>
          </div>
        ))}
      </div>

      <div className="pt-[30px]">{renderMotoComponent()}</div>
    </div>
  );
};

export default Moto;
