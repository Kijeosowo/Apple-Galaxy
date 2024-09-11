import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import zflip6 from "./Images/zflip6.png";
import sambespoke from "./Images/sambespoke.jpg";
import Mrbeast from "./Images/mrbeast.jpeg";
// import Galaxy1 from "./galaxy2.jpg";

function Section2() {
  return (
    <div>
      <section className="mt-[10%] mb-[5%] w-[100%]">
        <div className="mobile-computing flex flex-col justify-center place-items-center">
          <h1 className="text-4xl font-bold">Mobile Computing</h1>
          <div className="mobile-computing flex flex-row gap-[30px] text-[1rem] mt-5">
            <a href="" className="hover:underline">
              Galaxy Z Flip6
            </a>
            <a href="" className="hover:underline">
              Galaxy Z Fold6
            </a>
            <a href="" className="hover:underline">
              Galaxy Watch Ultra
            </a>
            <a href="" className="hover:underline">
              Galaxy Buds 3 Pro
            </a>
            <a href="" className="hover:underline">
              Galaxy Experience
            </a>
          </div>

          <div>
            <img src={zflip6} />
          </div>

          <div className="mobile-computing">
            <header className="text-center text-4xl mt-[10%] font-bold">
              Galaxy Z Flip6
            </header>
            <p className="text-center mt-5">
              Get up to $650 instant trabd-in credit and double the dtorage on
              us with select colors.
            </p>
            <span className="flex flex-row justify-center gap-[15px] mt-5">
              <a href="" className="underline text-sm mt-2">
                Learn more
              </a>
              <a
                href=""
                className="bg-black text-white text-sm pl-5 pr-5 pt-2 pb-2 border rounded-[50px]">
                Buy now
              </a>
            </span>
          </div>
        </div>

        {/* ------------------------------------------- */}
        <div className="loud mt-[10%] pb-[5%] ml-[5%]">
          <h1 className="text-3xl">
            Loud and clear.{" "}
            <span className="text-neutral-500">
              Unparalleled choices for rich, high-quality sound.
            </span>
          </h1>
        </div>
        <div className="Aud-Cards mt-[0%] ml-20 mr-10">
          <div className="Audev1-img border shadow-1xl w-[420px] h-[500px] bg-cover text-black rounded-[20px]">
            <div className="p-7 text-[15px]">
              <h1 className="text-3xl">
                Get 3 months of <br /> apple music free.
              </h1>
              <p className="py-2 text-[15px]">
                Included with the purchase of select Apple devices.+
              </p>
            </div>
          </div>
          <div className="Audev2-img border shadow-1xl w-[420px] h-[500px] bg-cover text-black rounded-[20px]">
            <div className="p-7 text-[12px] pt-[80%]">
              <p className="py-2 text-red-600">FREE-ENGRAVING</p>
              <h1 className="text-[20px]">
                AirPods Pro (2nd Generation) <br /> with magsafe charging
                case...
              </h1>
              <p className="py-5 text-[15px] text-neutral-600">$249.00</p>
            </div>
          </div>
          <div className="Audev3-img border shadow-1xl w-[420px] h-[500px] bg-cover text-black rounded-[20px]">
            <div className="p-7 text-[15px] mt-[87%]">
              <h1 className="py-2 font-bold text-2xl">Homepod - Midnight</h1>
              <p className="py-2 text-[15px]">$299.00</p>
            </div>
          </div>
          <div className="Audev4-img border shadow-1xl w-[420px] h-[500px] bg-cover text-black rounded-[20px]">
            <div className="p-7 text-[15px] mt-[87%]">
              <h1 className="py-2 font-bold text-2xl">Beatspill <br/> wireless bluetooth speaker</h1>
              <p className="py-2 text-[15px]">$149.00</p>
            </div>
          </div>
        </div>

        <div className="fixed top-[87%] left-[5%] shadow-lg flex bg-white hover:bg-neutral-100 rounded-[50px] p-3 border">
          <a href="#top" className="text-2xl font-bold -mt-1">
            <FontAwesomeIcon icon={faChevronUp} />
          </a>
        </div>

        {/* ------------------------------------------ */}
        <div className="home-appliance flex flex-col justify-center place-items-center mt-[10%]">
          <h1 className="text-4xl font-bold">Home Appliances</h1>
          <div className="appliances flex flex-row gap-[30px] text-[1rem] mt-5">
            <a href="" className="hover:underline">
              Bespoke Appliances
            </a>
            <a href="" className="hover:underline">
              Bespoke Refrigerator
            </a>
            <a href="" className="hover:underline">
              Bespoke Laundry
            </a>
          </div>

          <div className="sambespoke flex flex-row justify-center mt-[2%]">
            <img src={sambespoke} className="w-[50%] rounded-[20px]" />
          </div>

          {/* ------------------------------------ */}
          <div className="home-appliance">
            <header className="text-center text-4xl mt-[5%] font-bold">
              Save on Bespoke all summer
            </header>
            <p className="text-center mt-5">
              Get up to $1,500 off select bespoke models from Americs's #1
              appliance brand.
            </p>
            <span className="flex flex-row justify-center mt-5">
              <a
                href=""
                className="bg-black text-white text-sm pl-5 pr-5 pt-2 pb-2 border rounded-[50px]">
                Shop now
              </a>
            </span>
          </div>
        </div>

        {/* --------------------------------- */}
        <div className="Specialist mt-[10%] pb-[5%] ml-[5%]">
          <h1 className="text-3xl">
            Help is here.{" "}
            <span className="text-neutral-500">
              Whenever and however you need it
            </span>
          </h1>
        </div>
        <div className="Aud-Cards2 mt-[0%] ml-20 mr-10 gap-[10px]">
          <div className="Audev1-img1 border shadow-1xl w-[420px] h-[500px] bg-cover text-black rounded-[20px]">
            <div className="p-7">
              <p>APPLE SPECIALIST</p>
              <h1 className="text-[1.5rem] font-bold">
                Shop one on one with a <br /> Specialist. Online or in a store.
              </h1>
            </div>
          </div>
          <div className="Audev2-img2 border shadow-1xl w-[420px] h-[500px] bg-cover text-black rounded-[20px]">
            <div className="p-7 pt-[5%]">
              <h1 className="text-[1.5rem] font-bold">
                Shop with a Specialist <br /> over video.
              </h1>
              <p className="text-[15px] text-neutral-600">
                Choose your next device in a guided,
                <br /> one-way video session.
              </p>
            </div>
          </div>
          <div className="Audev3-img3 border shadow-1xl w-[420px] h-[500px] bg-cover text-black rounded-[20px]">
            <div className="p-7 mt-[3%]">
              <p>TODAY AT APPLE</p>
              <h1 className="text-[1.5rem] font-bold">Gear up for college .</h1>
              <p className="py-2 text-[15px]">
                Go back to school with Mac and iPad. <br /> Join free sessions
                at the Apple Store.
              </p>
            </div>
          </div>
          <div className="Audev4-img4 border shadow-1xl w-[420px] h-[500px] bg-cover text-black rounded-[20px]">
            <div className="p-7 mt-[3%]">
              <p>TODAY AT APPLE</p>
              <h1 className="text-[1.5rem] font-bold">Gear up for college .</h1>
              <p className="py-2 text-[15px]">
                Go back to school with Mac and iPad. <br /> Join free sessions
                at the Apple Store.
              </p>
            </div>
          </div>
        </div>

        {/* ----------------------------- */}
        <aside className="flex flex-col justify-center place-items-center mt-[10%]">
          <h1 className="text-4xl font-bold hover:underline hover:text-neutral-600">
            Explore Stories
          </h1>
          <div className="flex flex-row faqs">
            <div>
              <img src={Mrbeast} alt="Mr Beast"/>
            </div>
            <div className="mt-[5%]">
              <details>
                <summary className="summary text-3xl">
                  01 Unlock a new era of AI
                </summary>
                <div className="content">
                  <a href="" className="underline">
                    Learn more
                  </a>
                </div>
              </details>
              <details>
                <summary className="summary text-3xl">
                  02 Your favourite music never looked so good
                </summary>
                <div className="content">
                  <a href="" className="underline">
                    Learn more
                  </a>
                </div>
              </details>
              <details>
                <summary className="summary text-3xl">
                  03 Openning a Galaxy of opportunity with Mr.Beast
                </summary>
                <div className="content">
                  <a href="" className="underline">
                    Learn more
                  </a>
                </div>
              </details>
              <details>
                <summary className="summary text-3xl">
                  04 The do-more-for-the-planet creator phone is here
                </summary>
                <div className="content">
                  <a href="" className="underline">
                    Learn more
                  </a>
                </div>
              </details>
              <details>
                <summary className="summary text-3xl">
                  05 Galaxy and the Olympic Games 2024
                </summary>
                <div className="content">
                  <a href="" className="underline">
                    Learn more
                  </a>
                </div>
              </details>
            </div>
          </div>
        </aside>

        {/* ----------------------------------- */}
        <div className="mt-[10%] pb-[5%] ml-[5%]">
          <h1 className="text-3xl">
            The Apple experience.{" "}
            <span className="text-neutral-500">
              Do even more with apple Products and Services
            </span>
          </h1>
        </div>
        <div className="Aud-Cards3 mt-[0%] ml-20 mr-10 gap-[10px]">
          <div className="Audev1-img4 border shadow-1xl w-[420px] h-[500px] bg-cover text-black rounded-[20px]">
            <div className="p-7">
              <p>SHOT ON IPHONE</p>
              <h1 className="text-[1.5rem] font-bold text-white">
                With a starring performance by <br /> the iPhone 15 Pro Camera.
              </h1>
            </div>
          </div>
          <div className="Audev2-img5 border shadow-1xl w-[420px] h-[500px] bg-cover text-black rounded-[20px]">
            <div className="p-7 pt-[5%]">
              <p>APPLE MUSIC</p>
              <h1 className="text-[1.5rem] font-bold">
                A Song written from the heart
              </h1>
              <p className="text-[15px] text-neutral-600">
                Listen to the new song "Intercambio Injusto"
                <br /> bu Ivan Cornejo in Spatial Audio
              </p>
            </div>
          </div>
          <div className="Audev3-img6 border shadow-1xl w-[420px] h-[500px] bg-cover text-black rounded-[20px]">
            <div className="p-7 mt-[3%]">
              <p>TODAY AT APPLE</p>
              <h1 className="text-[1.5rem] font-bold">MLS SEASON PASS</h1>
              <p className="py-2 text-[15px]">
                Sign up for MLS Seaason Pass <br /> on Apple Tv.
              </p>
            </div>
          </div>
          <div className="Audev4-img7 border shadow-1xl w-[420px] h-[500px] bg-cover text-black rounded-[20px]">
            <div className="p-7 pt-[5%]">
              <p>APPLE MUSIC</p>
              <h1 className="text-[1.5rem] font-bold">
                A Song written from the heart
              </h1>
              <p className="text-[15px] text-neutral-600">
                Listen to the new song "Intercambio Injusto"
                <br /> bu Ivan Cornejo in Spatial Audio
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section2;
