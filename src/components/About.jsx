const About = () => {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="-mx-[2vw] font-['Neue_Montreal'] text-5xl max-w-[70vw] max-md:text-3xl max-md:max-w-[100vw] max-md:-mx-[5vw]">
        Ochi is a strategic partner for fast-going tech businesses that need to
        raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full  flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562] max-md:flex-col">
        <div className="w-1/2">
          <h1 className="text-7xl">Our Approach</h1>

          <button className="flex uppercase gap-10 items-center px-10 py-6 bg-zinc-900 rounded-full text-white mt-10">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] rounded-3xl bg-cover bg-center max-md:w-full  bg-[url('https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg')] bg-[#b0c859]"></div>
      </div>
    </div>
  );
};

export default About;
