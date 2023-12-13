import AnimateHeader from "../../ui/AnimateHeader";
import solana from "../../../assets/solana.svg";
import ListService from "../../services/ListService";
import { useParams } from "react-router-dom";
import { dataSection5 } from "../../../mockData";
import ellipse from "../../../assets/Ellipse.svg"
function ServiceOffered() {
  const { category, id } = useParams();
  const targetedProject = dataSection5[category][id];
  const {
    service_features: features,
    service_description: description,
    service_Category: title,
  } = targetedProject;
  const data = {
    title,
    description,
    features,
  };
  console.log(targetedProject,data)
  return (
    <section
      id="services"
      className={`container  snap-center z-30 mt-[100px] lg:mt-[150px] flex flex-col items-center justify-center mx-auto lg:px-6 px-3 bg-inherit text-[#fff]`}
    >
      <div className="font-poppins relative w-full">
        <img
          className="absolute w-[1000px] mx-auto left-[50%] translate-x-[-50%]  -top-[200px]"
          src={ellipse}
        />
        <div className="flex  flex-col items-center relative">
          <AnimateHeader
            delay={0.15}
            text={"Our"}
            className={
              "font-poppins text-white z-20 text-center uppercase text-3xl lg:text-[37.96px] lg:leading-[42.04px] font-semibold "
            }
          />
          <AnimateHeader
            delay={0.3}
            size="large"
            text={"Service"}
            className={
              "font-poppins text-white z-20 text-center uppercase text-7xl absolute top-6  lg:text-[94.23px] lg:leading-[104.36px] font-extrabold"
            }
          />
          <AnimateHeader
            delay={0.45}
            text={"Offered"}
            className={
              "font-poppins text-white z-20 text-center uppercase text-5xl  mt-12 lg:mt-16  lg:leading-[56.66px] font-bold"
            }
          />
        </div>
        <div className="absolute top-[-90px] lg:right-[-60px] right-[-50px]">
          <img src={solana} alt="solana image" className="w-[175px] hidden" />
        </div>
      </div>

      <div className="relative w-full mt-[200px] ">
        <img
          src={targetedProject?.service_image}
          alt="Default Alt Text"
          className="lg:absolute xl:max-w-[400px]  max-w-[350px] -top-[50px] lg:mt-0 mt-[-100px] mb-10 lg:mb-0 left-[50px] z-20 mx-auto "
        />
        <div className="h-auto bg-[url('./assets/bg_mobile.png')]   relative lg:h-[489px]  w-full bg-no-repeat bg-cover rounded-[40px] grid grid-cols-1 lg:grid-cols-[45%_55%]">
          <div className="lg:grid lg:grid-cols-2" />
          <ListService data={data} />
        </div>
      </div>
    </section>
  );
}

export default ServiceOffered;
