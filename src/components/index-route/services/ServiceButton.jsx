import PropTypes from 'prop-types';
import { BsGlobe2 } from 'react-icons/bs';
import { RiSmartphoneLine } from 'react-icons/ri';
import { FaInstagram } from 'react-icons/fa';
import { VscSymbolColor } from 'react-icons/vsc';
import { FaChess } from 'react-icons/fa';
function ServiceButton({ name, changeSelectedService, filter }) {
  const getIconFromName = (iconName) => {
    switch (iconName) {
      case 'websites':
        return <BsGlobe2 />;
      case 'apps':
        return <RiSmartphoneLine />;
      case 'socials':
        return <FaInstagram />;
      case 'digitisation':
        return <VscSymbolColor />;
      case 'consulting':
        return <FaChess />;
    }
  };
  const icon = getIconFromName(name);
  return (
    <button
      onClick={() => {
        changeSelectedService(name);
      }}
      className={`${
        filter == name ? 'text-green' : 'text-[#fff]'
      } flex hover:text-green flex-col justify-center items-center gap-y-1`}
    >
      <p className='lg:text-4xl text-2xl '>{icon}</p>
      <small className='lg:text-[12px] text-[11px]'>{name}</small>
    </button>
  );
}
ServiceButton.propTypes = {
  name: PropTypes.string,
  changeSelectedService: PropTypes.func,
  filter: PropTypes.string,
};
export default ServiceButton;
