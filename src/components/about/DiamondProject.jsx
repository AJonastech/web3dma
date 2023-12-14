import PropTypes from "prop-types";
import { motion } from "framer-motion";

function DiamondProject({ diamondProject }) {

 
  return (
    <motion.div
   
    whileHover={{scale:1.1}}
     
      style={{
 backgroundImage: `url(${diamondProject?.url})` }}
      className=" cursor-pointer  ease-out transition-all duration-200 bg-cover  bg-no-repeat bg-center w-full h-[419px] px-[26px] py-[29px] space-y-[18px] rounded-md"
    >
      <h2  className="font-extrabold font-poppins text-[75.84px] tracking-[-2%] leading-[64px] text-white text-end">
        {diamondProject?.number}
      </h2>

      <p className="font-bold font-dmsans text-[23.49px] tracking-[-2%] leading-[24.18px] text-white">
        {diamondProject?.type}
      </p>
    </motion.div>
  );
}
DiamondProject.propTypes = {
  diamondProject: PropTypes.object,
};
export default DiamondProject;
