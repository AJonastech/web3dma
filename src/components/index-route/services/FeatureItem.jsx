import PropTypes from "prop-types"
import check from '../../../assets/check.svg';
function FeatureItem({ feature }) {
    return (
      <div className="flex gap-x-[5px]" key={feature}>
        <img src={check} alt="checkmark" />
        <p className="text-base text-white font-medium">{feature}</p>
      </div>
    );
  }
  FeatureItem.propTypes = {
    feature : PropTypes.string
  }
  export default FeatureItem