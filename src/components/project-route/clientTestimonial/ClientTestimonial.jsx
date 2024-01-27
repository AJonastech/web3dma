import logo3d from "../../../assets/logo_3d.png";
import { motion } from "framer-motion";
import AnimateHeader from "../../ui/AnimateHeader";
import { useParams } from "react-router-dom";
import { dataSection5 } from "../../../mockData";
import { cubicBezier } from "framer-motion";

function ClientTestimonial() {

  

  const {category, id} = useParams()
  const eased = cubicBezier(0.65, 0, 0.35, 1)
  return (
    <motion.section
    
      className="container snap-center  mx-auto px-3  bg-blend-soft-light bg-inherit text-[#fff]"
      id="about"
    >
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0 }}
        viewport={{ once: true }}
        className="mb-12 mt-[50px]"
      >
        <AnimateHeader
          type={"left"}
          className="font-poppins font-semibold leading-[56px] text-5xl text-white uppercase"
          text={"The"}
          delay={0}
        />
      <h2 className={`font-poppins overflow-y-hidden  font-extrabold text-6xl lg:leading-[83.99px] lg:text-[75.84px] tracking-[-2%] `}>
        <motion.span viewport={{once:true}} transition={{duration:0.6, ease:eased, type:"tween",delay:0.05}} initial={{y:10, rotate:30}} whileInView={{y:0, rotate:0}}  className="inline-block bg-clip-text  text-transparent bg-gradient-to-r from-[#9000F2] to-[#16DEA8] w-[420px] uppercase   text-gradient  bg-inherit  origin-bottom-left">Client</motion.span>
      </h2>
     
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative h-auto  lg:min-h-[489px] w-full mt-[30px] p-6 lg:py-[39px] lg:px-[45px] bg-[#131339] rounded-l-[10px] rounded-tr-[20px] lg:rounded-l-[40px] lg:rounded-tr-[133px] rounded-br-[14px] lg:rounded-br-[70px] bg-[url('/bg_div.png')] bg-no-repeat bg-cover"
      >
        <div className="relative w-full">
          <img
            src={logo3d}
            alt="logo"
            className="absolute right-[-100px] top-[-42px] w-[50%] h-[495.69px] hidden lg:block"
          />
        </div>
          <div className="  justify-center   lg:justify-start   h-full flex  lg:items-center">
          <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.2, duration: 0.75 }}
    className="max-w-[600px] px-4 text-white font-dmsans text-base sm:text-lg lg:text-xl text-center sm:text-left leading-snug sm:leading-normal md:leading-relaxed"
    viewport={{once:true}}
>
    {
        dataSection5[category][id].clientTestimonial
    }
</motion.p>
          </div>
     

      </motion.div>
    </motion.section>
  );
}

export default ClientTestimonial;
