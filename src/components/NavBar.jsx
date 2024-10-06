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
            <a 
                    href="https://www.linkedin.com/in/shreyansh-dubey-4647222a7/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="LinkedIn"
                >
                    <FaLinkedinIn />
                </a>
                <a 
                    href="https://github.com/Shreyansh1005" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="GitHub"
                >
                    <FaGithub />
                </a>
                <a 
                    href="https://www.instagram.com/shreu_shreyansh/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Instagram"
                >
                    <FaInstagram />
                </a>
            </div>
        </nav>
    )

};

export default Navbar;


