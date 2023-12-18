import logo from "../../../assets/logo.svg" 
import hero from "../../../assets/hero.svg";
import web3Dma from "../../../assets/web3dmaHero.svg";
import { navData } from "../../../mockData";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import "./style.css";
import Button from "./Button";
import MobileNav from "./MobileNav";
import { useNavigate } from "react-router-dom";
function HeroView() {
const navigate = useNavigate()
  const [showMobileNav, setShowMobileNav] = useState(false)
  const toggleNav =()=> {
    setShowMobileNav(!showMobileNav)
  }
  
  return (
    <section
      id="hero"
      className="w-full overflow-hidden snap-center bg-blend-soft-light h-screen text-[#fff] font-poppins bg-inherit"
    >
      <div className="h-[13px] z-10 animate-gradient"></div>
      <div className="relative bg-inherit bg-blend-soft-light">
        <header className="flex h-[87px] justify-between items-center px-3  lg:px-12">
          <div onClick={()=>{navigate("/")}} className="flex cursor-pointer gap-1">
            <img src={logo} alt="web3Dma logo" />
            <span className="text-2xl font-semibold tracking-wide">
              Web3dma
            </span>
          </div>
          <nav className="hidden lg:block ">
            <ul className="flex gap-8">
              {navData.map((link, id) => (
                <li key={id}>
                  <a
                    className="text-base dmSans inline-block transition-all ease-out duration-200 hover:scale-[1.15]   hover:text-purple tracking-tighter font-normal"
                    href={link.linkRef}
                  >
                    {link.linkItem}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            {
                 showMobileNav ?<AiOutlineClose className="text-2xl lg:hidden" onClick={toggleNav}/> :  <AiOutlineMenu  onClick={toggleNav} className="text-2xl lg:hidden"/>
            }
           
            <Button name="Free quote" type="roundedFull" />
          </div>
        </header>
        <MobileNav setShowMobileNav={setShowMobileNav} showMobileNav={showMobileNav}/>
        <div className="relative px-3 lg:px-10 h-[calc(100vh-100px)]">
          <img
            src={web3Dma}
            className="absolute top-0 right-0"
          />
          <div className="flex flex-col items-center justify-center h-full">
            <img
              className="px-5 z-20"
              src={hero}
              alt="our services description"
            />
            <Button name="Get a free quote" type="heroType" />
          </div>
          <div className="absolute left-0 h-full w-full  top-0 flex z-0">
            <div className="relative w-full h-full">
              <div className=" bg-green animation-delay-2000 animate-blob blur-[70px] w-[200px] absolute top-0 h-[200px] filter opacity-[0.9]  mix-blend-multiply rounded-full"></div>
              <div className=" bg-purple animate-blob blur-[70px] w-[200px] top-0 absolute  opacity-[0.9] mix-blend-multiply left-[100px] h-[200px] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroView;
