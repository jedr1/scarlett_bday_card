import Carousel from "../shared/Carousel.tsx";
import Iteration1 from "../assets/iteration_1.JPG";
import Iteration2 from "../assets/iteration_2.JPG";
import Iteration3 from "../assets/iteration_3.JPG";
import Iteration4 from "../assets/iteration_4.JPG";
import Iteration5 from "../assets/iteration_5.JPG";
import Iteration6 from "../assets/iteration_6.JPG";
import Iteration7 from "../assets/iteration_7.JPG";
import Iteration8 from "../assets/iteration_8.JPG";
import Iteration9 from "../assets/iteration_9.JPG";
import Iteration10 from "../assets/iteration_10.JPG";

export default function Iterations() {
  return (
    <div className={"h-[100vh] flex flex-col lg:flex-row gap-16 items-center justify-center"}>
        <div className={"w-full lg:w-[40vw]"}>
          <Carousel gapSize={"md"}>
            <img src={Iteration1} className={"rounded-lg w-[400px] h-[400px] object-cover"} alt={"Iteration 1"}/>
            <img src={Iteration2} className={"rounded-lg w-[400px] h-[400px] object-cover"} alt={"Iteration 2"}/>
            <img src={Iteration4} className={"rounded-lg w-[400px] h-[400px] object-cover"} alt={"Iteration 4"}/>
            <img src={Iteration5} className={"rounded-lg w-[400px] h-[400px] object-cover"} alt={"Iteration 5"}/>
            <img src={Iteration3} className={"rounded-lg w-[400px] h-[400px] object-cover"} alt={"Iteration 3"}/>
            <img src={Iteration6} className={"rounded-lg w-[400px] h-[400px] object-cover"} alt={"Iteration 6"}/>
            <img src={Iteration7} className={"rounded-lg w-[400px] h-[400px] object-cover"} alt={"Iteration 7"}/>
            <img src={Iteration8} className={"rounded-lg w-[400px] h-[400px] object-cover"} alt={"Iteration 8"}/>
            <img src={Iteration9} className={"rounded-lg w-[400px] h-[400px] object-cover"} alt={"Iteration 9"}/>
            <img src={Iteration10} className={"rounded-lg w-[400px] h-[400px] object-cover"} alt={"Iteration 10"}/>
          </Carousel>
        </div>
      <div className={"text-center text-3xl font-bold"}>
        You've seen 7 iterations of Jed
      </div>
    </div>
  )
}