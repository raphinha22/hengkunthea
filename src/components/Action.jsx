import pic9 from "../assets/image/image.png";
import imgs from "../assets/home/images.png";
import pic0 from "../assets/action/photo_2025-01-04_14-22-56.jpg";
import pic1 from "../assets/action/photo_2025-01-04_14-22-59.jpg";
import pic2 from "../assets/action/photo_2025-01-11_10-12-17.jpg";
import pic3 from "../assets/action/photo_2025-01-12_13-42-25.jpg";
import pic4 from "../assets/action/photo_2025-01-13_08-31-03.jpg";
import pic5 from "../assets/action/photo_2025-01-15_10-59-34.jpg";
import pic6 from "../assets/action/photo_2025-01-15_12-17-31.jpg";
import pic7 from "../assets/action/photo_2025-01-15_14-48-19.jpg";
import pic8 from "../assets/action/photo_2025-01-15_14-50-47.jpg";
import imgss from "../assets/home/image.png";
import poster1 from "../assets/poster/poster1.png";
import poster2 from "../assets/poster/poster2.png";
import ImageSlider, { Slide } from "react-auto-image-slider";
import img from "../assets/action/photo_2025-01-11_10-12-17.jpg";
import img1 from "../assets/action/photo_2025-01-15_14-51-00.jpg";


const Action = () => {
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
      <h1 className="text-center md:mt-[100px] mt-[20px] md:text-3xl text-xl font-mainfont">កម្រងរូបភាព</h1>

      <div className="mt-[50px] grid md:grid-cols-4 grid-cols-2 gap-2 p-[10px]">
        <div className="overflow-hidden z-[99]"><img src={imgss} alt="images" className="w-[400px] lg:h-[450px] md:h-[350px] sm:h-[300px] h-[250px] object-cover" /></div>
        <div className="overflow-hidden z-[99]"><img src={pic2} alt="images" className="w-[400px] lg:h-[450px] md:h-[350px] sm:h-[300px] h-[250px] object-cover" /></div>
        <div className="overflow-hidden z-[99]"><img src={pic3} alt="images" className="w-[400px] lg:h-[450px] md:h-[350px] sm:h-[300px] h-[250px] object-cover" /></div>
        <div className="overflow-hidden z-[99]"><img src={pic8} alt="images" className="w-[400px] lg:h-[450px] md:h-[350px] sm:h-[300px] h-[250px] object-cover" /></div>
        <div className="overflow-hidden z-[99]"><img src={pic7} alt="images" className="w-[400px] lg:h-[450px] md:h-[350px] sm:h-[300px] h-[250px] object-cover" /></div>
        <div className="overflow-hidden z-[99]"><img src={imgs} alt="images" className="w-[400px] lg:h-[450px] md:h-[350px] sm:h-[300px] h-[250px] object-cover" /></div>
        <div className="overflow-hidden z-[99]"><img src={pic6} alt="images" className="w-[400px] lg:h-[450px] md:h-[350px] sm:h-[300px] h-[250px] object-cover" /></div>
        <div className="overflow-hidden z-[99]"><img src={pic0} alt="images" className="w-[400px] lg:h-[450px] md:h-[350px] sm:h-[300px] h-[250px] object-cover" /></div>
        <div className="overflow-hidden z-[99]"><img src={pic1} alt="images" className="w-[400px] lg:h-[450px] md:h-[350px] sm:h-[300px] h-[250px] object-cover"/></div>
        <div className="overflow-hidden z-[99]"><img src={pic4} alt="images" className="w-[400px] lg:h-[450px] md:h-[350px] sm:h-[300px] h-[250px] object-cover"/></div>
        <div className="overflow-hidden z-[99]"><img src={pic5} alt="images" className="w-[400px] lg:h-[450px] md:h-[350px] sm:h-[300px] h-[250px] object-cover"/></div>
        <div className="overflow-hidden z-[99]"><img src={pic9} alt="images" className="w-[400px] lg:h-[450px] md:h-[350px] sm:h-[300px] h-[250px] object-cover"/></div>
      </div>
    </div>
  );
};

export default Action;
