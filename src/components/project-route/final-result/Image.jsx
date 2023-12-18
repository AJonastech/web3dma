import PropTypes from "prop-types";
import { motion } from "framer-motion";
function Image({ product }) {
  return (
   
    <motion.div
    viewport={{ once: true }}
      initial={{ y: 150 }}
      transition={{ duration: 0.5, delay: 0 }}
      whileInView={{ y: 0 }}
      className="h-[60vh]  container mx-auto max-w-[980px]  cursor-pointer w-full relative "
    >
      <img
        className="rounded-lg w-full h-full object-cover"
        alt={"portfolio project image"}
        src={product}
      />
      <motion.div
        whileHover={{ opacity: 0.1 }}
        className="absolute top-0 w-full h-full left-0 bg-[#000]/[0.2] rounded-lg"
      ></motion.div>
    </motion.div>
  
  );
}
Image.propTypes = {
  product: PropTypes.string,
};
export default Image;
