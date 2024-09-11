import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const NaavRespon = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div style={{ width: "100%", height: "10vh" }}>
      <nav>
        <div className="flex flex-row gap-1 pt-2 ml-[5%]">
          

          <h1 className="text-2xl font-bold logo"><svg className="text-[20px] apple-icon mt-[-3%]"
            height="32"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg">
            <g fill="none">
              <path d="m0 0h24v24h-24z" />
              <path
                d="m13.0642063 6.68503859.7444865-.30581579c.6054486-.2410841 1.3868457-.48532511 2.3105072-.3300728 1.8908.3178 3.1953 1.33878 3.9722 2.69298.2994.52188.0575 1.20933-.5027 1.42877-.9318.3649-1.5888 1.2715-1.5888 2.329 0 1.1077.7212 2.0497 1.7223 2.3769.5183.1695.8095.7448.6393 1.2628-.4414 1.3427-1.0779 2.5816-1.831 3.5816-.7434.9873-1.6515 1.8083-2.6625 2.2085-.6592308.2609231-1.3677515.163503-2.0452708-.0045954l-.4021491-.107039-.5968431-.1734212c-.2709481-.0783111-.549037-.1464444-.823837-.1464444s-.5528889.0681333-.8238074.1464444l-.5967797.1734212-.4021632.107039c-.67754189.1680984-1.38607739.2655185-2.0452697.0045954-1.27327-.504-2.39635-1.68-3.2445-3.0664-.86319-1.4111-1.51733-3.1606-1.78403-4.9859-.22711-1.5545-.10451-3.299.61478-4.77562.74078-1.52073 2.09569-2.70519 4.16247-3.05263.83979231-.14116923 1.56195148.04786272 2.1411748.26453782l.3301793.13090178.5837381.24045321c.3997078.15661969.7157578.24884719 1.0642078.24884719.348525 0 .6645938-.09223312 1.0643063-.24885141zm-1.2965063-3.91737859c.9763-.97631 2.4749-1.06066 2.8284-.7071.3536.35355.2692 1.85211-.7071 2.82842s-2.4749 1.06066-2.8284.70711c-.3536-.35355-.2692-1.85212.7071-2.82843z"
                fill="#09244b"
              />
            </g>
          </svg> Galaxy</h1>
        </div>

        <div className="nav-links flex gap-[10px]">
          <div class="dropdown">
            <button class="dropbtn">Shop</button>
            <div class="dropdown-content ml-[-10%] w-[80%]">
              <a href="#">Create a Shipment</a>
              <a href="#">Shipping Rates & Delivery Times</a>
              <a href="#">Schedule & Manage Pickups</a>
              <a href="#">Packing & Shipping Supplies</a>
              <a href="#">International Shipping Guide</a>
              <a href="#">Freight</a>
              <a href="#">Manage a Return</a>
              <a href="#">All Shipping Services</a>
            </div>
          </div>

          <div class="dropdown">
            <button class="dropbtn">Mac</button>
            <div class="dropdown-content ml-[0%] w-[10%]">
              <a href="#">Drop off a Package</a>
              <a href="#">Find a Location</a>
            </div>
          </div>

          <div class="dropdown">
            <button class="dropbtn">ipad</button>
            <div class="dropdown-content ml-[-10%] w-[50%]">
              <a href="#">Small Business Center</a>
              <a href="#">FedEx Service Guide</a>
              <a href="#">Account Management Tools</a>
              <a href="#">Frequently Asked Questions</a>
              <a href="#">File Claim</a>
              <a href="#">Billing & Invoicing</a>
              <a href="#">Customer Support</a>
            </div>
          </div>

          <div class="dropdown">
            <button class="dropbtn">iphone</button>
            <div class="dropdown-content ml-[-10%] w-[50%]">
              <a href="#">Drop off a Package</a>
              <a href="#">Find a Location</a>
            </div>
          </div>

          <div class="dropdown">
            <button class="dropbtn">Vision</button>
            <div class="dropdown-content">
              <a href="#">Drop off a Package</a>
              <a href="#">Find a Location</a>
            </div>
          </div>

          <div class="dropdown">
            <button class="dropbtn">Airpods</button>
            <div class="dropdown-content">
              <a href="#">Drop off a Package</a>
              <a href="#">Find a Location</a>
            </div>
          </div>

          <div class="dropdown">
            <button class="dropbtn">Galaxy Ultra</button>
            <div class="dropdown-content">
              <a href="#">Drop off a Package</a>
              <a href="#">Find a Location</a>
            </div>
          </div>

          <div class="dropdown">
            <button class="dropbtn">Fold</button>
            <div class="dropdown-content">
              <a href="#">Drop off a Package</a>
              <a href="#">Find a Location</a>
            </div>
          </div>

          <div class="dropdown">
            <button class="dropbtn">SmartThings</button>
            <div class="dropdown-content">
              <a href="#">Drop off a Package</a>
              <a href="#">Find a Location</a>
            </div>
          </div>

          <div className="flex">
            <div class="dropdown">
              <button class="dropbtn font-bold">Explore</button>
              <div class="dropdown-content">
                <a href="#">Create a Shipment</a>
                <a href="#">Shipping Rates & Delivery Times</a>
                <a href="#">Schedule & Manage Pickups</a>
                <a href="#">Packing & Shipping Supplies</a>
                <a href="#">International Shipping Guide</a>
                <a href="#">Freight</a>
                <a href="#">Manage a Return</a>
                <a href="#">All Shipping Services</a>
              </div>
            </div>

            <div class="dropdown">
              <button class="dropbtn font-bold">Support</button>
              <div class="dropdown-content">
                <a href="#">Advanced Shipment Tracking</a>
                <a href="#">Manage Your Delivery</a>
                <a href="#">All Tracking Services</a>
              </div>
            </div>

            <div class="dropdown">
              <button class="dropbtn font-bold">For Business</button>
              <div class="dropdown-content">
                <a href="#">Explore Print, Products & Deesign</a>
                <a href="#">Browse Services</a>
                <a href="#">Visit New Marketplace</a>
              </div>
            </div>

            <div className="flex flex-row gap-[15px] mt-5">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-[18px]"
              />
              <FontAwesomeIcon icon={faCartShopping} className="text-[18px]" />
              <FontAwesomeIcon icon={faUser} className="text-[18px]" />
            </div>
          </div>
        </div>

        <div className=""></div>

        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </nav>

      <div className={menu_class}>
        <div className="flex flex-col gap-[5px] ml-[10%] mt-[15%] font-bold text-[25px]">
          <a href="">Shop</a>
          <a href="">Mac</a>
          <a href="">iPad</a>
          <a href="">iPhone</a>
          <a href="">Vision</a>
          <a href="">Airpods</a>
          <a href="">Galaxy Ultra</a>
          <a href="">Fold</a>
          <a href="">SmartThings</a>
          <a href="">Galaxy Tab</a>
          <a href="">Entertainment</a>
          <a href="">Accessories</a>
          <a href="">Support</a>
        </div>
      </div>
    </div>
  );
};

export default NaavRespon;
