import logo from "../../assets/logo.svg";

function Loading() {
  return (
    <section className="w-full  flex flex-col items-center justify-center h-screen absolute top-0 bg-white bg-primary z-50">
      <div className="flex w-full justify-center items-center cursor-pointer gap-1 text-[#fff]">
        <img src={logo} alt="web3Dma logo" />
        <span className="text-2xl font-semibold tracking-wide">Web3dma</span>
      </div>
      <div className="w-[200px] overflow-x-hidden mt-3 h-[5px] rounded-full  bg-[#fff]">
        <div className="w-[70%] rounded-full animate-loader h-full bg- bg-gradient-to-r from-purple to-green"></div>
      </div>
    </section>
  );
}

export default Loading;
