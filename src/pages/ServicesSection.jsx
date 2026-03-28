import Arrow from "../assets/icons/Arrow";
import react from "../assets/react.svg";
import socialmedia from "../assets/socialmedia.svg";
import { useNavigate } from "react-router-dom";

export default function ServicesSection() {
  const navigate = useNavigate();

  const services = [
    {
      title: ["Personal", "Branding"],
      slug: "personal-branding",
      description: "Build a powerful identity that resonates with your audience.",
      bg: "bg-[#F3F3F3]",
      text: "text-black",
      image: react,
      labelBg: "bg-[#B9FF66]",
    },
    {
      title: ["Authority", "Videos"],
      slug: "authority-videos",
      description: "Position yourself as an expert.",
      bg: "bg-[#B9FF66]",
      text: "text-black",
      image: react,
      labelBg: "bg-white",
    },
    {
      title: ["Podcast", "Production"],
      slug: "podcast-production",
      description: "From recording to final master.",
      bg: "bg-[#191A23]",
      text: "text-white",
      image: react,
      labelBg: "bg-[#B9FF66]",
    },
    {
      title: ["Video", "Editing"],
      slug: "video-editing",
      description: "Professional post-production.",
      bg: "bg-[#F3F3F3]",
      text: "text-black",
      image: react,
      labelBg: "bg-[#B9FF66]",
    },
    {
      title: ["Social Media", "Management"],
      slug: "social-media-management",
      description: "Grow your community without the stress.",
      bg: "bg-[#B9FF66]",
      text: "text-black",
      image: socialmedia,
      labelBg: "bg-white",
    },
    {
      title: ["Digital", "Marketing"],
      slug: "digital-marketing",
      description: "Data-driven strategies to increase your reach.",
      bg: "bg-[#191A23]",
      text: "text-white",
      image: react,
      labelBg: "bg-[#B9FF66]",
    },
  ];

  return (
    <section id="services" className="py-10 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-12">
      {/* ================= HEADING ================= */}
      <div className="max-w-[1240px] mx-auto mb-10 md:mb-20">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
          <div className="bg-[#B9FF66] px-4 rounded-[7px] inline-block">
            <h2 className="text-3xl md:text-4xl font-medium leading-tight">
              Services
            </h2>
          </div>
          <p className="text-base md:text-lg max-w-xl">
            We help individuals and businesses in Kanyakumari build powerful
            personal brands through content, video, and digital marketing.
          </p>
        </div>
      </div>

      {/* ================= CARDS GRID ================= */}
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`
                ${service.bg} ${service.text}
                border border-black shadow-[0px_5px_0px_#000]
                rounded-[30px] md:rounded-[45px]
                p-6 sm:p-10
                flex flex-col-reverse sm:flex-row
                justify-between items-center sm:items-stretch
                gap-6 md:h-[310px]
                transition-transform hover:scale-[1.01]
              `}
            >
              {/* LEFT CONTENT */}
              <div className="flex flex-col justify-between items-center sm:items-start w-full sm:w-auto">
                <div className="flex flex-col gap-2 items-center sm:items-start">
                  {service.title.map((line, i) => (
                    <div
                      key={i}
                      className={`${service.labelBg} px-2 md:px-3 rounded-[7px] w-fit`}
                    >
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium text-black">
                        {line}
                      </h3>
                    </div>
                  ))}
                </div>

                {/* Learn More Link */}
                <button
                  onClick={() => navigate(`/services-details/${service.slug}`)}
                  className="flex items-center gap-3 mt-8 group cursor-pointer"
                >
                  <div
                    className={`
                      w-10 h-10 rounded-full
                      flex items-center justify-center
                      transition-colors
                      ${service.bg === "bg-[#191A23]" ? "bg-white" : "bg-black"}
                    `}
                  >
                    <Arrow color={service.bg === "bg-[#191A23]" ? "#000" : "#B9FF66"} />
                  </div>
                  <span className={`text-lg font-semibold ${service.text === "text-white" ? "text-white" : "text-black"}`}>
                    Learn more
                  </span>
                </button>
              </div>

              {/* IMAGE */}
              <div className="flex justify-center items-center">
                <img
                  src={service.image}
                  alt={service.slug}
                  className="w-[120px] sm:w-[160px] lg:w-[210px] object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}