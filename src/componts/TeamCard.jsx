export default function TeamCard({ name, role, description }) {
  return (
    <div className="
      bg-white
      border border-[#191A23]
      shadow-[0px_5px_0px_#191A23]
      rounded-[30px] lg:rounded-[45px]
      p-6 lg:p-[40px]
      flex flex-col gap-6
    ">

      {/* Top Section */}
      <div className="flex justify-between items-start">

        <div className="flex gap-4">

          {/* Avatar */}
          <div className="
            w-[70px] h-[70px]
            lg:w-[100px] lg:h-[100px]
            bg-[#B9FF66]
            rounded-full
          " />

          <div>
            <h4 className="text-[18px] lg:text-[20px] font-medium">
              {name}
            </h4>
            <p className="text-[16px] lg:text-[18px]">
              {role}
            </p>
          </div>

        </div>

        {/* LinkedIn icon */}
        <div className="
          w-8 h-8
          lg:w-[34px] lg:h-[34px]
          bg-black
          rounded-full
          flex items-center justify-center
          text-[#B9FF66]
          text-sm
        ">
          in
        </div>

      </div>

      <div className="border-t border-black pt-4">
        <p className="text-[16px] lg:text-[18px] leading-[23px]">
          {description}
        </p>
      </div>

    </div>
  );
}
