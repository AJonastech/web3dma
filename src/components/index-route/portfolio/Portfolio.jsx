import { useEffect, useState } from 'react';
import Vector from '../../../assets/Vector.png';
import { dataSection5 as data } from '../../../mockData';
import Project from './Project';
import FilterButton from './FilterButton';
import AnimateHeader from '../../ui/AnimateHeader';
function Portfolio() {
  const [selectedService, setSelectedService] = useState('website');
  const [filteredServices, setFilteredServices] = useState(data.website);
  const filters = ['website', 'apps', 'social Media', 'branding'];
  const handleServiceChange = (service) => {
    setSelectedService(service);
  };

  useEffect(() => {
    const newFilteredServices = data[selectedService];
    setFilteredServices(newFilteredServices);
  }, [selectedService]);
  return (
    <section id='projects' className='w-full snap-center relative'>
      <section className='container mt-[100px] lg:mt-[80px] mx-auto  bg-blend-soft-light bg-inherit text-[#fff]'>
        <img
          src={Vector}
          alt='Vector'
          className='w-full  absolute left-0 border-10 top-[1100px] mx-auto  max-h-[1580.4208px] z-0'
        />
        <section className='container   mx-auto lg:py-[160px]  text-white  px-3 lg:px-12 relative'>
          <div className='flex flex-col items-center  relative'>
            <AnimateHeader
              delay={0}
              text={'See Our'}
              className={
                'font-poppins text-white z-20 text-center uppercase text-3xl lg:text-[37.96px] lg:leading-[42.04px] font-semibold '
              }
            />
            <AnimateHeader
              delay={0.1}
              text={'Recent'}
              size={'large'}
              className={
                'font-poppins text-white z-20 text-center uppercase text-7xl absolute top-6  lg:text-[94.2304px] lg:leading-[104.36px] font-extrabold'
              }
            />
            <AnimateHeader
              delay={0.2}
              text={'Projects'}
              className={
                'font-poppins text-white z-20 text-center uppercase text-5xl  mt-12 lg:mt-16  lg:leading-[56.6592px] font-bold'
              }
            />
          </div>
          <div className='mt-[28px]  lg:relative flex flex-wrap gap-5 lg:gap-0 lg:flex-nowrap justify-center text-[22.0592px] leading-[25.52px] tracking-[-2%] font-semibold'>
            {filters.map((filter, id) => (
              <FilterButton
                key={id}
                text={filter}
                onClick={handleServiceChange}
              />
            ))}
          </div>
          <div className=' mt-5 lg:mt-[180px] max-w-[980px]   mx-auto lg:space-y-[20px] space-y-[10px] '>
            {filteredServices?.map((project, id) => (
              <Project
                project={project}
                key={id}
                id={id}
                selectedService={selectedService}
              />
            ))}
          </div>
        </section>
      </section>
    </section>
  );
}
export default Portfolio;
