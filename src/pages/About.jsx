import React from "react";

const About = () => {
  return (
    <div className="bg-[#0F1C2E] py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

        {/* Left Content */}
        <div>
          <p className="text-[#4ED4F3] uppercase tracking-widest mb-3 text-sm">
            About IMEI
          </p>

          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
            IMEI কী এবং কেন এটি গুরুত্বপূর্ণ?
          </h2>

          <p className="text-[#C7D2E0] mt-5 text-sm sm:text-base leading-relaxed max-w-xl">
            IMEI (International Mobile Equipment Identity) হলো আপনার মোবাইল ফোনের
            একটি ইউনিক ১৫ সংখ্যার নম্বর, যা দিয়ে আপনার ফোনকে সনাক্ত করা হয়।
            বাংলাদেশে NEIR সিস্টেমের মাধ্যমে সরকার এই IMEI ব্যবহার করে
            অবৈধ ও চোরাই ফোন শনাক্ত করে এবং নেটওয়ার্ক থেকে বন্ধ করে দেয়।
          </p>

          <p className="text-[#C7D2E0] mt-4 text-sm sm:text-base leading-relaxed max-w-xl">
            আপনার ফোনের IMEI সঠিকভাবে রেজিস্টার না থাকলে,
            হঠাৎ করে আপনার ফোনে নেটওয়ার্ক বন্ধ হয়ে যেতে পারে।
            তাই সময়মতো IMEI যাচাই ও রেজিস্ট্রেশন করা খুবই জরুরি।
          </p>
        </div>

        {/* Right Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">

          <div className="bg-[#6EDAF5] p-6 sm:p-8 rounded-2xl shadow-xl">
            <h3 className="text-lg sm:text-xl font-bold text-[#0F1C2E]">
              IMEI কী?
            </h3>
            <p className="text-[#1F2937] mt-3 text-sm sm:text-base">
              IMEI হলো আপনার ফোনের জাতীয় পরিচয়পত্রের মতো একটি ইউনিক ১৫ সংখ্যার নম্বর,
              যা দিয়ে প্রতিটি মোবাইল ফোনকে আলাদা করে শনাক্ত করা হয়।
            </p>
          </div>

          <div className="bg-[#6EDAF5] p-6 sm:p-8 rounded-2xl shadow-xl">
            <h3 className="text-lg sm:text-xl font-bold text-[#0F1C2E]">
              কেন রেজিস্ট্রেশন দরকার?
            </h3>
            <p className="text-[#1F2937] mt-3 text-sm sm:text-base">
              সরকার অবৈধ ও চোরাই ফোন বন্ধ করতে NEIR সিস্টেম ব্যবহার করে।
              তাই আপনার ফোন চালু রাখতে IMEI রেজিস্ট্রেশন জরুরি।
            </p>
          </div>

          <div className="bg-[#6EDAF5] p-6 sm:p-8 rounded-2xl shadow-xl">
            <h3 className="text-lg sm:text-xl font-bold text-[#0F1C2E]">
              রেজিস্টার না থাকলে কী হবে?
            </h3>
            <p className="text-[#1F2937] mt-3 text-sm sm:text-base">
              আপনার ফোনের IMEI রেজিস্টার না থাকলে যেকোনো সময় নেটওয়ার্ক বন্ধ হয়ে যেতে পারে।
              তখন কল, ইন্টারনেট ও সিম কাজ করা বন্ধ হয়ে যাবে এবং ফোনটি অচল হয়ে যাওয়ার ঝুঁকি থাকবে।
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;

