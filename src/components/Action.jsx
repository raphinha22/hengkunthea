import slide from "../assets/image/image.jpg";
import pic9 from "../assets/image/image.png";
import img from "../assets/home/images.png";
import pic0 from "../assets/action/photo_2025-01-04_14-22-56.jpg";
import pic1 from "../assets/action/photo_2025-01-04_14-22-59.jpg";
import pic2 from "../assets/action/photo_2025-01-11_10-12-17.jpg";
import pic3 from "../assets/action/photo_2025-01-12_13-42-25.jpg";
import pic4 from "../assets/action/photo_2025-01-13_08-31-03.jpg";
import pic5 from "../assets/action/photo_2025-01-15_10-59-34.jpg";
import pic6 from "../assets/action/photo_2025-01-15_12-17-31.jpg";
import pic7 from "../assets/action/photo_2025-01-15_14-48-19.jpg";
import pic8 from "../assets/action/photo_2025-01-15_14-50-47.jpg";
import imgs from "../assets/home/image.png";

const Action = () => {
  return (
    <div className="mt-[100px]">
      <div>
        <img
          src={slide}
          alt="imgaes"
          className="h-[430px] w-[100%] object-cover object-top"
        />
      </div>
      <h1 className="text-center mt-[150px] text-3xl font-mainfont">កម្រងរូបភាព</h1>

      <div className="relative top-[-150px] grid grid-cols-[repeat(7,200px)] grid-rows-[repeat(9,200px)] justify-center gap-2 Action">
        <div className="overflow-hidden"><img src={img} alt="images" className="mt-[-60px]" /></div>
        <div className="overflow-hidden"><img src={pic2} alt="images" /></div>
        <div className="overflow-hidden"><img src={pic3} alt="images" /></div>
        <div className="overflow-hidden"><img src={pic8} alt="images" /></div>
        <div className="overflow-hidden"><img src={pic7} alt="images" /></div>
        <div className="overflow-hidden"><img src={imgs} alt="images" /></div>
        <div className="overflow-hidden"><img src={pic6} alt="images" className="mt-[-100px]" /></div>
        <div className="overflow-hidden"><img src={pic0} alt="images" className="mt-[-100px]" /></div>
        <div className="overflow-hidden"></div>
        <div className="overflow-hidden"><img src={pic1} alt="images" className="mt-[-100px]"/></div>
        <div className="overflow-hidden"><img src={pic4} alt="images" className="mt-[-150px]"/></div>
        <div className="overflow-hidden"><img src={pic5} alt="images" className="mt-[-150px]"/></div>
        <div className="overflow-hidden"><img src={pic9} alt="images" className="mt-[-100px]"/></div>
      </div>
    </div>
  );
};

export default Action;
