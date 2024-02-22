import Image from "next/image";
import gJeneraSON from "../../../../assets/gJeneraSon.png";
import "./NavBar.css";
export default function NavBar() {
  return (
    <>
      <div className="flex justify-between m-4">
        <div className="flex items-center">
          <Image src={gJeneraSON} className="w-12 ml-4" alt="gJeneraSON" />
          <span className="text-[25px] ml-4">eraSON</span>
        </div>
        <div className="flex justify-end">
          <div className="w-12 h-12 rounded-full bg-white"></div>
        </div>
      </div>
    </>
  );
}
