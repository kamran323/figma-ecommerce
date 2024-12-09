import Image from "next/image";

function hero() {
  return (
    <div className="w-full h-[270px] flex justify-center mt-8">
        <div className="bg-black h-full sm:w-full md:w-full lg:w-[80%] flex justify-between">
        {/*left side*/}
        <div className="ml-8 sm:mt-4 md:mt-16 text-white">
        <div className="flex justify-center items-center">
          <span><fontAwesomeIcon icon={'faApple'} className="w-[30px]"/></span>
         <span className="ml-4">iPhone 14 Series</span>
        </div>
        <div className="w-[200px]">
            <h1 className="text-3xl font-sans font-bold">Up to 10% off Voucher</h1>
            <button className="font-bold underline underline-offset-8 ml-5 mt-5">Shop Now</button>
        </div>
        </div>
        {/*right side*/}
        <div>
            <Image src={"/Images/hero.png"} width={330} height={200} alt="Heroimage ml-5"></Image>
        </div>
     </div>
    </div>
  )
}

export default hero