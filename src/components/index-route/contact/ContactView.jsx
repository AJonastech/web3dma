import Input from './Input';
import contact from '../../../assets/contact.svg';
import Button from '../Hero/Button';
import AnimateHeader from '../../ui/AnimateHeader';
import { easeOut, motion } from 'framer-motion';
import { AiOutlineMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';
function ContactView() {
  return (
    <section
      className='   mt-[230px] relative px-3 lg:px-0 text-[#fff]'
      id='contact'
    >
      <div className='absolute  lg:-top-72 -right-12 lg:right-0'>
        <img src={contact} />
      </div>
      <div className='max-w-[1029px] mx-auto'>
        <div className='relative h-[120px]'>
          <AnimateHeader
            type={'left'}
            className='font-poppins text-white uppercase font-semibold text-3xl lg:leading-[44.08px] lg:text-[39.8px] tracking-[-2%]'
            text={'Get in touch'}
            delay={0.15}
          />
          <AnimateHeader
            text={'With us now'}
            type={'left'}
            delay={0.25}
            className={
              'absolute top-8 font-poppins text-white text-cener uppercase font-extrabold text-5xl lg:leading-[66.19px] lg:text-[59.77px] tracking-[-2%]'
            }
          />
        </div>
        <motion.form
          viewport={{ once: true }}
          initial={{ y: 200 }}
          transition={{ delay: 0.2, ease: easeOut }}
          whileInView={{ y: 0 }}
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className='grid grid-cols-1  mt-[20px]  relative'
        >
          <div className='p-5 lg:p-[52px] space-y-2 max-w-[685px] w-full rounded-md bg-gradient-to-b to-[#fff] via-white from-[#00EAFF]'>
            <Input type={'text'} placeholder={'name'} />
            <Input type={'email'} placeholder={'email'} />
            <Input type={'text'} placeholder={'Subject'} />
            <textarea
              rows={5}
              className='py-3 outline-none focus:border-[2px] border-purple text-[#000] px-6 w-full rounded-[5px]'
              placeholder='Your Message'
            />
            <Button name={'Submit'} type={'formType'} />
          </div>
        </motion.form>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 mt-[52px]'>
          <div className="bg-[url('./assets/Frame2.png')] bg-no-repeat bg-cover bg-center h-[229px] px-[44px] py-[50px] text-white leading-8 font-dmsans font-medium space-y-[22px]">
            <div className='flex items-center gap-x-[18px] '>
              <div className='w-[64px] h-[64px] rounded-full bg-[#0C0C30] flex justify-center items-center'>
                <AiOutlineMail className='text-2xl' />
              </div>

              <p className='text-[20px]'> {'Email'}</p>
            </div>

            <p className='text-[22px]'>
              {<Link to={'mailto:matt@apfome.com'}>Enquire today</Link>}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactView;
