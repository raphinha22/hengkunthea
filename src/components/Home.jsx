import slide from "../assets/image/image.jpg";
import img from "../assets/home/images.png";
import images from "../assets/home/image.png";

const Home = () => {
  return (
    <div className="mt-[100px]">
      <div>
        <img
          src={slide}
          alt="imgaes"
          className="h-[430px] w-[100%] object-cover object-top"
        />
      </div>

      <div className="flex flex-col items-center justify-center h-[100vh] md:gap-[0px] gap-[20px] lg:relative top-[-120px]">
        <h1 className="font-mainfont lg:text-2xl font-semibold text-maincolor md:text-xl md:mt-[150px]">
          ហាងម៉ូតូ ហេង គន្ធា
        </h1>
        <div className="lg:px-[50px] lg:mt-[50px] lg:flex lg:flex-row lg:gap-[100px] justify-center items-center md:flex md:flex-col md:mt-[50px] 
        flex flex-col
        ">
          <div className="">
            <img
              src={images}
              alt="image"
              className="lg:w-[450px] lg:h-[500px] object-cover object-top rounded-md md:w-[300px] md:h-[350px] w-[250px] h-[300px]"
            />
          </div>
          <div className="flex flex-col gap-[20px]">
            <h1 className="font-mainfont font-bold lg:text-2xl text-maincolor md:text-xl md:text-center md:mt-[40px] text-center mt-[30px]">
              អំពីហាងម៉ូតូ <span className="text-red-500">ហេង គន្ធា</span>
            </h1>
            <li className="font-mainfont text-maincolor font-semibold lg:text-xl md:text-[18px] text-[12px]">
              បង់រំលស់សុទ្ធ 100%
            </li>
            <li className="font-mainfont text-maincolor font-semibold lg:text-xl md:text-[18px] text-[12px]">
              មិនត្រូវការលុយកក់មុន
            </li>
            <li className="font-mainfont text-maincolor font-semibold lg:text-xl md:text-[18px] text-[12px]">
              ឯកសារងាយស្រួល{" "}
              <span className="md:text-[15px] text-[11px]">
                (អត្តសញ្ញាណប័ណ្ណ និង សៀវភៅគ្រួសារ)
              </span>
            </li>
            <li className="font-mainfont text-maincolor font-semibold lg:text-xl md:text-[18px] text-[12px]">
              អត្រាការប្រាក់ទាប ត្រឹមតែ 1.2%
            </li>
            <li className="font-mainfont text-maincolor font-semibold lg:text-xl md:text-[18px] text-[12px]">
              បង់រំលស់បានគ្រប់ប្រភេទម៉ូតូទាំងអស់
            </li>
            <li className="font-mainfont text-maincolor font-semibold lg:text-xl md:text-[18px] text-[12px]">
              អាចធ្វើការបង់ផ្តាច់ចាប់ពី 6 ខែឡើងទៅ
            </li>
            <li className="font-mainfont text-maincolor font-semibold lg:text-xl md:text-[18px] text-[12px]">
              អតិថិជនអាចរើសយករយៈពេលបង់រំលស់បាន
            </li>
            <li className="font-mainfont text-maincolor font-semibold lg:text-xl md:text-[18px] text-[12px]">
              សន្សំត្រឹមតែ 8000រៀល ក្នុងមួយថ្ងៃក៏អាចរំលស់បាន
            </li>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center h-[100vh] md:mt-[150px] lg:mt-[0px] md:gap-10">
        <h1 className="lg:mb-[40px] font-mainfont lg:text-2xl font-semibold text-maincolor md:text-xl">
          អំពីការប្រមូលសិន
        </h1>
        <div className="px-[50px] flex lg:flex-row lg:gap-[100px] md:gap-[50px] justify-center items-center md:flex-col">
          <div className="">
            <img
              src={img}
              alt="image"
              className="lg:w-[450px] lg:h-[500px] md:w-[350px] md:h-[400px] object-cover object-top rounded-md"
            />
          </div>
          <div className="flex flex-col gap-[20px]">
            <h1 className="font-mainfont font-bold lg:text-2xl md:text-xl text-maincolor">
              មានប្រមូលសិនជា <span className="text-red-500">ពិសេស</span>
            </h1>
            <li className="font-mainfont text-maincolor font-semibold lg:text-xl md:text-[18px]">
              ថែមជាមួយ <span className="text-red-500">ទូរស័ព្ទដៃ</span>{" "}
              ចំនួនមួយគ្រឿង
            </li>
            <li className="font-mainfont text-maincolor font-semibold lg:text-xl md:text-[18px]">
              ថែមជាមួយទឹកប្រាក់ចំនួន <span className="text-red-500">100$</span>
            </li>
            <li className="font-mainfont text-maincolor font-semibold lg:text-xl md:text-[18px]">
              ថែមជាមួយកាដូចំនួន<span className="text-red-500"> 18 មុខ </span>
              ផ្សេងទៀត
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
