import React, { useEffect } from 'react';
import '../App.css';

function Footer() {
     

  return (
    <>
    <div className="footer min-h-[100vh] px-[40px] bg-[black] relative overflow-hidden flex justify-between items-center">
        <div className="text-white font-['Pp_Neue_Machina']">
            <h4 className="text-[30px]">Home</h4>
            <h4 className="text-[30px]">Solution</h4>
            <h4 className="text-[30px]">About</h4>
            <h4 className="text-[30px]">Team</h4>
        </div>
        <div>
            <p className="text-white font-['Pp_Neue_Machina'] text-[30px] w-[345px]">Join our mailing list for
                the latest updates.</p>
        <div className="flex justify-center gap-[20px] --translate-y-1/2">
            <input className="h-[60px] w-[350px] px-[15px]" type="email" name="" id="" placeholder="Enter your emial address..."/>
            <button className="h-[60px] px-[40px] text-[18px] bg-[#F5F19C] font-semibold">Subscribe</button>
        </div>
    </div>
        <div className="text-white font-['Pp_Neue_Machina']">
            <h4 className="text-[30px]">Newsroom</h4>
            <h4 className="text-[30px]">Insights</h4>
            <h4 className="text-[30px]">Resources</h4>
            <h4 className="text-[30px]">Contact</h4>
            <h4 className="text-[30px]">Careers</h4>
        </div>
        <div className="w-[100%] text-center absolute bottom-[-30%]">
        <h1 className="text-[white] font-['Pp_Neue_Machina'] text-[19rem] flex">
            <p className=" single text-[white] font-['Pp_Neue_Machina'] text-[19rem]">S</p>
            <p className=" single text-[white] font-['Pp_Neue_Machina'] text-[19rem]">i</p>
            <p className=" single text-[white] font-['Pp_Neue_Machina'] text-[19rem]">g</p>
            <p className=" single text-[white] font-['Pp_Neue_Machina'] text-[19rem]">n</p>
            <p className=" single text-[white] font-['Pp_Neue_Machina'] text-[19rem]">i</p>
            <p className=" single text-[white] font-['Pp_Neue_Machina'] text-[19rem]">f</p>
            <p className=" single text-[white] font-['Pp_Neue_Machina'] text-[19rem]">i</p>
            <p className=" single text-[white] font-['Pp_Neue_Machina'] text-[19rem]">c</p>
            <p className=" single text-[white] font-['Pp_Neue_Machina'] text-[19rem]">o</p>
            {/* <!-- Signific --> */}
        </h1>
    </div>
</div>
<div className="footer-bottom h-[120px] w-[100%] flex items-center justify-between px-[40px] bg-[black] border-t border-t-[2px] border-t-[white]">
    <p className="text-[white]">Privacy Policy</p>
    <p className="text-[white]">© 2024 Significo. All rights reserved.</p>
    <p className="text-[white]">Privacy Policy</p>
    </div>
    </>
  );
}

export default Footer;
