import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { dataSection5 } from "../../../mockData";
function ClientTestimonial() {
  const { category, id } = useParams();

  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ y: 150 }}
      transition={{ duration: 0.5, delay: 0 }}
      whileInView={{ y: 0 }}
      className=" w-full relative max-w-[980px] mx-auto flex flex-col gap-y-10 items-center px-5  justify-center min-h-[60vh] h-[60vh] bg-[#111141]"
    >
      <blockquote className="flex relative lg:-mt-[20px] font-medium text-center lg:w-[80%] w-[90%] mx-auto  text-base lg:text-3xl lg:leading-[40px]">
        <img
          src={"/quote-left.svg"}
          className="w-[30px] absolute lg:-top-[60px] -top-[30px] lg:w-[60px] lg:h-[60px] h-[30px] object-cover"
        />
        <span>{dataSection5[category][id].clientTestimonial}</span>
        <img
          src={"/quote-right.svg"}
          className="w-[30px] absolute right-0 lg:-bottom-[60px] -bottom-[30px] lg:w-[60px] lg:h-[60px] h-[30px] object-cover"
        />
        <div className="absolute w-full -bottom-[90px] lg:-bottom-[130px] space-y-[10px]">
          <div className="max-w-[300px] w-[80%] mx-auto h-[7px] animate-gradient "></div>
          <p className=" lg:text-[36px] font-semibold w-full  text-center">
            Agu Jonas
          </p>
        </div>
      </blockquote>
    </motion.div>
  );
}

export default ClientTestimonial;
