import PropTypes from "prop-types";
import { motion } from "framer-motion";
function Button({ name, type }) {
  const variants = {
    roundedFull: " rounded-full py-2 px-9 hidden lg:block ",
    heroType:
      "lg:mt-[-100px] px-10 py-5 rounded-r-full rounded-tl-full mt-[30px]",
    formType:
      " py-[13px] w-full rounded-[5px] text-lg bg-gradient-to-l from-[#16DEA8] to-[#9000F2]",
  };
  return (
    <motion.button
      whileHover={type !== "formType" ? { translateY: -5 } : {}}
      className={`animate-gradient z-20   hover:shadow-lg font-dmsans  text-base font-medium tracking-tighter ${variants[type]}`}
    >
      {type !== "formType" ? <a href="mailto:matt@apfome.com">{name}</a> : name}
    </motion.button>
  );
}
Button.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
};
export default Button;
