import Image from "next/image";
import NavBar from "./Components/NavBar/NavBar";
import AllCards from "./Components/Cards";
import { LandingTxt } from "./Components/LandingTxt/LandingTxt";
import  Generator  from "./Components/Generator/Generator";

export default function Home() {
  return (
    <main className="">
      <div className="App">
        <NavBar />
        <LandingTxt/>
        <Generator />
        <AllCards />
      </div>
    </main>
  );
}
