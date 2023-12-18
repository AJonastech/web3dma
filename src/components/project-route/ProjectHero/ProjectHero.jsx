import logo from "../../../assets/logo.svg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import "../../index-route/Hero/style.css";
import MobileNav from "../../index-route/Hero/MobileNav";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { dataSection5 } from "../../../mockData";
import { useNavigate } from "react-router-dom";
import web3Dma from "../../../assets/web3dmaHero.svg";
function ProjectHero() {
  const { category, id } = useParams();
  const navigate = useNavigate();

  const [showMobileNav, setShowMobileNav] = useState(false);
  const toggleNav = () => [setShowMobileNav(() => !showMobileNav)];
  const headHome = () => {
    navigate("/");
  };
  return (
    <section
      id="hero"
      className="w-full overflow-hidden snap-center bg-blend-soft-light h-screen text-[#fff] font-poppins bg-inherit"
    >
      <div className="h-[13px] z-10 animate-gradient"></div>
      <div className="relative bg-inherit bg-blend-soft-light">
        <header className="flex h-[87px] justify-between items-center relative px-3 lg:px-12">
          <div onClick={headHome} className="flex z-20 cursor-pointer gap-1">
            <img src={logo} alt="web3Dma logo" />
            <span className="text-2xl font-semibold tracking-wide">
              Web3dma
            </span>
          </div>
          <nav className="hidden  h-full lg:flex items-center justify-center w-full absolute top-0 left-0  ">
            <ul className="flex justify-center ">
              <li>
                <Link
                  className="text-base dmSans hover:text-purple hover:scale-[1.15] duration-200 inline-block tracking-tighter font-normal transition-all ease-out"
                  to={"/"}
                >
                  Home
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            {showMobileNav ? (
              <AiOutlineClose
                className="text-2xl lg:hidden"
                onClick={toggleNav}
              />
            ) : (
              <AiOutlineMenu
                onClick={toggleNav}
                className="text-2xl lg:hidden"
              />
            )}
          </div>
        </header>
        <MobileNav showMobileNav={showMobileNav} />
        <div className="relative px-3 lg:px-10 font-poppins h-[calc(100vh-100px)] flex flex-col justify-center items-center">
          <img src={web3Dma} className="absolute top-0 right-0" />
          <p className="text-left  w-[90%] mx-auto text-[24px] lg:text-[36px] font-semibold lg:leading-[54px] text-green">
            Portfolio
          </p>
          <h1 className="w-[90%] mx-auto text-[48px] lg:text-[96px]  font-black lg:leading-[156px] tracking-tight ">
            {dataSection5[category][id].title}
          </h1>
          <div className="absolute left-0 h-full w-full  top-0 flex z-0">
            <div className="relative w-full h-full ">
              <div className=" bg-green animation-delay-2000 animate-blob blur-[70px] w-[200px] absolute top-0 h-[200px] filter opacity-[0.9]  mix-blend-multiply rounded-full"></div>
              <div className=" bg-purple animate-blob blur-[70px] w-[200px] top-0 absolute  opacity-[0.9] mix-blend-multiply left-[100px] h-[200px] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectHero;
