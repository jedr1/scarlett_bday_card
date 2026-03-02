import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Polaroid from "../assets/polaroid.png";
import DiscoBall from "../assets/disco.png";
import Jellyfish from "../assets/jelly.png";
import Polaroid2 from "../assets/polaroid_2.png";

export default function Hero() {
  return (
    <div className={"text-center flex justify-center h-[100vh] items-center text-4xl lg:text-6xl font-bold"}>
      <img src={Polaroid} alt={"Polaroid"} className={"w-32 lg:w-36 rounded-lg absolute top-0 left-[6%] lg:left-[10%] rotate-[-10deg] mt-8"} />
      <img src={DiscoBall} alt={"Disco Ball"} className={"w-28 lg:w-32 rounded-lg absolute top-0 right-[10%] animate-swing"} />
      <img src={Jellyfish} alt={"Jellyfish"} className={"w-20 lg:w-24 rounded-lg absolute bottom-[12%] lg:bottom-[5%] left-[13%] animate-bounce-subtle"} />
      <img src={Polaroid2} alt={"Polaroid 2"} className={"w-32 lg:w-36 rounded-lg absolute rotate-[10deg] bottom-[10%] lg:bottom-[5%] right-[6%] lg:right-[10%]"} />
      Scarlett's Birthday Wrapped
      <FontAwesomeIcon icon={faChevronDown} className={"absolute bottom-0 mb-8 animate-pulse"} />
    </div>
  )
}