import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <section
      data-scroll
      data-scroll-speed="-.6"
      className="w-full h-screen mb-[12vw] bg-zinc-900 pt-1"
    >
      <div className="mt-52  px-20">
        {["we create", "Eye-opening", "presentations"].map((item, index) => {
          return (
            <div className="masker" key={index}>
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transition={{ ease: [0.45, 0, 0.55, 1], duration: 1 }}
                    className=" mr-[1vw] w-[8vw] rounded-md h-[6vw] -top-[.7vw] bg-[url('http://savedelete.com/wp-content/uploads/2015/07/free-online-photo-editing-websites.jpg')] bg-contain bg-center relative bg-red-500 "
                  ></motion.div>
                )}
                <h1 className="pt-[2vw]  uppercase text-[9vw] leading-[.78] font-['Founders_Grotesk_X-Condensed'] ">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20 max-sm:flex-col max-sm:py-5 ">
        {[
          "For public and private use companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="font-light text-base tracking-tight leading-none max-sm:py-5"
          >
            {item}
          </p>
        ))}
        <div className="flex justify-center items-end gap-2">
          <div className="px-5 py-2 border-[1px] border-zinc-400 rounded-full font-light text-base uppercase">
            Start the project
          </div>
          <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
