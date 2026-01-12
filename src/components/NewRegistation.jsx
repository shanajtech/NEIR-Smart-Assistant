import React from "react";

const NewRegistation = () => {
  return (
    <div className="bg-[#0F1C2E] py-14 sm:py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-4">

        {/* Title */}
        <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          নতুন ফোন রেজিস্ট্রেশন গাইড
        </h2>

        <p className="text-[#C7D2E0] mb-10 text-sm sm:text-base max-w-3xl">
          আপনি যদি নতুন ফোন কিনে থাকেন, তাহলে নিচের ধাপগুলো অনুসরণ করে সহজেই
          আপনার ফোনটি NEIR সিস্টেমে রেজিস্টার করতে পারবেন।
        </p>

        {/* Step 1 */}
        <div className="bg-[#6EDAF5] p-5 sm:p-8 rounded-2xl mb-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#0F1C2E]">
            ধাপ ১: ফোনের IMEI নম্বর বের করুন
          </h3>
          <p className="text-[#1F2937] mt-3 text-sm sm:text-base">
            আপনার ফোনের ডায়াল প্যাড খুলে <strong>*#06#</strong> ডায়াল করুন এবং
            ১৫ ডিজিটের IMEI নম্বরটি লিখে নিন।
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-[#6EDAF5] p-5 sm:p-8 rounded-2xl mb-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#0F1C2E]">
            ধাপ ২: প্রয়োজনীয় তথ্য প্রস্তুত করুন
          </h3>
          <ul className="list-disc list-inside text-[#1F2937] mt-3 text-sm sm:text-base space-y-1">
            <li>আপনার জাতীয় পরিচয়পত্র (NID)</li>
            <li>ফোন কেনার রশিদ বা ইনভয়েস</li>
            <li>ফোনের বক্স (যদি থাকে)</li>
          </ul>
        </div>

        {/* Step 3 */}
        <div className="bg-[#6EDAF5] p-5 sm:p-8 rounded-2xl mb-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#0F1C2E]">
            ধাপ ৩: সরকারি NEIR ওয়েবসাইটে রেজিস্টার করুন
          </h3>
          <p className="text-[#1F2937] mt-3 text-sm sm:text-base">
            এখন সরকারি NEIR পোর্টালে গিয়ে আপনার ফোনের IMEI এবং প্রয়োজনীয়
            তথ্য দিয়ে রেজিস্ট্রেশন সম্পন্ন করুন।
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

        {/* Tip */}
        <div className="bg-[#142B44] p-5 sm:p-6 rounded-2xl mt-10 border-l-4 border-[#4ED4F3]">
          <h4 className="text-[#4ED4F3] text-base sm:text-lg font-semibold">
            গুরুত্বপূর্ণ টিপস
          </h4>
          <p className="text-[#C7D2E0] mt-2 text-sm sm:text-base">
            নতুন ফোন কেনার ৭ দিনের মধ্যে রেজিস্ট্রেশন করলে সাধারণত কোনো সমস্যা হয় না।
          </p>
        </div>

      </div>
    </div>
  );
};

export default NewRegistation;


