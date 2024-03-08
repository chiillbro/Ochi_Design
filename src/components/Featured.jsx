import { motion, useAnimation } from "framer-motion";

const Featured = () => {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <section data-scroll data-scroll-speed=".1" className="w-full py-10 ">
      <div className="w-full px-10  ">
        <h1 className="text-8xl pb-20 font-['Neue Montreal']">Featured</h1>
      </div>
      <div className="px-20 bg-slate-500 py-20">
        <div className="cards w-full flex gap-10 relative max-md:flex-col ">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className=" card w-full h-full font-['Founders_Grotesk_X-Condensed']"
          >
            <h2 className="flex items-center justify-start gap-2 text-xl mb-5">
              <div className="w-3 h-3 rounded-full bg-black"></div>
              FYDE
            </h2>
            <h1 className="absolute overflow-hidden flex z-[999] text-[#CDEA68] text-7xl font-extrabold  top-1/2 right-[45%] -translate-y-[50%] max-md:top-[28%] max-md:left-[35%]">
              {"FYDE".split("").map((char, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  key={index}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </h1>
            <img
              className="w-full h-full object-contain rounded-2xl"
              src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              alt=""
            />
          </motion.div>

          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className=" card w-full h-full font-['Founders_Grotesk_X-Condensed'] "
          >
            <h2 className="flex items-center justify-start gap-2 text-xl mb-5">
              <div className="w-3 h-3 rounded-full bg-black"></div>
              VISE
            </h2>
            <h1 className="absolute flex overflow-hidden z-[999] text-[#CDEA68] text-7xl font-extrabold  top-1/2 right-[45%] -translate-y-[50%] max-md:top-[78%] max-md:left-[35%]">
              {"VISE".split("").map((char, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  key={index}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </h1>
            <img
              className="w-full h-full  object-contain rounded-2xl"
              src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
