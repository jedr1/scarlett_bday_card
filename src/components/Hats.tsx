import Carousel from "../shared/Carousel.tsx";
import Hat1 from "../assets/hat_1.jpg";
import Hat2 from "../assets/hat_2.jpg";
import Hat3 from "../assets/hat_3.jpg";
import Hat4 from "../assets/hat_4.jpg";
import Hat5 from "../assets/hat_5.jpg";
import Hat6 from "../assets/hat_6.jpg";
import Hat7 from "../assets/hat_7.jpg";
import Hat8 from "../assets/hat_8.jpg";
import Hat9 from "../assets/hat_9.jpg";

export default function Hats() {
  return (
    <div className={"h-[100vh] flex flex-col-reverse lg:flex-row gap-16 items-center justify-center"}>
      <div className={"text-center text-3xl font-bold"}>
        You've worn many hats
      </div>
      <div className={"w-full lg:w-[40vw]"}>
        <Carousel gapSize={"md"}>
          <img src={Hat1} className={"rounded-lg w-[400px] h-[400px] object-cover"} alt={"Hat 1"}/>
          <img src={Hat2} className={"rounded-lg w-[400px] h-[400px] object-cover"} alt={"Hat 2"}/>
          <img src={Hat4} className={"rounded-lg w-[400px] h-[400px] object-cover"} alt={"Hat 4"}/>
          <img src={Hat8} className={"rounded-lg w-[400px] h-[400px] object-cover"} alt={"Hat 8"}/>
          <img src={Hat5} className={"rounded-lg w-[400px] h-[400px] object-cover"} alt={"Hat 5"}/>
          <img src={Hat3} className={"rounded-lg w-[400px] h-[400px] object-cover"} alt={"Hat 3"}/>
          <img src={Hat6} className={"rounded-lg w-[400px] h-[400px] object-cover"} alt={"Hat 6"}/>
          <img src={Hat7} className={"rounded-lg w-[400px] h-[400px] object-cover"} alt={"Hat 7"}/>
          <img src={Hat9} className={"rounded-lg w-[400px] h-[400px] object-cover"} alt={"Hat 9"}/>
        </Carousel>
      </div>
    </div>
  )
}