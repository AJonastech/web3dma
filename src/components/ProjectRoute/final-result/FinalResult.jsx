import AnimateHeader from "../../ui/AnimateHeader";
import "../../Hero/style.css";
import GalleryContainer from "./Gallery";

//import { motion } from "framer-motion";

function FinalResult() {

  return (
    <>
    <section id="projects" className="w-full snap-center relative">
      <section className="container mt-[100px] lg:mt-[80px] mx-auto px-3  bg-blend-soft-light bg-inherit text-[#fff]">
        <section className="max-w-[1440px]  mx-auto lg:py-[160px] text-white px-5 lg:px-12 relative">
          <div className="flex flex-col mb-[100px] lg:mb-0 items-center  relative">
            <AnimateHeader
              delay={0.15}
              text={"The"}
              className={
                "font-poppins text-white z-20 text-center uppercase text-3xl lg:text-[37.96px] lg:leading-[42.04px] font-semibold "
              }
            />
            <AnimateHeader
              delay={0.3}
              text={"Final"}
              size={"large"}
              className={
                "font-poppins text-white z-20 text-center uppercase text-7xl absolute top-6  lg:text-[94.23px] lg:leading-[104.36px] font-extrabold"
              }
            />
            <AnimateHeader
              delay={0.45}
              text={"Result"}
              className={
                "font-poppins text-white z-20 text-center uppercase text-5xl  mt-12 lg:mt-16  lg:leading-[56.66px] font-bold"
              }
            />
          </div>
          <div className="mt-5 lg:mt-[180px]    space-y-[60px] mx-auto  h-full">
            <GalleryContainer/>
            
          </div>
        </section>
      </section>
    </section>
   
    </>
  );
}

export default FinalResult;
