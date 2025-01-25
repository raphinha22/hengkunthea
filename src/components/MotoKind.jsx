import { useState } from "react";
import Dream from "./kind/Dream";
import Scoopy from "./kind/Scoopy";
import ADV from "./kind/ADV";
import Wave from "./kind/Wave";
import Allmoto from "./kind/Allmoto";
import Beat from "./kind/Beat";
import Click from "./kind/Click";
import ImageSlider, { Slide } from "react-auto-image-slider";
import img from "../assets/action/photo_2025-01-11_10-12-17.jpg";
import img1 from "../assets/action/photo_2025-01-15_14-51-00.jpg";
import poster1 from "../assets/poster/poster1.png";
import poster2 from "../assets/poster/poster2.png";
import poster3 from "../assets/poster/poster3.png";
import poster4 from "../assets/poster/poster4.png";

const Moto = () => {
  const kind = [
    { id: 1, name: "ALL" },
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
      <div className="w-[100%] h-[600px] overflow-hidden m-auto md:block hidden">
        <ImageSlider effectDelay={1000} autoPlayDelay={1000}>
          <Slide>
            <img src={img} alt="image" className="object-cover" />
          </Slide>
          <Slide>
            <img src={img1} alt="image" className="object-cover" />
          </Slide>
        </ImageSlider>
      </div>

      <div className="w-[100%] h-[450px] overflow-hidden m-auto md:hidden block z-[-99]">
        <ImageSlider effectDelay={1000} autoPlayDelay={3000}>
          <Slide>
            <img
              src={poster1}
              alt="image"
              className="object-contain mt-[-175px]"
            />
          </Slide>
          <Slide>
            <img
              src={poster2}
              alt="image"
              className="object-contain mt-[-175px]"
            />
          </Slide>
          <Slide>
            <img
              src={poster3}
              alt="image"
              className="object-contain mt-[-175px]"
            />
          </Slide>
          <Slide>
            <img
              src={poster4}
              alt="image"
              className="object-contain mt-[-175px]"
            />
          </Slide>
        </ImageSlider>
      </div>

      <div className="grid md:grid-cols-7 place-items-center grid-cols-4 pt-[20px] px-[50px] md:mt-[100px] mt-[-30px] gap-[10px] z-[2]">
        {kind.map(({ name, id }) => (
          <div
            onClick={() => handleClick(name)}
            key={id}
            className="border-2 border-[#4c62bb] p-[10px] md:w-[150px] w-[60px] rounded-xl cursor-pointer hover:bg-[gold] hover:border-none duration-300 ease-in-out group"
          >
            <h4 className="group-hover:text-white duration-300 ease-in-out text-center font-serif text-maincolor md:text-[18px] text-[10px]">
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
