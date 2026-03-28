import React, { useState, useEffect, useRef } from 'react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // New state for hover pause
  const containerRef = useRef(null);

  const testimonials = [
    {
      text: "Working with this team helped me build a strong personal brand through professional videos and consistent content. The entire process was smooth and well planned.",
      name: "Entrepreneur",
      location: "Kanyakumari",
    },
    {
      text: "The podcast production quality was excellent. From recording to editing and publishing, everything was handled professionally and on time.",
      name: "Business Owner",
      location: "Podcaster",
    },
    {
      text: "Their video content and digital marketing support helped our business reach the right audience on Instagram and YouTube. Highly recommended for growth.",
      name: "Founder",
      location: "Local Business",
    },
  ];

  // 1. AUTO-SLIDE LOGIC (Every 3 Seconds)
  useEffect(() => {
    if (isPaused) return; // Don't slide if user is hovering

    const timer = setInterval(() => {
      nextSlide();
    }, 2500);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [currentIndex, isPaused]); 

  // Update card width on resize
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const width = window.innerWidth < 1024 ? window.innerWidth * 0.85 : 606;
        setCardWidth(width);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const gap = 50;
  const translation = currentIndex * (cardWidth + gap);

  return (
    <section className="py-10 lg:py-20 overflow-hidden font-['Space_Grotesk']">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-[100px]">
        
        {/* Added Mouse Enter/Leave events to pause the slider */}
        <div 
          className="bg-[#191A23] rounded-[30px] lg:rounded-[45px] py-12 lg:py-20 px-4 lg:px-0 relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          <div className="flex flex-col items-center">
            
            {/* ================= SLIDER WINDOW ================= */}
            <div className="w-full overflow-visible lg:overflow-hidden" ref={containerRef}>
              <div 
                className="flex transition-transform duration-700 ease-in-out" // Smoother duration for auto-slide
                style={{ 
                  transform: `translateX(calc(50% - ${cardWidth / 2}px - ${translation}px))`,
                }}
              >
                {testimonials.map((item, index) => (
                  <div
                    key={index}
                    className={`flex flex-col gap-5 transition-all duration-700 ${
                      currentIndex === index ? 'opacity-100 scale-100' : 'opacity-30 scale-95 shadow-none'
                    }`}
                    style={{ 
                      minWidth: `${cardWidth}px`, 
                      marginRight: `${gap}px` 
                    }}
                  >
                    {/* Bubble Wrapper */}
                    <div className="relative p-8 lg:p-12 min-h-[220px] lg:h-[266px] flex items-center">
                      <div className={`absolute inset-0 border rounded-[30px] lg:rounded-[45px] transition-colors duration-500 ${currentIndex === index ? 'border-[#B9FF66]' : 'border-gray-600'}`}></div>
                      
                      <div className={`absolute bottom-[-10px] left-[50px] lg:left-[60px] w-5 h-5 bg-[#191A23] border-r border-b rotate-45 transition-colors duration-500 ${currentIndex === index ? 'border-[#B9FF66]' : 'border-gray-600'}`}></div>

                      <p className="text-white text-sm lg:text-[18px] leading-relaxed lg:leading-[26px] relative z-10">
                        "{item.text}"
                      </p>
                    </div>

                    {/* Name/Info Section */}
                    <div className="ml-10 lg:ml-[70px]">
                       <p className="text-[#B9FF66] text-lg lg:text-[20px] font-medium uppercase tracking-tight">
                        {item.name}
                      </p>
                      <p className="text-white/60 text-sm lg:text-[18px]">
                        {item.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ================= NAVIGATION ================= */}
            <div className="w-full max-w-[564px] flex justify-between items-center mt-12 lg:mt-20 px-4">
              
              <button onClick={prevSlide} className="text-white hover:text-[#B9FF66] p-2 transition-all hover:scale-125">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              {/* DOTS */}
              <div className="flex gap-3 lg:gap-5">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 lg:w-[14px] lg:h-[14px] rotate-45 transition-all duration-500 ${
                      currentIndex === index ? 'bg-[#B9FF66] scale-125' : 'bg-white/20'
                    }`}
                  />
                ))}
              </div>

              <button onClick={nextSlide} className="text-white hover:text-[#B9FF66] p-2 transition-all hover:scale-125">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}