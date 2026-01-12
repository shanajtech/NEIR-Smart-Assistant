import React from "react";

const OldRegistation = () => {
  return (
    <div className="bg-[#0F1C2E] py-14 sm:py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-4">

        {/* Title */}
        <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          পুরোনো ফোন রেজিস্ট্রেশন গাইড
        </h2>

        <p className="text-[#C7D2E0] mb-10 text-sm sm:text-base max-w-3xl">
          আপনি যদি আগে ব্যবহার করা, বিদেশ থেকে আনা, অথবা কারও কাছ থেকে কেনা
          সেকেন্ড-হ্যান্ড ফোন ব্যবহার করেন, তাহলে নিচের ধাপগুলো অনুসরণ করে
          সেই ফোনটি আপনার নামে রেজিস্টার করুন।
        </p>

        {/* Step 1 */}
        <div className="bg-[#6EDAF5] p-5 sm:p-8 rounded-2xl mb-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#0F1C2E]">
            ধাপ ১: ফোনের IMEI সংগ্রহ করুন
          </h3>
          <p className="text-[#1F2937] mt-3 text-sm sm:text-base">
            ফোনের ডায়াল প্যাড খুলে <strong>*#06#</strong> ডায়াল করুন এবং IMEI নম্বরটি লিখে নিন।
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-[#6EDAF5] p-5 sm:p-8 rounded-2xl mb-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#0F1C2E]">
            ধাপ ২: প্রয়োজনীয় কাগজপত্র প্রস্তুত করুন
          </h3>
          <ul className="list-disc list-inside text-[#1F2937] mt-3 text-sm sm:text-base space-y-1">
            <li>আপনার জাতীয় পরিচয়পত্র (NID)</li>
            <li>ফোন কেনার রশিদ বা ইনভয়েস (যদি থাকে)</li>
            <li>ফোনের বক্স বা প্রমাণ (যদি থাকে)</li>
          </ul>
        </div>

        {/* Step 3 */}
        <div className="bg-[#6EDAF5] p-5 sm:p-8 rounded-2xl mb-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#0F1C2E]">
            ধাপ ৩: সরকারি NEIR সাইটে যান
          </h3>
          <p className="text-[#1F2937] mt-3 text-sm sm:text-base">
            এখন আপনি সরকারি ওয়েবসাইটে গিয়ে আপনার ফোনের তথ্য জমা দিতে পারবেন।
          </p>

          <a
            href="https://neir.btrc.gov.bd/auth/login"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-5 bg-[#FFC83D] text-black px-6 sm:px-8 py-3 rounded-full font-semibold text-sm sm:text-base"
          >
            NEIR রেজিস্ট্রেশন পোর্টাল
          </a>
        </div>

        {/* Warning */}
        <div className="bg-[#142B44] p-5 sm:p-6 rounded-2xl mt-10 border-l-4 border-[#FFC83D]">
          <h4 className="text-[#FFC83D] text-base sm:text-lg font-semibold">
            গুরুত্বপূর্ণ সতর্কতা
          </h4>
          <p className="text-[#C7D2E0] mt-2 text-sm sm:text-base">
            যদি ভুল তথ্য দেন বা ভুয়া কাগজ ব্যবহার করেন, আপনার ফোন স্থায়ীভাবে
            নেটওয়ার্ক থেকে বন্ধ হয়ে যেতে পারে।
          </p>
        </div>

      </div>
    </div>
  );
};

export default OldRegistation;


