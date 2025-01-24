import moto from "../beat";

const Beat = () => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-2 gap-[10px] md:px-[50px] px-[20px]">
      {moto.map(({ image, text, id }) => {
        return (
          <div
            key={id}
            className="group border bg-white border-[green] rounded-lg overflow-hidden cursor-pointer z-[99]"
          >
            <img
              src={image}
              alt="moto"
              className="w-[300px] group-hover:scale-[1.1] duration-300 ease-in"
            />
            <h4 className="text-center font-bold md:text-2xl text-xl p-5 text-maincolor font-secondfont">
              {text}
            </h4>
          </div>
        );
      })}
    </div>
  );
};

export default Beat;
