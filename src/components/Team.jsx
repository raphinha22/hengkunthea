import poster1 from "../assets/poster/poster1.png";
import poster2 from "../assets/poster/poster2.png";
import ImageSlider, { Slide } from "react-auto-image-slider";
import img from "../assets/action/photo_2025-01-11_10-12-17.jpg";
import img1 from "../assets/action/photo_2025-01-15_14-51-00.jpg";
import profile from "../assets/profile/image.png";
const Team = () => {
  return (
    <div className="mt-[100px]">
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
        <ImageSlider effectDelay={1000} autoPlayDelay={2000}>
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
        </ImageSlider>
      </div>

      <div className="p-[50px]">
        <div className="group border-2 border-[#4c62bb] w-[200px] h-[200px] flex justify-center items-center rounded-[50%] duration-[.3s] hover:rounded-[20px]">
          <img
            src={profile}
            alt="profile"
            className="w-[150px] h-[150px] object-cover absolute rounded-[50%] duration-300 group-hover:rounded-[20px] group-hover:mt-[-100px]"
          />
          <h3 className="duration-300 group-hover:mt-[100px] font-sans text-xl font-semibold text-[#4c62bb]">
            Heang
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Team;
