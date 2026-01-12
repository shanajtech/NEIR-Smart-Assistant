// import React from 'react'

// const Home = () => {
//   return (
//     <div className="bg-[#0F1C2E] min-h-screen">

//       <div className="max-w-[1200px] mx-auto px-4 pt-15 pb-[20px]">

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

//           {/* Left Content */}
//           <div>
//             <p className="text-[#4ED4F3] uppercase tracking-widest mb-3">
//               NEIR Smart System
//             </p>

//             <h1 className="text-white text-[52px] font-bold leading-tight">
//               NEIR Smart <br />
//               Registration <br />
//               Assistant
//             </h1>

//             <p className="text-[#C7D2E0] text-[14px] mt-6 max-w-md">
//               IMEI যাচাই করুন, ভুল ধরুন এবং সরকারি সাইটে যাওয়ার আগেই নিশ্চিত করুন
//               আপনার ফোন রেজিস্টার করার জন্য প্রস্তুত কিনা।

//               IMEI নম্বর জানতে আপনার ফোনে এই কোডটি ডায়াল করুন:*#06#
//               অথবা,ফোনের সেটিংসে যান → About Phone → IMEI দেখুন
//             </p>

// <div className="mt-10 flex items-center gap-4 max-w-[520px]">

//   <input
//     type="text"
//     placeholder="15 digit IMEI লিখুন"
//     maxLength="15"
//     className="flex-1 px-6 py-4 rounded-full bg-[#142B44] outline-none border border-[#4ED4F3] text-[#4ED4F3] text-[14px] placeholder-[#7fdcf1]"
//   />

//   <button className="bg-[#FFC83D] text-black px-10 py-4 rounded-full text-[14px] font-semibold hover:bg-[#E0A800] transition whitespace-nowrap">
//     Check IMEI
//   </button>

// </div>



//           </div>

//           {/* Right Abstract Shape (instead of man) */}
//           <div className="relative">
//             <div className="w-full h-[380px] bg-gradient-to-br from-[#4ED4F3] to-[#9EEAF9] rounded-[70px] flex items-center justify-center shadow-2xl">
              
//               <div className="bg-white/20 backdrop-blur-md p-12 rounded-3xl text-center">
//                 <h2 className="text-3xl font-bold text-[#0F1C2E]">
//                   IMEI Validator
//                 </h2>
//                 <p className="text-[#0F1C2E] mt-3">
//                   Smart NEIR Pre-Check System
//                 </p>
//               </div>

//             </div>
//           </div>

//         </div>

//         {/* Bottom Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">

//           <div className="bg-[#6EDAF5] p-8 rounded-2xl shadow-lg">
//             <h3 className="text-xl font-bold text-[#0F1C2E]">
//               IMEI Validation
//             </h3>
//             <p className="text-[#1F2937] text-[14px] mt-3">
//               ১৫ ডিজিট IMEI সঠিক কিনা তা সাথে সাথে যাচাই করে।
//             </p>
//           </div>

//           <div className="bg-[#6EDAF5] p-8 rounded-2xl shadow-lg">
//             <h3 className="text-xl font-bold text-[#0F1C2E]">
//               Smart Registration
//             </h3>
//             <p className="text-[#1F2937] text-[14px] mt-3">
//               নতুন ও পুরোনো ফোনের জন্য আলাদা নির্দেশনা।
//             </p>
//           </div>

//           <div className="bg-[#6EDAF5] p-8 rounded-2xl shadow-lg">
//             <h3 className="text-xl font-bold text-[#0F1C2E]">
//               Error Detection
//             </h3>
//             <p className="text-[#1F2937] text-[14px] mt-3">
//               সরকারি সাইটে যাওয়ার আগেই সম্ভাব্য ভুল ধরবে।
//             </p>
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default Home;


// import React, { useState } from "react";

// const Home = () => {
//   const [imei, setImei] = useState("");
//   const [result, setResult] = useState("");

//   const checkIMEI = () => {
//     if (imei.length !== 15 || !/^\d+$/.test(imei)) {
//       setResult("❌ IMEI নম্বরটি সঠিক নয়। ১৫ সংখ্যার নম্বর দিন।");
//       return;
//     }

//     // Demo logic (later API connect)
//     if (imei.endsWith("0")) {
//       setResult("⚠️ এই ফোনটি ইতিমধ্যে রেজিস্টার করা আছে।");
//     } else if (imei.endsWith("5")) {
//       setResult("❌ এই IMEI ব্লক বা অবৈধ।");
//     } else {
//       setResult("✅ এই ফোনটি এখনো রেজিস্টার করা হয়নি। রেজিস্ট্রেশন করুন।");
//     }
//   };

//   return (
//     <div className="bg-[#0F1C2E] min-h-screen">
//       <div className="max-w-[1200px] mx-auto px-4 pt-20 pb-20">

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

//           {/* Left */}
//           <div>
//             <p className="text-[#4ED4F3] uppercase tracking-widest mb-3">
//               NEIR Smart System
//             </p>

//             <h1 className="text-white text-[52px] font-bold leading-tight">
//               NEIR Smart <br />
//               Registration <br />
//               Assistant
//             </h1>

//             <p className="text-[#C7D2E0] text-[14px] mt-6 max-w-md">
//               IMEI যাচাই করুন এবং সরকারি সাইটে যাওয়ার আগেই নিশ্চিত করুন আপনার
//               ফোন রেজিস্টার করার জন্য প্রস্তুত কিনা।
//               <br /><br />
//               IMEI জানতে ডায়াল করুন: <b>*#06#</b>
//             </p>

//             {/* Input + Button */}
//             <div className="mt-10 flex items-center gap-4 max-w-[520px]">
//               <input
//                 type="text"
//                 placeholder="15 digit IMEI লিখুন"
//                 maxLength="15"
//                 value={imei}
//                 onChange={(e) => setImei(e.target.value)}
//                 className="flex-1 px-6 py-4 rounded-full bg-[#142B44] outline-none border border-[#4ED4F3] text-[#4ED4F3] text-[14px] placeholder-[#7fdcf1]"
//               />

//               <button
//                 onClick={checkIMEI}
//                 className="bg-[#FFC83D] text-black px-10 py-4 rounded-full text-[14px] font-semibold hover:bg-[#E0A800] transition whitespace-nowrap"
//               >
//                 Check IMEI
//               </button>
//             </div>

//             {/* Result */}
//             {result && (
//               <div className="mt-6 bg-[#142B44] p-4 rounded-xl text-white text-sm">
//                 {result}
//               </div>
//             )}
//           </div>

//           {/* Right */}
//           <div className="relative">
//             <div className="w-full h-[380px] bg-gradient-to-br from-[#4ED4F3] to-[#9EEAF9] rounded-[70px] flex items-center justify-center shadow-2xl">
//               <div className="bg-white/20 backdrop-blur-md p-12 rounded-3xl text-center">
//                 <h2 className="text-3xl font-bold text-[#0F1C2E]">
//                   IMEI Validator
//                 </h2>
//                 <p className="text-[#0F1C2E] mt-3">
//                   Smart NEIR Pre-Check System
//                 </p>
//               </div>
//             </div>
//           </div>

//         </div>

//         {/* Bottom Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">

//           <div className="bg-[#6EDAF5] p-8 rounded-2xl shadow-lg">
//             <h3 className="text-xl font-bold text-[#0F1C2E]">
//               IMEI Validation
//             </h3>
//             <p className="text-[#1F2937] text-[14px] mt-3">
//               ১৫ ডিজিট IMEI সঠিক কিনা তা যাচাই করে।
//             </p>
//           </div>

//           <div className="bg-[#6EDAF5] p-8 rounded-2xl shadow-lg">
//             <h3 className="text-xl font-bold text-[#0F1C2E]">
//               Smart Registration
//             </h3>
//             <p className="text-[#1F2937] text-[14px] mt-3">
//               নতুন ও পুরোনো ফোনের আলাদা গাইড।
//             </p>
//           </div>

//           <div className="bg-[#6EDAF5] p-8 rounded-2xl shadow-lg">
//             <h3 className="text-xl font-bold text-[#0F1C2E]">
//               Error Detection
//             </h3>
//             <p className="text-[#1F2937] text-[14px] mt-3">
//               সরকারি সাইটে যাওয়ার আগেই ভুল ধরবে।
//             </p>
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useState } from "react";

const Home = () => {
  const [imei, setImei] = useState("");
  const [result, setResult] = useState("");

  // Luhn Algorithm for IMEI validation
  const isValidIMEI = (num) => {
    let sum = 0;
    for (let i = 0; i < 15; i++) {
      let digit = parseInt(num[i]);
      if (i % 2 === 1) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }
      sum += digit;
    }
    return sum % 10 === 0;
  };

  const checkIMEI = () => {
    if (!/^\d{15}$/.test(imei)) {
      setResult("❌ IMEI অবশ্যই ১৫ ডিজিটের সংখ্যা হতে হবে।");
      return;
    }

    if (!isValidIMEI(imei)) {
      setResult("❌ এই IMEI নম্বরটি সঠিক নয় — সম্ভবত ভুল বা ভুয়া।");
      return;
    }

    setResult("✅ এই IMEI নম্বরটি সঠিক। এখন সরকারি NEIR সাইটে যাচাই করা যাবে।");
  };

  return (
    <div className="bg-[#0F1C2E] min-h-screen">
      <div className="max-w-[1200px] mx-auto px-4 pt-20 pb-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left */}
          <div>
            <p className="text-[#4ED4F3] uppercase tracking-widest mb-3">
              NEIR Smart System
            </p>

            <h1 className="text-white text-[36px] sm:text-[44px] md:text-[52px] font-bold leading-tight">
              NEIR Smart <br />
              Registration <br />
              Assistant
            </h1>

            <p className="text-[#C7D2E0] text-[14px] mt-6 max-w-md">
              IMEI যাচাই করুন এবং সরকারি সাইটে যাওয়ার আগেই নিশ্চিত করুন আপনার
              দেওয়া নম্বরটি সঠিক কিনা।
              <br /><br />
              IMEI জানতে ডায়াল করুন: <b>*#06#</b>
            </p>

            {/* Input + Button */}
            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-[520px]">
              <input
                type="text"
                placeholder="15 digit IMEI লিখুন"
                maxLength="15"
                value={imei}
                onChange={(e) => setImei(e.target.value)}
                className="flex-1 px-6 py-4 rounded-full bg-[#142B44] outline-none border border-[#4ED4F3] text-[#4ED4F3] text-[14px] placeholder-[#7fdcf1]"
              />

              <button
                onClick={checkIMEI}
                className="bg-[#FFC83D] text-black px-8 py-4 rounded-full text-[14px] font-semibold hover:bg-[#E0A800] transition w-full sm:w-auto"
              >
                Check IMEI
              </button>
            </div>

            {/* Result */}
            {result && (
              <div className="mt-6 bg-[#142B44] p-4 rounded-xl text-white text-sm">
                {result}
              </div>
            )}
          </div>

          {/* Right */}
          <div className="relative">
            <div className="w-full h-[280px] sm:h-[320px] md:h-[380px] bg-gradient-to-br from-[#4ED4F3] to-[#9EEAF9] rounded-[50px] sm:rounded-[70px] flex items-center justify-center shadow-2xl">
              <div className="bg-white/20 backdrop-blur-md p-10 sm:p-12 rounded-3xl text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0F1C2E]">
                  IMEI Validator
                </h2>
                <p className="text-[#0F1C2E] mt-3">
                  Smart NEIR Pre-Check System
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">

          <div className="bg-[#6EDAF5] p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-[#0F1C2E]">
              IMEI Validation
            </h3>
            <p className="text-[#1F2937] text-[14px] mt-3">
              ১৫ ডিজিট IMEI সঠিক কিনা তা যাচাই করে।
            </p>
          </div>

          <div className="bg-[#6EDAF5] p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-[#0F1C2E]">
              Smart Registration
            </h3>
            <p className="text-[#1F2937] text-[14px] mt-3">
              নতুন ও পুরোনো ফোনের জন্য আলাদা নির্দেশনা।
            </p>
          </div>

          <div className="bg-[#6EDAF5] p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-[#0F1C2E]">
              Error Detection
            </h3>
            <p className="text-[#1F2937] text-[14px] mt-3">
              সরকারি সাইটে যাওয়ার আগেই ভুল ধরবে।
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Home;










