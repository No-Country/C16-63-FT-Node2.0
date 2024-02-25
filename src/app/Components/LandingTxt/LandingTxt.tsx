
import gJeneraSon from "../../../../assets/gJeneraSon.png";
import Image from "next/image";

export function LandingTxt(){
    return(
        <div className=" flex items-center my-[8%] sm:w-[100%]">
        <div className="w-[49%] sm:w-[100%]">
          <h3 className=" text-[#ECEDEE] text-[40px] pl-[15%] pr-[70px] mb-[10px]">
            ¡Bienvenidos a nuestro generador de JSONs!
          </h3>
          <h3 className="text-[#92929A] text-[20px] pl-[15%] pb-[20px] mt-0 text-justify">
            Aquí puedes crear JSON de forma gratuita y personalizada según tus
            necesidades. Simplemente completa los campos requeridos y genera tu
            JSON con un solo clic. ¡Fácil y rápido!
          </h3>
        </div>
        <Image src={gJeneraSon} className=" w-[400px] ml-[10%]" alt="gJeneraSON" />
      </div>
    )
}