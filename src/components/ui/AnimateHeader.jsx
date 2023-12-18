import PropTypes from "prop-types"
import {  motion, cubicBezier } from "framer-motion";
const eased = cubicBezier(0.65, 0, 0.35, 1)
function AnimateHeader({className, text, delay, type, size}) {
    return (
        <h2 className={`  ${className}   overflow-y-hidden bg-inherit `}>
        <motion.span viewport={{once:true}} transition={{duration:0.6, ease:eased, type:"tween",delay:delay}} initial={{y:(type ==="left" ?7 : size=="large" ?50: 30),opacity:0, rotate:(type ==="left" ?30 : 0)}} whileInView={{y:0,opacity:1, rotate:0}}  className="inline-block  origin-bottom-left">{text}</motion.span>
      </h2>
    )
}
AnimateHeader.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  delay: PropTypes.number,
  type: PropTypes.string,
  size:PropTypes.string
}
export default AnimateHeader
