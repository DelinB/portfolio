export default function TestimonialCard({ text, author, role }) {
  return (
    <div className="flex flex-col gap-6">

      {/* Speech Bubble */}
      <div className="relative">

        <div className="
          bg-[#21241D]
          border-2 border-white
          rounded-[30px] lg:rounded-[45px]
          p-6 lg:p-[40px]
          text-white
        ">
          <p className="text-[16px] lg:text-[18px] leading-[23px]">
            "{text}"
          </p>
        </div>

        {/* Bubble Tail */}
        <div className="
          absolute
          left-8
          -bottom-4
          w-6 h-6
          bg-[#21241D]
          border-l-2 border-b-2 border-white
          rotate-45
        "></div>

      </div>

      {/* Author */}
      <div>
        <p className="text-[18px] lg:text-[20px] font-medium text-[#B9FF66]">
          {author}
        </p>
        <p className="text-white text-[16px] lg:text-[18px]">
          {role}
        </p>
      </div>

    </div>
  );
}
