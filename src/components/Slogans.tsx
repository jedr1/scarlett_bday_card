import Carousel from "../shared/Carousel.tsx";
import Card from "../shared/Card.tsx";

export default function Slogans() {
  return (
    <div className={"h-[100vh] flex flex-col lg:flex-row gap-16 items-center justify-center"}>
      <div className={"w-full lg:w-[40vw]"}>
        <Carousel gapSize={"md"}>
          <Card className={"text-xl text-center flex justify-center items-center"}>We have the people...</Card>
          <Card className={"text-xl text-center flex justify-center items-center"}>Time after time</Card>
          <Card className={"text-xl text-center flex justify-center items-center"}>You may be a squishy bean...</Card>
        </Carousel>
      </div>
      <div className={"text-center text-3xl font-bold"}>
        You've collected several catchphrases
      </div>
    </div>
  )
}