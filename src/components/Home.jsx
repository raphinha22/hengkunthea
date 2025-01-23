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

      <div className="flex flex-col items-center justify-center h-[100vh]">
        <h1 className="font-mainfont text-2xl font-semibold text-maincolor">
          ហាងម៉ូតូ ហេង គន្ធា
        </h1>
        <div className="px-[50px] mt-[50px] flex gap-[100px] justify-center items-center">
          <div className="">
            <img
              src={images}
              alt="image"
              className="w-[450px] h-[500px] object-cover object-top rounded-md"
            />
          </div>
          <div className="flex flex-col gap-[20px]">
            <h1 className="font-mainfont font-bold text-2xl text-maincolor">
              អំពីហាងម៉ូតូ <span className="text-red-500">ហេង គន្ធា</span>
            </h1>
            <li className="font-mainfont text-maincolor font-semibold text-xl">
              បង់រំលស់សុទ្ធ 100%
            </li>
            <li className="font-mainfont text-maincolor font-semibold text-xl">
              មិនត្រូវការលុយកក់មុន
            </li>
            <li className="font-mainfont text-maincolor font-semibold text-xl">
              ឯកសារងាយស្រួល{" "}
              <span className="text-[15px]">
                ( អត្តសញ្ញាណប័ណ្ណ និង សៀវភៅគ្រួសារ )
              </span>
            </li>
            <li className="font-mainfont text-maincolor font-semibold text-xl">
              អត្រាការប្រាក់ទាប ត្រឹមតែ 1.2%
            </li>
            <li className="font-mainfont text-maincolor font-semibold text-xl">
              បង់រំលស់បានគ្រប់ប្រភេទម៉ូតូទាំងអស់
            </li>
            <li className="font-mainfont text-maincolor font-semibold text-xl">
              អាចធ្វើការបង់ផ្តាច់ចាប់ពី 6 ខែឡើងទៅ
            </li>
            <li className="font-mainfont text-maincolor font-semibold text-xl">
              អតិថិជនអាចរើសយករយៈពេលបង់រំលស់បាន
            </li>
            <li className="font-mainfont text-maincolor font-semibold text-xl">
              បង់ត្រឹមតែ 50$ 60$ 70$ 80$ ក្នុងមួយខែទៅតាមចំនួនឆ្នាំដែលបងប្អូនរើស
            </li>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center h-[100vh]">
        <h1 className="mb-[40px] font-mainfont text-2xl font-semibold text-maincolor">
          អំពីការប្រមូលសិន
        </h1>
        <div className="px-[50px] flex gap-[100px] justify-center items-center">
          <div className="">
            <img
              src={img}
              alt="image"
              className="w-[450px] h-[500px] object-cover object-top rounded-md"
            />
          </div>
          <div className="flex flex-col gap-[20px]">
            <h1 className="font-mainfont font-bold text-2xl text-maincolor">
              មានប្រមូលសិនជា <span className="text-red-500">ពិសេស</span>
            </h1>
            <li className="font-mainfont text-maincolor font-semibold text-xl">
              ថែមជាមួយ <span className="text-red-500">ទូរស័ព្ទដៃ</span>{" "}
              ចំនួនមួយគ្រឿង
            </li>
            <li className="font-mainfont text-maincolor font-semibold text-xl">
              ថែមជាមួយទឹកប្រាក់ចំនួន <span className="text-red-500">100$</span>
            </li>
            <li className="font-mainfont text-maincolor font-semibold text-xl">
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
