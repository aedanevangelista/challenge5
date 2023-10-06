import nftImg from "./assets/images/image-equilibrium.jpg";
import ethereumSVG from "./assets/images/icon-ethereum.svg";
import clockSVG from "./assets/images/icon-clock.svg";
import viewSVG from "./assets/images/icon-view.svg";
import displayPicture from "./assets/images/image-avatar.png";
function App() {
  return (
    <>
      <div className="bg-[#0d1a2d] min-h-screen flex justify-center items-center">
        <main className="w-[300px] h-auto p-5 rounded-xl bg-[#18243c] flex flex-col">
          <div className="group">
            <img
              src={viewSVG}
              alt=""
              className="cursor-pointer group-hover:block hidden absolute p-[106px] rounded-lg bg-[#04fcf1]/50"
            />
            <img
              src={nftImg}
              alt=""
              className="cursor-pointer rounded-lg group"
            />
          </div>

          <h1 className=" cursor-pointer hover:text-[#04fcf1] text-white text-xl  font-semibold my-4">
            Equilibrium #3429
          </h1>
          <p className="text-slate-400 my-4">
            Our Equilibrium collection promotes balance and calm.
          </p>
          <div className="border-b border-slate-700 flex flex-row items-center justify-between">
            <span className="flex flex-row text-[#04fcf1] items-center">
              <img src={ethereumSVG} className="w-3 mr-2" alt="" />
              0.041 ETH
            </span>
            <span className="flex flex-row my-4 text-slate-400 items-center">
              <img src={clockSVG} alt="" className="w-4 mr-1" />3 days left
            </span>
          </div>
          <div className="flex flex-row items-center mt-4">
            <img
              src={displayPicture}
              alt=""
              className="w-8 border-white rounded-full border"
            />
            <article className="flex flex-row text-sm">
              <p className="text-slate-400 ml-3 mr-2">Creation of</p>
              <p className="text-white cursor-pointer hover:text-[#04fcf1]">
                Juels Wyvern
              </p>
            </article>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
