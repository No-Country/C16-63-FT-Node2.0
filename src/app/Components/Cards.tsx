import Card from "./Cards/Cards";
import gJeneraSon from "../../../assets/gJeneraSon.png";

import { FaBolt } from "react-icons/fa6";
import {
  MdMonetizationOn,
  MdOutlineLockOpen,
  MdTrendingUp,
} from "react-icons/md";

import Image from "next/image";
export default function AllCards() {
  return (
    <div className="mt-[2.5%] ">
      
      <div className="flex xl:flex-row justify-center mb-[25px] sm:flex-col sm:items-center ">
        <Card
          svg={<FaBolt />}
          title="Rapido"
          description="lorem ipsum es un texto de relllenno para tener algo de texto en un lugar"
        />
        <Card
          svg={<MdMonetizationOn />}
          title="Gratis"
          description="lorem ipsum es un texto de relllenno para tener algo de texto en un lugar"
        />
        <Card
          svg={<MdTrendingUp />}
          title="Facil"
          description="lorem ipsum es un texto de relllenno para tener algo de texto en un lugar"
        />
        <Card
          svg={<MdOutlineLockOpen />}
          title="Libre"
          description="lorem ipsum es un texto de relllenno para tener algo de texto en un lugar"
        />
      </div>
    </div>
  );
}

