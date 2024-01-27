import logo3d from '../../../assets/logo_3d.png';
import { motion } from 'framer-motion';
import DiamondProject from './DiamondProject';
import { DiamondProjectsData } from '../../../mockData';
import AnimateHeader from '../../ui/AnimateHeader';
import { cubicBezier } from 'framer-motion';
function AboutView() {
  const eased = cubicBezier(0.65, 0, 0.35, 1);
  return (
    <motion.section
      className='container snap-center mx-auto px-3  bg-blend-soft-light bg-inherit text-[#fff]'
      id='about'
    >
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0 }}
        viewport={{ once: true }}
        className='mb-12 mt-[50px]'
      >
        <AnimateHeader
          type={'left'}
          className='font-poppins font-semibold leading-[56px] text-5xl text-white uppercase'
          text={'who are'}
          delay={0}
        >
          Who are
        </AnimateHeader>
        <h2
          className={`font-poppins overflow-y-hidden  font-extrabold text-6xl lg:leading-[83.99px] lg:text-[75.84px] tracking-[-2%] `}
        >
          <motion.span
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: eased,
              type: 'tween',
              delay: 0.05,
            }}
            initial={{ y: 10, rotate: 30 }}
            whileInView={{ y: 0, rotate: 0 }}
            className='inline-block bg-clip-text  text-transparent bg-gradient-to-r from-[#9000F2] to-[#16DEA8] w-[420px] uppercase   text-gradient  bg-inherit  origin-bottom-left'
          >
            Web3Dma?
          </motion.span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className='relative h-auto lg:h-[489px] w-full mt-[30px] p-6 lg:py-[39px] lg:px-[79px] bg-[#131339] rounded-l-[10px] rounded-tr-[20px] lg:rounded-l-[40px] lg:rounded-tr-[133px] rounded-br-[14px] lg:rounded-br-[70px] '
      >
        <div className='relative w-full'>
          <img
            src={logo3d}
            alt='logo'
            className='absolute right-[-100px] top-[-42px] w-[50%] h-[495.69px] hidden lg:block'
          />
        </div>

        <motion.p
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.75 }}
          className='max-w-[525px] text-white font-dmsans text-xl leading-[35px]'
        >
          Web3dma is an innovative digital marketing agency with a focus on
          cutting-edge technologies. Transforming businesses to the next level
          through the use of technology is our passion, and we make it a reality
          for our clients by simplifying the complicated, crafting the
          unimaginable, and building the dream in the form of the most stunning
          and premium bespoke solutions.
        </motion.p>
        <AnimateHeader
          text={'Portfolio'}
          delay={0.1}
          className='mt-[60px] uppercase font-semibold font-poppins text-[34px] tracking-[-2%] leading-[42px] text-white'
        />

        <div className='mt-5  lg:mt-0 w-full lg:w-[865px] h-full grid grid-cols-1  lg:grid-cols-3 gap-[20px] z-10 lg:absolute bottom-[-350px]'>
          {DiamondProjectsData.map((diamondProject, id) => (
            <DiamondProject key={id} diamondProject={diamondProject} />
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}

export default AboutView;
