import PropTypes from "prop-types";
import { navData } from "../../../mockData";
import { useLocation } from "react-router-dom";

function MobileNav({ showMobileNav, }) {
  const { pathname } = useLocation();

  return (
    <>
       {showMobileNav && (
        <div className="bg-transaparent lg:hidden w-full absolute top-[100px] z-20     flex justify-center  py-2">
          {pathname == "/" ? (
            <ul className="flex flex-col items-center">
              {navData.map((link, id) => (
                <li className="mb-2" key={id}>
                  <a
                    className="text-base dmSans ease-out transition-all hover:text-purple tracking-tighter font-normal"
                    href={link.linkRef}
                  >
                    {link.linkItem}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <ul>
              {" "}
              <li className="mb-2">
                <a
                  className="text-base dmSans ease-out transition-all hover:text-purple tracking-tighter font-normal"
                  href={"/"}
                >
                  Home
                </a>
              </li>
            </ul>
          )}
        </div>
      )} 
   


  
   
   
    </>
  );
}
MobileNav.propTypes = {
  showMobileNav: PropTypes.bool,
};
export default MobileNav;
