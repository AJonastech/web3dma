
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { dataSection5 } from "../../../mockData";
import {  useRef } from "react";
import useCustomScroll from "../../../hooks/useCustomScroll";

function ClientTestimonial() {
 
  const { category, id } = useParams();
  const testimonialRef = useRef(null)
 

  const {scaleObject:scale} = useCustomScroll(testimonialRef)

 
  
  return (
    <>
  
    <motion.div
     ref={testimonialRef}
     style={{scale:scale}}
      viewport={{ once: true }}
      initial={{ y: 150 }}
      transition={{ duration: 0.5, delay: 0 }}
      whileInView={{ y: 0 }}
      className=" w-full  relative max-w-[980px]  mx-auto flex flex-col gap-y-10 cursor-auto  items-center px-5  justify-center min-h-[60vh] h-[60vh] bg-[#111141]"
    >
      <blockquote className="flex px-4 lg:px-8 relative font-medium text-center lg:w-[80%] w-[90%] mx-auto  text-base lg:text-2xl lg:leading-[40px]">
        <img
          src={"/quote-left.svg"}
          className="h-[25px] w-[25px] -top-[20px] -left-[20px]  sm:w-[30px] sm:h-[30px] sm:-left-[24px] sm:-top-[24px]  lg:w-[50px] lg:h-[50px] lg:-top-[40px]  lg:-left-[40px]   object-cover absolute "
        />
        <span>{dataSection5[category][id].clientTestimonial}</span>
        <img
          src={"/quote-right.svg"}
          className="w-[25px]  h-[25px] -right-[20px] -bottom-[20px] sm:w-[30px] sm:h-[30px] sm:-right-[24px] sm:-bottom-[24px]    absolute   lg:-right-[40px] lg:-bottom-[40px]  lg:w-[50px] lg:h-[50px] object-cover"
        />
      </blockquote>
      <div className=" space-y-[10px] w-full">
        <div className="max-w-[300px] w-[80%] mx-auto h-[7px] animate-gradient "></div>
        <p className=" lg:text-[36px] font-semibold w-full  text-center">
          Agu Jonas
        </p>
      </div>
    </motion.div>
    </>
  );
}

export default ClientTestimonial;
