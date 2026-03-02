import Hb from "../assets/hb.JPG";

export default function HappyBirthday() {
  return (
    <div className={"text-center flex flex-col lg:flex-row gap-16 justify-center h-[100vh] items-center text-6xl font-bold"}>
      Happy Birthday <br/>
      Poohead!
      <div>
        <img src={Hb} alt={"Happy Birthday"} className={"w-full lg:w-[50vw] mt-8 rounded-lg shadow-lg"}/>
      </div>
    </div>
  )
}