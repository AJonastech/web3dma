import PropTypes from "prop-types";
import { motion } from "framer-motion";
function Heading({ text, type }) {
  const variants = {
    small: "text-3xl lg:text-[37.96px] lg:leading-[42.04px] font-semibold",
    medium: "text-5xl  mt-12 lg:mt-16 lg:leading-[56.66px] font-bold",
    large: "text-7xl absolute top-6  lg:text-[94.23px] lg:leading-[104.36px] font-extrabold",
  };
  return (
    <motion.h1
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0 }}
      viewport={{ once: true }}
      className={`font-poppins text-white z-20 text-center uppercase    ${variants[type]} tracking-[-2%]`}
    >
      {text}
    </motion.h1>
  );
}
Heading.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
};
export default Heading;
