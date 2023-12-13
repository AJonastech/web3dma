import PropTypes from "prop-types"

const FilterButton = ({ text, onClick }) => {
  
  const variants = {
    website: "lg:-rotate-[13.37deg] lg:left-[32%]",
    apps: "lg:rotate-[10deg] lg:left-[40.5%] top-5",
    socialMedia:"lg:-rotate-[22deg] lg:left-[46%] top-6",
    branding:"lg:rotate-[7deg] lg:left-[58%]"
  }
    return (
      <button
        className={`w-full capitalize lg:w-auto ${text == "social Media" ? variants.socialMedia :variants[text]} p-4  rounded-full lg:absolute  bg-[#35355B] hover:bg-gradient-to-l from-[#16DEA8] to-[#9000F2] `}
        onClick={ ()=>{text=="social Media" ? onClick("social") :onClick(text)}}
      >
        {text}
      </button>
    );
  };
FilterButton.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func
}
export default FilterButton
