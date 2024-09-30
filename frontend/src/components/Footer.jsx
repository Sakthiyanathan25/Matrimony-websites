import React from 'react';

const Footer = () => {
  return (
    <footer className=" relative text-black pt-8 font-jost">
      <div className="container mx-auto px-4">
        <div className="flex justify-center flex-wrap gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">India</h3>
            <ul className='flex flex-col gap-2'>
              <li><a href="/usa" className="hover:text-yellow-500">USA</a></li>
              <li><a href="/canada" className="hover:text-yellow-500">Canada</a></li>
              <li><a href="/uk" className="hover:text-yellow-500">UK</a></li>
              <li><a href="/singapore" className="hover:text-yellow-500">Singapore</a></li>
              <li><a href="/australia" className="hover:text-yellow-500">Australia</a></li>
              <li><a href="/uae" className="hover:text-yellow-500">UAE</a></li>
              <li><a href="/nri" className="hover:text-yellow-500">NRI Matrimonials</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Trusted by Millions</h3>
            <ul className='flex flex-col gap-2'>
              <li><a href="/best-matches" className="hover:text-yellow-500">Best Matches</a></li>
              <li><a href="/verified-profiles" className="hover:text-yellow-500">Verified Profiles</a></li>
              <li><a href="/privacy" className="hover:text-yellow-500">100% Privacy</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
            <ul className='flex flex-col gap-2'>
              <li><a href="/member-login" className="hover:text-yellow-500">Member Login</a></li>
              <li><a href="/sign-up" className="hover:text-yellow-500">Sign Up</a></li>
              <li><a href="/partner-search" className="hover:text-yellow-500">Partner Search</a></li>
              <li><a href="/how-to-use" className="hover:text-yellow-500">How to Use Shaadi Tamil</a></li>
              <li><a href="/premium-memberships" className="hover:text-yellow-500">Premium Memberships</a></li>
              <li><a href="/customer-support" className="hover:text-yellow-500">Customer Support</a></li>
              <li><a href="/site-map" className="hover:text-yellow-500">Site Map</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className='flex flex-col gap-2'>
              <li><a href="/about-us" className="hover:text-yellow-500">About Us</a></li>
              <li><a href="/Shaadi-blog" className="hover:text-yellow-500">Shaadi Tamil Blog</a></li>
              <li><a href="/careers" className="hover:text-yellow-500">Careers</a></li>
              <li><a href="/awards-recognition" className="hover:text-yellow-500">Awards & Recognition</a></li>
              <li><a href="/contact-us" className="hover:text-yellow-500">Contact Us</a></li>
              <li><a href="/privacy-policy" className="hover:text-yellow-500">Privacy Policy</a></li>
              <li><a href="/terms-of-use" className="hover:text-yellow-500">Terms of Use</a></li>
            </ul>
          </div>
          <div className="">
          <h3 className="text-xl font-semibold mb-4">More</h3>
          <ul className="flex flex-col flex-wrap gap-4">
            <li><a href="/vip-Shaadi" className="hover:text-yellow-500">VIP Shaadi Tamil</a></li>
            <li><a href="/select-Shaadi" className="hover:text-yellow-500">Select Shaadi Tamil</a></li>
            <li><a href="/sangam" className="hover:text-yellow-500">Sangam</a></li>
            <li><a href="/Shaadi-centres" className="hover:text-yellow-500">Shaadi Tamil Centres</a></li>
            <li><a href="/success-stories" className="hover:text-yellow-500">Success Stories</a></li>
            <li><a href="/Shaadi-live" className="hover:text-yellow-500">Shaadi Tamil Live</a></li>
          </ul>
        </div>
        </div>
        
        {/* Footer Additional Section */}
       
       
      </div>
      <div className="mt-8 text-center bg-slate-500 h-14 ">
          <p className="text-sm pt-5">
            &copy; {new Date().getFullYear()} Shaadi Tamil. All rights reserved.
          </p>
        </div>
    </footer>
  );
};

export default Footer;
