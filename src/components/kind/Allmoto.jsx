import all from "../all"
const Allmoto = () => {
  return (
    <div className="grid grid-cols-4 gap-5 mt-[50px] px-[50px]">
      {all.map(({ image, text, id }) => {
        return (
          <div
            key={id}
            className="group border border-[green] rounded-lg overflow-hidden cursor-pointer"
          >
            <img
              src={image}
              alt="moto"
              className="w-[300px] group-hover:scale-[1.1] duration-300 ease-in"
            />
            <h4 className="text-center font-bold text-2xl p-5 text-maincolor font-secondfont">
              {text}
            </h4>
          </div>
        );
      })}
    </div>
  )
}

export default Allmoto