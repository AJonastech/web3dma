import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useRef } from "react";
import useCustomScroll from "../../../hooks/useCustomScroll";
const buttonVariant = {
    rest: {
        x:0
    },
    hover:{
        x:10
    }
}
function Project({ project, id , selectedService}) {
  
  const projectRef = useRef(null)
 const {scaleObject, opacity} = useCustomScroll(projectRef)
 
  return (
    <a  href={`/project/${selectedService}/${id}`}>
      
    <motion.div
      ref={projectRef}
      initial={{ y: 150 }}
      style={{ scale: scaleObject, opacity: opacity }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0 }}
      whileInView={{ y: 0 }}
      className={`grid grid-cols-1  lg:grid-cols-2 snap-center`}
    >
      <div className="bg-[#CFCAD105]/[0.1]   h-[436.07px] flex flex-col justify-center  font-poppins px-[35px] backdrop-blur-[37px]">
        <motion.p
          whileHover={{ color: "#33d8b0" }}
          className="cursor-pointer text-[17.92px] leading-[20.91px]"
        >
          {project.subTitle}
        </motion.p>

        <motion.p
          whileHover={{ color: "#33d8b0" }}
          className="text-[35.84px] cursor-pointer leading-[43.31px] font-semibold mt-3"
        >
          {project.title}
        </motion.p>

        <motion.div
          initial="rest"
          whileHover="hover"
          animate="rest"
          className="mt-[42px] cursor-pointer hover:text-green  flex items-center gap-x-[5px]"
        >
          <p className="text-[13.44px] leading-[16.38px] font-medium">
            Case Study
          </p>
          <motion.button variants={buttonVariant} className="flex items-center">
            <AiOutlineArrowRight />
          </motion.button>
        </motion.div>
      </div>
      <motion.div
        className={`object-cover ${
          (id + 1) % 2 == 0 ? "row-start-1" : ""
        }  overflow-hidden cursor-pointer  h-[436.07px] bg-no-repeat bg-cover bg-center`}
      >
     <motion.div
    whileHover={{ scale: 1.05 }}
    style={{ 
        background: `url(${project.image}) no-repeat`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        opacity: opacity 
    }}
    className={`h-full w-full`}
></motion.div>
      </motion.div>
    </motion.div>
    </a>
  );
}
Project.propTypes = {
  project: PropTypes.object,
  invertRowStart: PropTypes.bool,
  id: PropTypes.number,
  selectedService: PropTypes.string
};
export default Project;
