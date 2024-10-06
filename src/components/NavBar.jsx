// import KevinRushlogo from "../assets/KevinRushLogo.png";

import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Navbar = ()=>{
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
{/*             <
div className="flex flex-shrink-0 items-center">
                <img className = "mx-2 w-10" src={KevinRushlogo} alt="logo"/>
            </div> */}
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <FaLinkedinIn/>
                <FaGithub />
                <FaInstagram />
            </div>
        </nav>
    )

};

export default Navbar;


