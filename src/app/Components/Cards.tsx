import Card from "./Cards/Cards";
import gJeneraSon from "../../../assets/gJeneraSon.png";

import { FaBolt } from "react-icons/fa6";
import {
  MdMonetizationOn,
  MdOutlineLockOpen,
  MdTrendingUp,
} from "react-icons/md";

import "./Cards.css";
import Image from "next/image";
export default function AllCards() {
  return (
    <div className="CardsAndText">
      <div className="TxtImg">
        <div className="TextOnHome">
          <h3 className="OverAllText1">
            ¡Bienvenidos a nuestro generador de JSONs!
          </h3>
          <h3 className="OverAllText2">
            Aquí puedes crear JSON de forma gratuita y personalizada según tus
            necesidades. Simplemente completa los campos requeridos y genera tu
            JSON con un solo clic. ¡Fácil y rápido!
          </h3>
        </div>
        <Image src={gJeneraSon} className="GJCard" alt="gJeneraSON" />
      </div>
      <div className="flex w-[80%] mx-auto">
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
