 import React from "react";
 import appleIcon from '../images/apple-icon.png';
 import appleSearch from '../images/apple-search.png'
 import appleBag from '../images/apple-bag.png';

 function Sample() {
    return (
      <>
      <nav>
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
</>
    )
  }
  export default Sample