import { useScroll, useTransform , useMotionValueEvent} from "framer-motion";

function useCustomScroll(targetRef) {
 
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest)
  })
  const scaleObject = useTransform(scrollYProgress, [1, 0.6, 0], [0.6, 1, 0.6]);
  const opacity = useTransform(
    scrollYProgress,
    [1, 0.8, 0.6, 0.4, 0],
    [0.6, 1, 1, 1, 0.6]
  );
  return { scaleObject, opacity };
}


export default useCustomScroll;
