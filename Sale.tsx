import Image from "next/image"


function Sale() {
  return (
    <main>

<div className="w-full sm:h-full md:h-[300px] flex justify-center items-center mt-10 mb-10">
        <div className="sm:w-full md:w-full w-[80%] h-full bg-yellow-200 ">
           {/* top side*/}
           <div className="sm:pl-5 md:pl-0">
           <span className=" border-1-8 border-red-500 text-red-500 mb-5 font-bold">Today's</span>
           <h2 className="text-4xl font-bold mt-5">Flash Sales</h2>
           </div>
           {/* Products */}
           {/* Container boxes */}
           <div className=" flex sm:flex-col md:flex-row sm:items-center justify-between mt-7 sm:gap-y-5 md:gap-y-0">
            <div>
            <div className="w-[200px] h-[150px] bg-green-300 flex justify-center items-center">
                <Image src={"/images/fresh/gaming.png"} width={150} height={100} alt="gaming"></Image>
            </div>
            {/* title */}
            <div className="flex flex-col">
            <span className="font-bold">HAVIT HV-G92 Gamepad</span>
            <span className="font-bold">$120</span>
            </div>
            </div>
            <div>
                
            <div className="w-[200px] h-[150] bg-green-300 flex justify-between">
                <Image src={"/images/fresh/Keyboard.png"} width={150} height={100} alt="gaming"></Image>
            </div>
            {/* title */}
            <div className="flex flex-col">
            <span className="font-bold pt-3">AK-900 Wired Keyboard</span>
            <span className="font-bold">$120</span>
            </div>
            </div>
            <div>
                
            <div className="w-[200px] h-[150] bg-green-300">
                <Image src={"/images/fresh/Lcd.png"} width={150} height={100} alt="gaming"></Image>
            </div>
            {/* title */}
            <div className="flex flex-col">
            <span className="font-bold pt-3">IPS LCD Gaming Monitor</span>
            <span className="font-bold">$120</span>
            </div>
            </div>
              <div>
              <div className="w-[200px] h-[150] bg-green-300">
                <Image src={"/images/fresh/Chair.png"} width={150} height={100} alt="gaming"></Image>
            </div>
            {/* title */}
            <div className="flex flex-col">
            <span className="font-bold pt-3">S-Series Comfort Chair</span>
            <span className="font-bold">$120</span>
            </div>
              </div>
           </div>
        </div>
    </div>
    <button className=" py-2 px-3 bg-red-500 sm:ml-10 md:ml-[550px] rounded-md text-white">View All Products</button>

        </main>
  )
}

export default Sale