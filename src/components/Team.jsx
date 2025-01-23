import slide from "../assets/image/image.jpg";
import profile from "../assets/profile/image.png";
const Team = () => {
  return (
    <div className="mt-[100px]">
      <div>
        <img
          src={slide}
          alt="imgaes"
          className="h-[430px] w-[100%] object-cover object-top"
        />
      </div>

      <div className="p-[50px]">
        <div className="group border-2 border-[#4c62bb] w-[200px] h-[200px] flex justify-center items-center rounded-[50%] duration-[.3s] hover:rounded-[20px]">
          <img src={profile} alt="profile" className="w-[150px] h-[150px] object-cover absolute rounded-[50%] duration-300 group-hover:rounded-[20px] group-hover:mt-[-100px]" />
          <h3 className="duration-300 group-hover:mt-[100px] font-sans text-xl font-semibold text-[#4c62bb]">Heang</h3>
        </div>
      </div>
    </div>
  );
};

export default Team;
