import { BiLogoInstagramAlt } from "react-icons/bi";
import logo from "../../../assets/logo.svg";
import { motion } from "framer-motion";
import { IoLogoTwitter } from "react-icons/io"
export default function Footer() {
  return (
    <footer className="mt-[200px] ">
      <div className="h-[13px] animate-gradient"></div>

      <div className="bg-[url('./assets/bg_footer.png')] bg-cover bg-no-repeat bg-center">
        <section className="px-3 lg:px-20 w-full mx-auto flex flex-col items-center justify-center h-[200px] gap-y-5">
          <div className="flex w-full justify-center items-center cursor-pointer gap-1 text-[#fff]">
            <img src={logo} alt="web3Dma logo" />
            <span className="text-2xl font-semibold tracking-wide">
              Web3dma
            </span>
          </div>

          <div className="mt-[58px] flex justify-center gap-x-3">
            <motion.a
            whileHover={{translateY:-5}}
              className="w-[40px] h-[40px] hover:bg-purple  text-primary hover:text-[#fff] cursor-pointer rounded-full bg-[#fff] flex items-center justify-center"
              href="https://twitter.com/web3dma"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoTwitter className="text-lg" />
            </motion.a>

            <motion.a
              whileHover={{translateY:-5}}
              className="w-[40px] h-[40px] hover:bg-purple  text-primary hover:text-[#fff] cursor-pointer rounded-full bg-[#fff] flex items-center justify-center"
              href="https://www.instagram.com/web3dma"
              target="_blank"
              rel="noreferrer"
            >
              <BiLogoInstagramAlt className="text-lg" />
            </motion.a>
          </div>
        </section>
      </div>

      <div className="text-sm leading-[21px] text-[#fff] font-dmsans text-center py-3">
        <p>© web3dma {new Date().getFullYear()} - all rights reserved</p>
      </div>
    </footer>
  );
}
