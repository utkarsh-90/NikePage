const Hero = () => {
  return (
    <>
      <div className="flex items-center justify-center w-11/12 align-middle m-auto">
        <div className="w-1/2 p-16">
          <div>
            <h1 className="text-7xl font-bold mb-5">
              YOUR FEET <br /> DESERVE <br /> THE BEST
            </h1>
            <p className="font-medium text-2xl w-3/4 mb-5">
              YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
              SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
              OUR SHOES.
            </p>
          </div>
          <div className="mb-2">
            <button className=" border border-red-500  bg-red-500 px-2 py-1 text-white text-bold rounded-sm mr-3">
              Shop Now
            </button>
            <button className="border border-black px-2 py-1 text-black text-bold rounded-sm">
              Category
            </button>
          </div>
          <div>
            <p>Also Available On</p>
            <ul className="flex gap-2 mt-2">
              <a href="#">
                <img src="./public/Images/amazon.png" alt="logo" />
              </a>
              <a href="#">
                <img src="./public/Images/flipkart.png" alt="logo" />
              </a>
            </ul>
          </div>
        </div>

        <div className="w-1/2">
          <img src="./public/Images/shoe_image.png" alt="shoe"/>
        </div>
      </div>
    </>
  );
};

export default Hero;
