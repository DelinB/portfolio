import TeamCard from "../componts/TeamCard";

export default function TeamSection() {
const person = {
  name: "Johny Babish",
  role: "Proprietor & Founder",
  description:
    "Johny Babish is the founder and creative lead behind our personal branding and digital marketing services. With a strong focus on authority-building content, podcasts, and video marketing, he helps individuals and businesses in Kanyakumari build trust, visibility, and long-term brand value.",
};

  return (
<section className="
py-6 sm:py-8 md:py-10 lg:py-12 xl:py-[50px]
px-2 sm:px-3 md:px-5 lg:px-[50px]
">      {/* ================= HEADING ================= */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[100px]">
        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-[40px] mb-12">
          <div className="bg-[#B9FF66] px-4 rounded-[7px]">
            <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] leading-[51px] font-medium">
              Proprietor
            </h2>
          </div>

          <p className="text-[16px] sm:text-[18px] max-w-xl">
            Meet the founder behind our successful digital marketing strategies.
          </p>
        </div>
      </div>

      {/* ================= SINGLE CARD ================= */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[100px] flex justify-center">
        <TeamCard
          name={person.name}
          role={person.role}
          description={person.description}
        />
      </div>
    </section>
  );
}