import PropTypes from "prop-types"
import FeatureItem from "./FeatureItem"
function ListService({data}) {
   
    return (
        
        <div  className="flex flex-col justify-center space-y-[21px] max-w-[545px] p-5 lg:p-0">
        <h3 className="text-[28px] leading-[42px] font-semibold tracking-[-2%] font-poppins text-white">
          {data?.title}
        </h3>
        <p className="text-white opacity-70 font-dmsans text-lg">
        {data?.description}
        </p>

        <div className="!mt-[26px] space-y-[21px]">
          {data?.features?.map((feature, index) => (
            <FeatureItem key={index} feature={feature} />
          ))}
        </div>
      </div>
    )
}
ListService.propTypes = {
    data: PropTypes.object
}
export default ListService
