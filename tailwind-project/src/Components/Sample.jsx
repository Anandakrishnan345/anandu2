 import React from "react";
 import appleIcon from '../images/apple-icon.png';
 import appleSearch from '../images/apple-search.png'
 import appleBag from '../images/apple-bag.png';
 import apple15pro from'../images/15pro.jpg';
 import iphone15 from '../images/apple2.jpg';
 import macbookpro from '../images/macbookpronew.jpg';
 import iphone15pro from '../images/15pro.jpg';
 import apple2 from '../images/apple2.jpg';

 function Sample() {
    return (
      <>
      <nav className="sticky top-0 z-50">
      <div className=" flex justify-center  bg-Navcolor py-3">
          <div className="flex justify-center justify-items-center space-x-4 bg-Navcolor flex-wrap">
               <div className="apple-icon"><img src={appleIcon} alt="" width="20px" height="20px"/></div>
              <div className="store text-NavtextColor">Store</div>
              <div className="mac text-NavtextColor">Mac</div>
              <div className="ipad text-NavtextColor">iPad</div>
              <div className="iphone text-NavtextColor">iPhone</div>
              <div className="watch text-NavtextColor">Watch</div>
              <div className="vision text-NavtextColor">Vision</div>
              <div className="airpods text-NavtextColor">Airpods</div>
              <div className="tvandHome text-NavtextColor">Tv & Home</div>
              <div className="entertainments text-NavtextColor">Entertainments</div>
              <div className="accessories text-NavtextColor">Accessories</div>
              <div className="support text-NavtextColor">Support</div>
              <div className="bag"><img src={appleSearch} alt="" width="20px" height="20px"/></div>
              <div className="search"><img src={appleBag} alt="" width="20px" height="20px"/></div>
                  
           </div>
      </div>
  </nav>
   <div className="ribbon flex justify-center bg-ribbonbg py-2"><p className="p1 text-ribbonp1">Save up to ₹10000.00 instantly on eligible products with HDFC Bank Credit Cards. Plus No Cost EMI from most leading banks</p>
   <p className="p2 text-ribbonp2 ">*Shop now</p>
</div>
<div className="main">
 
       <div className="macpro h-full relative bg-black ">
    <div className="odd1 absolute top-0 left-0 right-0 flex flex-col justify-center items-center text-center z-10 ">
        <div className="titan text-5xl text-white pt-5">iPhone 15 pro </div>
        <div className="titan2 text-xl text-white py-2">New camera.New design.New phoria</div>
       <div>
        <button className=" border-0 text-2xl text-blue">Learn more{'>'}</button>
        <button className=" border-0 text-2xl text-blue">&nbsp;&nbsp;Buy{'>'} </button></div>
    </div>
    <div className="pics3 relative z-0 pt-32 ">
        <img src={apple15pro} alt="" className="w-full h-full object-cover" />
    </div>
</div>
<div className="macpro h-full relative bg-white  ">
    <div className="odd1 absolute top-0 left-0 right-0 flex flex-col justify-center items-center text-center z-10 ">
        <div className="titan text-5xl text-black pt-5">iPhone 15 pro </div>
        <div className="titan2 text-xl text-black py-2">Titanium.So strong.So light.So pro</div>
       <div>
        <button className=" border-0 text-2xl text-blue">Learn more{'>'} </button>
        <button className=" border-0 text-2xl text-blue">&nbsp;&nbsp;Buy{'>'} </button></div>
    </div>
    <div className="pics3 relative z-0 pt-32">
        <img src={iphone15} alt="" className="w-full h-full object-cover" />
    </div>
</div>
    <div className="macpro h-full relative">
    <div className="odd1 absolute top-0 left-0 right-0 flex flex-col justify-center items-center text-center z-10 ">
        <div className="titan text-5xl pt-5">MacBook pro </div>
        <div className="titan2 text-xl py-2">Mind-blowing.Head-turning</div>
        <div className="text-xl">Available from 7 November</div>
        <div>
        <button className=" border-0 text-2xl text-blue">Learn more{'>'} </button>
        <button className="border-0 text-2xl text-blue">&nbsp;&nbsp;Buy{'>'} </button></div>
    </div>
    <div className="pics3 relative z-0 pt-52">
        <img src={macbookpro} alt="" className="w-full h-full object-cover" />
    </div>
</div>


<div className="flex relative pt-2">
    <div className="w-1/2 pic bg-black">
        <div className="pics1 relative">
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-center z-10">
                <div className="titan text-3xl text-white">iPhone 15 pro</div>
                <div className="titan2 text-xl text-white">Titanium. So strong. So light. So pro</div>
                <div>
                <button className="bg-black border-0 text-2xl text-blue">Learn more </button>
                <button className="bg-black border-0 text-2xl text-blue">&nbsp;&nbsp;Buy </button></div>
            </div>
            <img src={iphone15pro} alt="" className="w-full h-96 pt-56" />
        </div>
    </div>
    <div className="w-1/2 pic bg-white h-full">
        <div className="pics2 relative ">
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-center z-10">
                <div className="titan text-3xl">iPhone 15</div>
                <div className="titan2 text-xl">New camera. New design. New phoria</div>
                <div>
                <button className="border-0 text-2xl text-blue">Learn more </button>
                <button className="border-0 text-2xl text-blue">&nbsp;&nbsp;Buy </button></div>
            </div>
            <img src={apple2} alt="" className="w-full h-full pt-56" />
        </div>
    </div>
</div>



</div>
<div className="container4 flex justify-center mx-8 py-8">
        <div className="subcontainer4 ">
            <p className="text-xs flex justify-center">*Instant savings, otherwise referred to as instant cashback, is available on the Apple Store Online and Apple Retail Stores with the purchase of an eligible product with qualifying HDFC Bank Credit Cards and EasyEMI Credit Cards only from 15 October 2023 to 14 November 2023, with the exception of iPhone 14 and iPhone 14 Plus, and AirPods Pro (2nd generation), which will have instant savings applicable between 15 October 2023 and 7 November 2023 only. Minimum transaction value of ₹10001.00 applies. Click here to see instant savings amounts and eligible devices. Instant savings are available for up to two orders per rolling 90-day period with an eligible card. Card eligibility is subject to terms and conditions between you and your card-issuing bank. Total transaction value is calculated after any trade-in credit or eligible discount is applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant savings being recalculated, and any refund may be adjusted to account for instant savings clawback; this may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice. Additional terms apply. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders cannot be combined for instant savings.
</p>          
<br />
            <p className="text-xs flex justify-center">No Cost EMI is available with the purchase of an eligible product made using eligible cards on 3- or 6-month tenures from most leading banks. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your bank, subject to your bank’s terms and conditions. Minimum order spend applies as per your card-issuing bank threshold. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card-issuing bank. Offer may be revised or withdrawn at any time without any prior notice. Additional terms apply.</p>
         <br />
            <p className="text-xs ">Representative example: Based off a 6-month tenure. ₹79900.00 total cost includes 15% p.a. and No Cost EMI savings of ₹3380.00, paid over 6 months as six monthly payments of ₹13317.00</p>
           <br />
            <p className="text-xs">A subscription is required for Apple TV+.</p>
            
        </div>
    </div>

    <div className="container5">
    <div className="subcontainer5 flex flex-wrap justify-around">
        <div className="big mb-4">
            <div className="font-bold">Shop and Learn</div>
            <a href="" className="block my-1">Store</a>
            <a href="" className="block my-1">Mac</a>
            <a href="" className="block my-1">iPad</a>
            <a href="" className="block my-1">iPhone</a>
            <a href="" className="block my-1">Watch</a>
            <a href="" className="block my-1">AirPods</a>
            <a href="" className="block my-1">TV & Home</a>
            <a href="" className="block my-1">AirTag</a>
            <a href="" className="block my-1">Accessories</a>
            <a href="" className="block my-1">Gift Cards</a>
            <div>Apple Wallet</div>
            <a href="" className="block my-1">Wallet</a>
        </div>
        <div className="big mb-4">
            <div className="font-bold">Account</div>
            <a href="" className="block my-1">Manage Your Apple ID</a>
            <a href="" className="block my-1">Apple Store Account</a>
            <a href="" className="block my-1">iCloud.com</a>
            <div>Entertainment</div>
            <a href="" className="block my-1">Apple One</a>
            <a href="" className="block my-1">Apple TV+</a>
            <a href="" className="block my-1">Apple Music</a>
            <a href="" className="block my-1">Apple Arcade</a>
            <a href="" className="block my-1">Apple Podcasts</a>
            <a href="" className="block my-1">Apple Books</a>
            <a href="" className="block my-1">App Store</a>
        </div>
        <div className="big mb-4">
            <div className="font-bold">Apple Store</div>
            <a href="" className="block my-1">Find a Store</a>
            <a href="" className="block my-1">Genius Bar</a>
            <a href="" className="block my-1">Today at Apple</a>
            <a href="" className="block my-1">Apple Camp</a>
            <a href="" className="block my-1">Apple Trade In</a>
            <a href="" className="block my-1">Ways to Buy</a>
            <a href="" className="block my-1">Recycling Programme</a>
            <a href="" className="block my-1">Order Status</a>
            <a href="" className="block my-1">Shopping Help</a>
        </div>
        <div className="big mb-4">
            <div className="font-bold">For Business</div>
            <a href="" className="block my-1">Apple and Business</a>
            <a href="" className="block my-1">Shop for Business</a>
            <div>For Education</div>
            <a href="" className="block my-1">Apple and Education</a>
            <a href="" className="block my-1">Shop for Education</a>
            <a href="" className="block my-1">Shop for University</a>
            <div>For Healthcare</div>
            <a href="" className="block my-1">Apple in Healthcare</a>
            <a href="" className="block my-1">Health on Apple Watch</a>
        </div>
        <div className="big mb-4">
            <div className="font-bold">Apple Values</div>
            <a href="" className="block my-1">Accessibility</a>
            <a href="" className="block my-1">Education</a>
            <a href="" className="block my-1">Environment</a>
            <a href="" className="block my-1">Privacy</a>
            <a href="" className="block my-1">Supplier Responsibility</a>
            <div>About Apple</div>
            <a href="" className="block my-1">Newsroom</a>
            <a href="" className="block my-1">Apple Leadership</a>
            <a href="" className="block my-1">Career Opportunities</a>
            <a href="" className="block my-1">Investors</a>
            <a href="" className="block my-1">Ethics & Compliance</a>
            <a href="" className="block my-1">Events</a>
            <a href="" className="block my-1">Contact Apple</a>
        </div>
    </div>
    <div className="lower text-center mt-4">
        More ways to shop: <a href="" className="text-blue-500">Find an Apple Store</a> or <a href="" className="text-blue-500">other retailer near you</a>. Or call 000800 040 1966.
    </div>
</div>


</>
    )
  }
  export default Sample