// import React, { useState } from "react";
// import Illustration from "../assets/illustration.png"; 

// export default function ContactBlock() {
//   const [formData, setFormData] = useState({
//     type: "Say Hi",
//     name: "",
//     email: "",
//     message: ""
//   });

//   // Handles all input changes in one function
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Formatting the message for WhatsApp (using * for bold)
//     const whatsappMessage = 
//       `*📩 NEW WEBSITE INQUIRY*%0A%0A` +
//       `*Type:* ${formData.type}%0A` +
//       `*Name:* ${formData.name}%0A` +
//       `*Email:* ${formData.email}%0A` +
//       `*Message:* ${formData.message}`;

//     const phoneNumber = "917200240311"; 

//     window.open(
//       `https://wa.me/${phoneNumber}?text=${whatsappMessage}`,
//       "_blank"
//     );

//     // Optional: Reset form after sending
//     setFormData({ type: "Say Hi", name: "", email: "", message: "" });
//   };

//   return (
//     <section className=" 
// py-6 sm:py-8 md:py-10 lg:py-12 xl:py-[50px]

// ">
//       <div className="max-w-[1440px]  px-6 lg:px-[100px]
//  mx-auto">
//         <div className="relative bg-[#F3F3F3] rounded-[30px] lg:rounded-[45px] border-2 border-black p-8 lg:p-[60px] overflow-hidden shadow-[8px_8px_0px_#000]">
          
//           <div className="flex flex-col lg:flex-row gap-12 relative min-h-[500px]">

//             {/* FORM SIDE */}
//             <form onSubmit={handleSubmit} className="w-full lg:w-[55%] z-10 flex flex-col gap-6">
              
//               {/* Radio Toggles */}
//               <div className="flex gap-8 mb-4">
//                 {["Say Hi", "Get a Quote"].map((option) => (
//                   <label key={option} className="flex items-center gap-3 cursor-pointer group">
//                     <input
//                       type="radio"
//                       name="type"
//                       value={option}
//                       checked={formData.type === option}
//                       onChange={handleChange}
//                       className="w-5 h-5 accent-black"
//                     />
//                     <span className="text-lg font-medium">{option}</span>
//                   </label>
//                 ))}
//               </div>

//               {/* Name Input */}
//               <div className="flex flex-col gap-2">
//                 <label className="font-bold text-sm uppercase">Name</label>
//                 <input
//                   required
//                   name="name"
//                   type="text"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Enter your name"
//                   className="w-full border-2 border-black rounded-[15px] px-6 py-4 bg-white focus:bg-[#B9FF66] outline-none transition-colors shadow-[4px_4px_0px_#000]"
//                 />
//               </div>

//               {/* Email Input */}
//               <div className="flex flex-col gap-2">
//                 <label className="font-bold text-sm uppercase">Email*</label>
//                 <input
//                   required
//                   name="email"
//                   type="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Email Address"
//                   className="w-full border-2 border-black rounded-[15px] px-6 py-4 bg-white focus:bg-[#B9FF66] outline-none transition-colors shadow-[4px_4px_0px_#000]"
//                 />
//               </div>

//               {/* Message Input */}
//               <div className="flex flex-col gap-2">
//                 <label className="font-bold text-sm uppercase">Message*</label>
//                 <textarea
//                   required
//                   name="message"
//                   rows="5"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="How can we help?"
//                   className="w-full border-2 border-black rounded-[15px] px-6 py-4 bg-white focus:bg-[#B9FF66] outline-none transition-colors shadow-[4px_4px_0px_#000] resize-none"
//                 />
//               </div>

//               {/* Submit */}
//               <button
//                 type="submit"
//                 className="w-full bg-[#191A23] text-white font-bold py-5 rounded-[15px] text-xl hover:bg-black active:translate-y-1 active:shadow-none transition-all shadow-[0px_5px_0px_#B9FF66]"
//               >
//                 Send via WhatsApp
//               </button>
//             </form>

//             {/* ILLUSTRATION SIDE */}
//             <div className="hidden lg:flex flex-1 items-center justify-end">
//               <img
//                 src={Illustration}
//                 alt="Contact Illustration"
//                 className="max-w-[450px] object-contain"
//               />
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useState } from "react";
import Illustration from "../assets/illustration.png"; 

export default function ContactBlock() {
  const [formData, setFormData] = useState({
    type: "Say Hi",
    name: "",
    email: "",
    message: ""
  });

  // Handles all input changes in one function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Formatting the message for WhatsApp (using * for bold)
    const whatsappMessage = 
      `*📩 NEW WEBSITE INQUIRY*%0A%0A` +
      `*Type:* ${formData.type}%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Message:* ${formData.message}`;

    const phoneNumber = "917200240311"; 

    window.open(
      `https://wa.me/${phoneNumber}?text=${whatsappMessage}`,
      "_blank"
    );

    // Optional: Reset form after sending
    setFormData({ type: "Say Hi", name: "", email: "", message: "" });
  };

  return (
    <section className=" 
py-6 sm:py-8 md:py-10 lg:py-12 xl:py-[50px]

">
         <div  className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">

   <div className="
      relative
      bg-white/20
      backdrop-blur-xl
      border border-white/30
      shadow-[0_8px_32px_rgba(0,0,0,0.15)]
      rounded-[30px] lg:rounded-[45px]
      p-8 lg:p-[60px]
      overflow-hidden
    ">          
          <div className="flex flex-col lg:flex-row gap-12 relative min-h-[500px]">

            {/* FORM SIDE */}
            <form onSubmit={handleSubmit} className="w-full ] z-10 flex flex-col gap-6">
              
              {/* Radio Toggles */}
              <div className="flex gap-8 mb-4">
                {["Say Hi", "Work With Me"].map((option) => (
                  <label key={option} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="type"
                      value={option}
                      checked={formData.type === option}
                      onChange={handleChange}
                      className="w-5 h-5 accent-[#0000001A]"
                    />
                    <span className="text-lg font-medium">{option}</span>
                  </label>
                ))}
              </div>

              {/* Name Input */}
              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm uppercase">Name</label>
                <input
                  required
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
className="
w-full
border-2 border-[rgba(0,0,0,0.1)]
rounded-[15px]
px-6 py-4
bg-[rgba(255,255,255,0.75)]
outline-none
transition-colors
focus:bg-[#B9FF66]
shadow-[4px_4px_0px_rgba(0,0,0,0.1)]
"                />
              </div>

              {/* Email Input */}
              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm uppercase">Email*</label>
                <input
                  required
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full border-2 border-[#0000001A] rounded-[15px] px-6 py-4 bg-white focus:bg-[#B9FF66] outline-none transition-colors shadow-[4px_4px_0px_rgba(0,0,0,0.1)]
"
                />
              </div>

              {/* Message Input */}
              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm uppercase">Message*</label>
                <textarea
                  required
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className="w-full border-2 border-[#0000001A] rounded-[15px] px-6 py-4 bg-white focus:bg-[#B9FF66] outline-none transition-colors shadow-[4px_4px_0px_rgba(0,0,0,0.1)]"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"

                  className="w-full border-2 border-[#0000001A] text-xl font-bold rounded-[15px] px-6 py-4 bg-[#00 00001A] focus:bg-[#B9FF66] outline-none transition-colors hover:shadow-[4px_4px_0px_rgba(0,0,0,0.1)]"
              >
                Send via WhatsApp
              </button>
            </form>

            {/* ILLUSTRATION SIDE */}
            {/* <div className="hidden lg:flex flex-1 items-center justify-end">
              <img
                src={Illustration}
                alt="Contact Illustration"
                className="max-w-[450px] object-contain"
              />
            </div> */}

          </div>
        </div>
      </div>
    </section>
  );
}