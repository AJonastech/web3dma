
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
      className=" w-full  relative max-w-[980px]  mx-auto flex flex-col gap-y-10 cursor-auto  items-center   justify-center min-h-[60vh]  bg-[#111141] py-10"
    >
      <blockquote className="flex px-8  lg:px-8  flex-col gap-y-6 relative font-medium text-center lg:w-[80%] w-[100%]  mx-auto  text-base lg:text-xl lg:leading-[28px]">
        <img
          src={"/quote-left.svg"}
          className="h-[25px] w-[25px] -top-[25px] left-[15px]  sm:w-[30px] sm:h-[30px] sm:left-[15px] sm:-top-[30px]  lg:w-[50px] lg:h-[50px] lg:-top-[25px]  lg:-left-[25px]   object-cover absolute "
        />
        <span>{dataSection5[category][id].clientTestimonial}</span>
        <div className=" space-y-[8px] w-full">
        <div className="max-w-[300px] w-[80%] mx-auto h-[7px] animate-gradient "></div>
        <p className=" lg:text-2xl text-xl font-semibold w-full  text-center">
          {dataSection5[category][id].clientName}
        </p>
      </div>
        <img
          src={"/quote-right.svg"}
          className="w-[25px]  h-[25px] right-[15px] -bottom-[25px] sm:w-[30px] sm:h-[30px] sm:right-[15px] sm:-bottom-[30px]    absolute   lg:-right-[25px] lg:-bottom-[25px]  lg:w-[50px] lg:h-[50px] object-cover"
        />
      </blockquote>
   
    </motion.div>
    </>
  );
}

export default ClientTestimonial;
