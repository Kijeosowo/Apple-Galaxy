import React from "react";

function Footer() {
  return (
    <div>
      <section className="mt-[10%]">
        <div className="footer-search flex flex-col justify-center place-items-center pb-[10%]">
          <h1 className="text-5xl font-bold text-center">Looking for something else?</h1>
          <input className="mt-5 w-[30%] p-[1rem] bg-neutral-100 rounded-[50px]" type="search" placeholder="Search Keyword"/>
          <div className="footer-search-btn flex gap-[10px] mt-5">
            <button type="search" className="text-[12px] border rounded-[50px] pl-5 pr-5 hover:bg-neutral-100">Accessories</button>
            <button type="search" className="text-[12px] border rounded-[50px] pl-5 pr-5 hover:bg-neutral-100">Galaxy Z fold6</button>
            <button type="search" className="text-[12px] border rounded-[50px] pl-5 pr-5 hover:bg-neutral-100">Galaxy Z flip6</button>
            <button type="search" className="text-[12px] border rounded-[50px] pl-5 pr-5 hover:bg-neutral-100">Galaxy S24 Ultra</button>
            <button type="search" className="text-[12px] border rounded-[50px] pl-5 pr-5 hover:bg-neutral-100">Galaxy Z flip5</button>
            <button type="search" className="text-[12px] border rounded-[50px] pl-5 pr-5 hover:bg-neutral-100">The Frame</button>
            <button type="search" className="text-[12px] border rounded-[50px] pl-5 pr-5 hover:bg-neutral-100">BESPOKE refrigerator</button>
          </div>
        </div>

        <footer className="ml-[5%]">
          <dt className="text-4xl font-bold">Quick Links</dt>
          <br />
          <div className="quick-links flex flex-row gap-[20px]">
            <div className="border rounded-[50px] pl-5 pt-2 pb-2 pr-5 pt-2 pb-2 hover:bg-black hover:text-white">
              <a href="">Order Status</a>
            </div>
            <div className="border rounded-[50px] pl-5 pt-2 pb-2 pr-5 pt-2 pb-2 hover:bg-black hover:text-white">
              <a href="">Shopping Help</a>
            </div>
            <div className="border rounded-[50px] pl-5 pt-2 pb-2 pr-5 pt-2 pb-2 hover:bg-black hover:text-white">
              <a href="">Returns</a>
            </div>
            <div className="border rounded-[50px] pl-5 pt-2 pb-2 pr-5 pt-2 pb-2 hover:bg-black hover:text-white">
              <a href="">Your Saves</a>
            </div>
          </div>
          <br />
          <br />

          <div className="footer-text text-[12px] ml-[11%] mr-[15%] text-neutral-600">
            ◊◊◊ Available for Qualified Purchasers only. Qualified Purchasers
            receive an Apple Gift Card when they purchase an Eligible Product at
            a Qualifying Location through September 30, 2024. Gift card values
            may vary by Eligible Product. Only one Apple Gift Card per Eligible
            Product per Qualified Purchaser. Offer subject to availability.
            While supplies last. Qualified Purchasers shall receive a discount
            equal to the value of the Apple Gift Card off the price of the
            Eligible Product, but will be charged for all items in their cart,
            including the Apple Gift Card. Important notice regarding the
            checkout receipt and monthly statement for Apple Card Monthly
            Installments (ACMI) purchases with this promotion: Qualified
            Purchasers selecting ACMI (a 0% APR payment option available only in
            the U.S.) as payment type at checkout shall receive a discount equal
            to the value of the Apple Gift Card off the price of the Eligible
            Product. This will result in one ACMI installment plan over 12
            months for the Eligible Product discounted by the instant credit,
            and a second ACMI installment plan over 12 months for the full price
            of the Apple Gift Card. The total combined amount charged over the
            two separate ACMI installment plans will reflect the original full
            retail price of the Eligible Product. Separately, Qualified
            Purchasers will receive and be charged for the Apple Gift Card in
            the amount of the applicable discount off the Eligible Product.
            Apple Card Monthly Installments (ACMI) is a 0% APR payment option
            that is only available if you select it at checkout in the U.S. for
            eligible products purchased at Apple Store locations, apple.com, the
            Apple Store app, or by calling 1-800-MY-APPLE, and is subject to
            credit approval and credit limit. See
            <a href="#" className="underline">
              {" "}
              https://support.apple.com/kb/HT211204
            </a>{" "}
            for more information about eligible products. APR ranges may vary
            based on when you accepted an Apple Card. Cardholders who accept an
            Apple Card on and/or after February 1, 2024: Variable APRs for Apple
            Card, other than ACMI, range from 19.24% to 29.49% based on
            creditworthiness. Rates as of February 1, 2024. Existing
            cardholders: See your Customer Agreement for applicable rates and
            fee. If you buy an ACMI-eligible product by choosing to pay in full
            with Apple Card (instead of using ACMI), that purchase is subject to
            the Apple Card variable APR, not 0% APR. Taxes and shipping on ACMI
            purchases are subject to the variable APR, not 0% APR. When you buy
            an iPhone with ACMI, you’ll need to select AT&T, T-Mobile, or
            Verizon as your carrier when you check out. An iPhone purchased with
            ACMI is always unlocked, so you can switch carriers at any time.
            ACMI is not available for purchases made online at the following
            special stores: Apple Employee Purchase Plan; participating
            corporate Employee Purchase Programs; Apple at Work for small
            businesses; Government and Veterans and Military Purchase Programs;
            or on refurbished devices. The last month’s payment for each product
            will be the product's purchase price, less all other payments at the
            monthly payment amount. ACMI financing is subject to change at any
            time for any reason, including but not limited to installment term
            lengths and eligible products. See
            <a href="#" className="underline">
              {" "}
              https://support.apple.com/kb/HT211204
            </a>{" "}
            for information about upcoming changes to ACMI financing. See the
            Apple Card Customer Agreement for more information about ACMI
            financing. Apple Card is issued by Goldman Sachs Bank USA, Salt Lake
            City Branch. <br />
            <br /> Available for qualifying applicants in the United States. If
            you reside in the U.S. territories, please call Goldman Sachs at
            877-255-5923 with questions about accessing this offer or applying
            for Apple Card. This offer cannot be combined with the Apple
            Employee Purchase Plan or business loyalty pricing. Additional
            restrictions apply. View full terms and conditions of offer here.
            °°° The promotional Apple Education Pricing on AppleCare+ is
            available for eligible products only when the eligible product and
            AppleCare+ are purchased directly from an Apple Store or
            concurrently from the online Apple Store for Education during the
            promotional period and cannot be combined with non-promotional Apple
            Education Pricing. AppleCare+ attached to eligible products outside
            of the promotional period is not eligible for this promotional rate.
            This promotional AppleCare+ Education Pricing is applicable only to
            two-year paid upfront AppleCare+ for iPad and three-year paid
            upfront AppleCare+ for Mac and is not applicable to any recurring
            payment AppleCare+ plans. In select Retail stores, the AppleCare+
            Education Pricing may be available on select recurring payment
            AppleCare+ plans for iPad and Mac. Apple Education Pricing is
            available to current and newly accepted university students and
            their parents, as well as teachers and staff at all levels. Quantity
            limits apply. * Pricing for iPhone 15 and iPhone 15 Plus includes a
            $30 connectivity discount that requires activation with AT&T,
            T-Mobile, or Verizon. Available to qualified customers and requires
            24-month installment loan when you select Citizens One or Apple Card
            Monthly Installments (ACMI) as payment type at checkout at Apple.
            You’ll need to select AT&T, T-Mobile, or Verizon as your carrier
            when you check out. An iPhone purchased with ACMI is always
            unlocked, so you can switch carriers at any time. Subject to credit
            approval and credit limit. Taxes and shipping are not included in
            ACMI and are subject to your card’s variable APR. Additional Apple
            Card Monthly Installments terms are in the Apple Card Customer
            Agreement(Opens in a new window). Additional iPhone Payments terms
            are Additional iPhone Payments terms arehere(Opens in a new window).
            ACMI is not available for purchases made online at special
            storefronts. The last month’s payment for each product will be the
            product’s purchase price, less all other payments at the monthly
            payment amount. ACMI financing is subject to change at any time for
            any reason, including but not limited to, installment term lengths
            and eligible products. <br />
            <br /> See
            <a href="#" className="underline">
              {" "}
              https://support.apple.com/kb/HT211204
            </a>{" "}
            (Opens in a new window) for information about upcoming changes to
            ACMI financing. ◊ Apple Card Monthly Installments (ACMI) is a 0% APR
            (Annual Percentage Rate) payment option that is only available if
            you select it at checkout in the U.S. for eligible products
            purchased at Apple Store locations, apple.com(Opens in a new
            window), the Apple Store app, or by calling 1-800-MY-APPLE, and is
            subject to credit approval and credit limit. See Apple Support(Opens
            in a new window) for more information about eligible products. APR
            ranges may vary based on when you accepted an Apple Card.
            Cardholders who accept an Apple Card on and/or after February 1,
            2024: Variable APRs for Apple Card, other than ACMI, range from
            19.24% to 29.49% based on creditworthiness. Rates as of February 1,
            2024. Existing cardholders: See your Customer Agreement for
            applicable rates and fee. If you buy an ACMI-eligible product by
            choosing to pay in full with Apple Card (instead of using ACMI),
            that purchase is subject to the Apple Card variable APR, not 0% APR.
            Taxes and shipping on ACMI purchases are subject to the variable
            APR, not 0% APR. When you buy an iPhone with ACMI, you’ll need to
            select AT&T, T-Mobile, or Verizon as your carrier when you check
            out. An iPhone purchased with ACMI is always unlocked, so you can
            switch carriers at any time. ACMI is not available for purchases
            made online at the following special stores: Apple Employee Purchase
            Plan; participating corporate Employee Purchase Programs; Apple at
            Work for small businesses; Government, and Veterans and Military
            Purchase Programs, or on refurbished devices. The last month’s
            payment for each product will be the product’s purchase price, less
            all other payments at the monthly payment amount. ACMI financing is
            subject to change at any time for any reason, including but not
            limited to, installment term lengths and eligible products. See
            Apple Support(Opens in a new window) for information about upcoming
            changes to ACMI financing. See the Apple Card Customer
            Agreement(Opens in a new window) for more information about ACMI
            financing. To access and use all Apple Card features and products
            available only to Apple Card users, you must add Apple Card to
            Wallet on an iPhone or iPad that supports and has the latest version
            of iOS or iPadOS. Apple Card is subject to credit approval,
            available only for qualifying applicants in the United States, and
            issued by Goldman Sachs Bank USA, Salt Lake City Branch. If you
            reside in the U.S. territories, please call Goldman Sachs at
            877-255-5923 with questions about Apple Card. † Monthly pricing is
            available when you select Apple Card Monthly Installments (ACMI) as
            payment type at checkout at Apple, and is subject to credit approval
            and credit limit. Financing terms vary by product. Taxes and
            shipping are not included in ACMI and are subject to your card’s
            variable APR. See the Apple Card Customer Agreement(Opens in a new
            window) for more information. ACMI is not available for purchases
            made online at special storefronts. The last month’s payment for
            each product will be the product’s purchase price, less all other
            payments at the monthly payment amount. ACMI financing is subject to
            change at any time for any reason, including but not limited to,
            installment term lengths and eligible products. See
            support.apple.com/kb/HT211204(Opens in a new window) for information
            about upcoming changes to ACMI financing. ° Apple TV+ offer
            available to new and qualified returning subscribers only.
            $9.99/month after free trial. <br />
            <br /> Only one offer per Apple ID and only one offer per family if
            you’re part of a Family Sharing group, regardless of the number of
            devices you or your family purchases. This offer is not available if
            you or your Family have previously accepted an Apple TV+ three
            months free or one year free offer. Offer good for 3 months after
            eligible device is activated. Plan automatically renews until
            cancelled. Restrictions and other terms apply. 1. Special pricing
            available to qualified customers. To learn more about how to start
            qualifying toward special pricing, talk to an Apple Specialist in a
            store or give us a call at 1‑800‑MY‑APPLE. 2. $9 two-hour delivery
            on eligible Apple products in most metros. Offer is not available on
            customized Mac, engraved products, and for certain order types
            including orders paid for with financing or by bank transfer.
            Delivery times vary according to your selected delivery address,
            availability of your items, and the time of day you place your
            order. Find a store to view local store hours or see checkout for
            estimated delivery. A signature is required for delivery. Drivers
            may ask for verbal confirmation of receipt from a safe distance to
            satisfy the signature requirement. 3. Trade‑in values will vary
            based on the condition, year, and configuration of your eligible
            trade‑in device. Not all devices are eligible for credit. You must
            be at least the age of majority to be eligible to trade in for
            credit or for an Apple Gift Card. Trade‑in value may be applied
            toward qualifying new device purchase, or added to an Apple Gift
            Card. Actual value awarded is based on receipt of a qualifying
            device matching the description provided when estimate was made.
            Sales tax may be assessed on full value of a new device purchase.
            In‑store trade‑in requires presentation of a valid photo ID (local
            law may require saving this information). Offer may not be available
            in all stores, and may vary between in-store and online trade‑in.
            Some stores may have additional requirements. Apple or its trade‑in
            partners reserve the right to refuse, cancel, or limit quantity of
            any trade‑in transaction for any reason. More details are available
            from Apple’s trade‑in partner for trade‑in and recycling of eligible
            devices. Restrictions and limitations may apply. ⁺ New subscribers
            only. $10.99/month after trial. Offer is available for new Apple
            Music subscribers with a new eligible device for a limited time
            only. Offer redemption for eligible audio devices requires
            connecting or pairing to an Apple device running the latest iOS or
            iPadOS. Offer redemption for Apple Watch requires connecting or
            pairing to an iPhone running the latest iOS. Offer good for three
            months after eligible device activation. Only one offer per Apple
            ID, regardless of the number of eligible devices you purchase. Plan
            automatically renews until cancelled. Restrictions and other
            terms(Opens in a new window) apply. We approximate your location
            from your internet IP address by matching it to a geographic region
            or from the location entered during your previous visit to Apple.
          </div>
          <br />
          <hr className="ml-[11%] mr-[15%]" />

          <div className="footer flex gap-[100px] ml-[11%] mt-5 text-[12px]">
            <div>
              <p className="font-bold">Shop and Learn</p>
              <ul className="text-neutral-600 flex flex-col gap-[10px]">
                <li>
                  <a href="#">Store</a>
                </li>
                <li>
                  <a href="#">Mac</a>
                </li>
                <li>
                  <a href="#">iPad</a>
                </li>
                <li>
                  <a href="#">iPhone</a>
                </li>
                <li>
                  <a href="#">Watch</a>
                </li>
                <li>
                  <a href="#">Vision</a>
                </li>
                <li>
                  <a href="#">Airpods</a>
                </li>
                <li>
                  <a href="#">Tv & Home</a>
                </li>
                <li>
                  <a href="#">Air Tags</a>
                </li>
                <li>
                  <a href="#">Acceessories</a>
                </li>
                <li>
                  <a href="#">Gift Cards</a>
                </li>
                <br />
                <p className="font-bold">Wallet</p>
                <li>
                  <a href="#">Apple Card</a>
                </li>
                <li>
                  <a href="#">Apple Pay</a>
                </li>
                <li>
                  <a href="#">Apple Cash</a>
                </li>
              </ul>
            </div>
            {/* ------------------------------------ */}
            <div>
              <ul className="text-neutral-600 flex flex-col gap-[10px]">
                <p className="font-bold text-black">Account</p>
                <li>
                  <a href="#">Manage your Apple ID</a>
                </li>
                <li>
                  <a href="#">Apple Store Accound</a>
                </li>
                <li>
                  <a href="#">iCloud.com</a>
                </li>
                <br />
                <p className="font-bold text-black">Entertainment</p>
                <li>
                  <a href="#">Apple One</a>
                </li>
                <li>
                  <a href="#">Apple TV+</a>
                </li>
                <li>
                  <a href="#">Apple Music</a>
                </li>
                <li>
                  <a href="#">Apple Arcade</a>
                </li>
                <li>
                  <a href="#">Apple Fitness+</a>
                </li>
                <li>
                  <a href="#">Apple News+</a>
                </li>
                <li>
                  <a href="#">Apple Podcasts</a>
                </li>
                <li>
                  <a href="#">Apple Books</a>
                </li>
                <li>
                  <a href="#">App Store</a>
                </li>
              </ul>
            </div>
            {/* ----------------------------------------- */}
            <div>
              <ul className="text-neutral-600 flex flex-col gap-[10px]">
                <p className="font-bold text-black">Apple Store</p>
                <li>
                  <a href="#">Find a Store</a>
                </li>
                <li>
                  <a href="#">Genius Bar</a>
                </li>
                <li>
                  <a href="#">Today at Apple</a>
                </li>
                <li>
                  <a href="#">Apple Camp</a>
                </li>
                <li>
                  <a href="#">Apple Store App</a>
                </li>
                <li>
                  <a href="#">Certified Refurbished</a>
                </li>
                <li>
                  <a href="#">Apple Trade In</a>
                </li>
                <li>
                  <a href="#">Financing</a>
                </li>
                <li>
                  <a href="#">Carrier Deals at Apple</a>
                </li>
                <li>
                  <a href="#">Order Status</a>
                </li>
                <li>
                  <a href="#">Shopping Help</a>
                </li>
              </ul>
            </div>
            {/* -------------------------------------------- */}
            <div>
              <ul className="text-neutral-600 flex flex-col gap-[10px]">
                <p className="font-bold text-black">For Business</p>
                <li>
                  <a href="#">Apple Business</a>
                </li>
                <li>
                  <a href="#">Shop for Business</a>
                </li>
                <br />
                <p className="font-bold text-black">For Education</p>
                <li>
                  <a href="#">Apple and Education</a>
                </li>
                <li>
                  <a href="#">Shop for k-12</a>
                </li>
                <li>
                  <a href="#">Shop for College</a>
                </li>
                <br />
                <p className="font-bold text-black">For Health Care</p>
                <li>
                  <a href="#">Apple in Health Care</a>
                </li>
                <li>
                  <a href="#">Health on Apple Watch</a>
                </li>
                <li>
                  <a href="#">Health Records on iPhone</a>
                </li>
                <br />
                <p className="font-bold text-black">For Government</p>
                <li>
                  <a href="#">Shop for Government</a>
                </li>
                <li>
                  <a href="#">Shop for Veterans and Military</a>
                </li>
                <li>
                  <a href="#">Shop for College</a>
                </li>
              </ul>
            </div>
            {/* ---------------------------------------------- */}
            <div>
              <ul className="text-neutral-600 flex flex-col gap-[10px]">
                <p className="font-bold text-black">Apple Values</p>
                <li>
                  <a href="#">Accessibility</a>
                </li>
                <li>
                  <a href="#">Education</a>
                </li>
                <li>
                  <a href="#">Environment</a>
                </li>
                <li>
                  <a href="#">Inclusion and Diversity</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Racial Equity and Justice</a>
                </li>
                <li>
                  <a href="#">Supply Chain</a>
                </li>
                <br />
                <p className="font-bold text-black">About Apple</p>
                <li>
                  <a href="#">Newsroom</a>
                </li>
                <li>
                  <a href="#">Apple Leadership</a>
                </li>
                <li>
                  <a href="#">Career Opportunities</a>
                </li>
                <li>
                  <a href="#">Investors</a>
                </li>
                <li>
                  <a href="#">Ethics & Compliance</a>
                </li>
                <li>
                  <a href="#">Events</a>
                </li>
                <li>
                  <a href="#">Contact Apple</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-links mt-[1%] pb-[1%] ml-[11%] text-[13px] text-neutral-600">
            More ways to shop:{" "}
            <a href="#" className="text-blue-700 underline">
              Find an Apple Store
            </a>{" "}
            or{" "}
            <a href="#" className="text-blue-700 underline">
              other retailer
            </a>{" "}
            near you. Or call 1‑800‑MY‑APPLE
          </div>

          {/* <hr className="ml-[11%] mr-[15%]" /> */}

          <div className="footer-links flex flex-row gap-[20px] mt-[1%] pb-[1%] ml-[11%] text-[13px] text-neutral-600">
            Copyright © 2024 Apple Inc. All rights reserved
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            |
            <a href="#" className="hover:underline">
              Terms of Use
            </a>
            |
            <a href="#" className="hover:underline">
              Sales and Refunds
            </a>
            |
            <a href="#" className="hover:underline">
              Legal
            </a>
            |
            <a href="#" className="hover:underline">
              Site Map
            </a>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default Footer;
