import Image from "next/image";
import gJeneraSON from "../../../../assets/gJeneraSon.png";

export default function NavBar() {
  return (
    <>
      <div className="flex ml-[8%] m-4">
        <div className="flex items-center">
          <Image src={gJeneraSON} className="w-12 ml-4" alt="gJeneraSON" />
          <span className="text-[25px] ml-4">eraSON</span>
        </div>        
      </div>
    </>
  );
}
