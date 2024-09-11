import React from "react";
// import Image1 from "./Image1.jpeg";

function Hero() {
  return (
    <div className="w-[100%]">
        <article className="ml-[5%] mt-[2%] text-5xl article-hero">
          Store.<span className="from-gray-500 to-gray-500 bg-gradient-to-r bg-clip-text text-transparent"> The best way to buy the <br/> product you love.</span>
        </article>        
        {/* -------------------------------------------------- */}

      <section>
        <article className="ml-[5%] mt-[5%] text-2xl article-hero-p">
          The latest.<span className="from-gray-500 via-neutral-500 to-gray-500 bg-gradient-to-r bg-clip-text text-transparent">Take a look at what's new, right now. </span>
        </article> 

        <div className="Cards mt-[0%] ml-[3%] mr-[3%] gap-[10px]">
            <div className="Image1 mt-[10%] border shadow-1xl w-[420px] h-[500px] bg-cover text-white rounded-[20px]">
                <div className="p-7 text-[15px]">
                <p className="py-2">IPHONE 15 PRO</p>
                <h1 className="text-3xl font-bold">Titanium</h1>
                <p className="py-2 text-[15px]">From $999 or $41.62/mo. for 24 mo.+</p>
                </div>
            </div>
            <div className="Image2 mt-[10%] border shadow-1xl w-[420px] h-[500px] bg-cover text-black rounded-[20px]">
                <div className="p-7 text-[15px]">
                <p className="py-2 text-neutral-600">APPLE VISION PRO</p>
                <h1 className="text-3xl font-bold">Welcome to <br/> spatial computing</h1>
                <p className="py-2 text-[15px]">From $3499 or $291.58/mo. for 24 mo.+</p>
                </div>
            </div>
            <div className="Image4 mt-[10%]  border shadow-1xl w-[420px] h-[500px] bg-cover text-white rounded-[20px]">
                <div className="p-7 text-[15px]">
                <p className="py-2">PRIDE EDITION BRAIDED SOLO LOOP</p>
                <h1 className="text-3xl font-bold">Let your light shine.</h1>
                <p className="py-2 text-[15px]">$99</p>
                </div>
            </div>
            
            {/* ---------------------------------------------------------- */}
            <div className="Image5 mt-[10%] border shadow-1xl w-[420px] h-[500px] bg-cover text-black rounded-[20px]">
                <div className="p-7 text-[15px]">
                <p className="py-2 text-red-600">LIMITED-TIME OFFER</p>
                <h1 className="text-3xl font-bold">Save on mac or ipad for <br/> college.</h1>
                <p className="py-2 text-[15px]">Plus get a gift card up to $150, <br/> 20% off apple care+, and more</p>
                </div>
            </div>
            <div className="Image3 mt-[10%] border shadow-1xl w-[420px] h-[500px] bg-cover text-white rounded-[20px]">
                <div className="p-7 text-[15px]">
                <p className="py-2">IPAD PRO</p>
                <h1 className="text-3xl font-bold">Thingpossible</h1>
                <p className="py-2 text-[15px]">From $999 or $83.25/mo. for 24 mo.*</p>
                </div>
            </div>
            <div className="Image6 mt-[10%] border shadow-1xl w-[420px] h-[500px] bg-cover text-black rounded-[20px]">
                <div className="p-7 text-[15px]">
                <p className="py-2">MAC BOOK AIR</p>
                <h1 className="text-3xl font-bold">Designed to go placess.</h1>
                <p className="py-2 text-[15px]">From $999 or $83.25/mo. for 24 mo.*</p>
                </div>
            </div>
            

        </div>

      </section>


      </div>
  );
}

export default Hero;
