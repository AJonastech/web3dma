import PropTypes from "prop-types"

function Input({placeholder, text}) {
    return (
        <input
        type={text}
        className="py-3 px-6 w-full text-[#000] outline-none focus:border-[2px] border-purple rounded-[5px]"
        placeholder={placeholder}
      />
)
}
Input.propTypes = {
    placeholder: PropTypes.string,
    text: PropTypes.string
}
export default Input
