import solana from '../../../assets/solana.svg';
import servicesBorder from '../../../assets/ServicesBorder.png';
import ServiceButton from './ServiceButton';
import {
  servicesData as data,
  serviceButtonData as servicesData,
} from '../../../mockData';
import { useState, useEffect } from 'react';
import ListService from './ListService';
import ellipse from '../../../assets/Ellipse.svg';
import AnimateHeader from '../../ui/AnimateHeader';
import { useLocation } from 'react-router-dom';

function ServiceView() {
  const { pathname } = useLocation();
  const [selectedService, setSelectedService] = useState('websites');
  const [filteredServices, setFilteredServices] = useState(data.websites);

  const handleServiceChange = (service) => {
    setSelectedService(service.toLowerCase());
  };

  useEffect(() => {
    const newFilteredServices = data[selectedService];
    setFilteredServices(newFilteredServices);
  }, [selectedService]);

  return (
    <section
      id='services'
      className={`container  snap-center z-30 ${
        pathname == '/'
          ? 'mt-[100px] lg:mt-[500px]'
          : 'mt-[100px] lg:mt-[150px]'
      } flex flex-col items-center justify-center mx-auto lg:px-6 px-3 bg-inherit text-[#fff]`}
    >
      <div className='font-poppins relative w-full'>
        <img
          className='absolute w-[1000px] mx-auto left-[50%] translate-x-[-50%]  -top-[200px]'
          src={ellipse}
        />
        <div className='flex  flex-col items-center relative'>
          <AnimateHeader
            delay={0}
            text={'OUR PRIMARY'}
            className={
              'font-poppins text-white z-20 text-center uppercase text-3xl lg:text-[37.96px] lg:leading-[42.04px] font-semibold '
            }
          />
          <AnimateHeader
            delay={0.1}
            size='large'
            text={'AGENCY'}
            className={
              'font-poppins text-white z-20 text-center uppercase text-7xl absolute top-6  lg:text-[94.23px] lg:leading-[104.36px] font-extrabold'
            }
          />
          <AnimateHeader
            delay={0.2}
            text={'OFFERINGS'}
            className={
              'font-poppins text-white z-20 text-center uppercase text-5xl  mt-12 lg:mt-16  lg:leading-[56.66px] font-bold'
            }
          />
        </div>
        <div className='absolute top-[-90px] lg:right-[-60px] right-[-50px]'>
          <img src={solana} alt='solana image' className='w-[175px] hidden' />
        </div>
      </div>

      <div className='w-full  mt-[50px] h-[100px] relative '>
        <div className='h-full flex items-center justify-around max-w-[1000px] w-full left-[50%] translate-x-[-50%]  top-0 absolute '>
          {servicesData.map((service, id) => (
            <ServiceButton
              name={service.name}
              filter={selectedService}
              changeSelectedService={handleServiceChange}
              key={id}
            />
          ))}
        </div>
        <img src={servicesBorder} className='h-full w-full' alt='test' />
      </div>

      <div className='relative w-full mt-[200px] '>
        <img
          src={filteredServices.image}
          alt='Default Alt Text'
          className='lg:absolute  xl:max-w-[400px]  max-w-[350px] -top-[50px] lg:mt-0 mt-[-100px] mb-10 lg:mb-0 left-[50px] z-20 mx-auto object-cover object-center '
        />
        <div className="h-auto bg-[url('./assets/bg_mobile.png')]   relative lg:h-[489px]  w-full bg-no-repeat bg-cover rounded-[40px] grid grid-cols-1 lg:grid-cols-[45%_55%]">
          <div className='lg:grid lg:grid-cols-2' />
          <ListService data={filteredServices} />
        </div>
      </div>
    </section>
  );
}

export default ServiceView;
