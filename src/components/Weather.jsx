import { Locate, LocationEdit, Sun } from "lucide-react"

const Weather = () => {
    return (
        <>
            <input type="text" placeholder='City Name' className='w-[80%] lg:w-[50%] px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-300  hover:bg-white/15' />
            <div className="w-[90%] md:w-[70%] lg:w-[50%] bg-white/20 backdrop-blur-sm h-90 mt-6 mb-6 rounded-md">
                <div className="w-full py-4 px-6 flex justify-between">
                    <div className="flex items-center justify-center gap-2 text-white/40">
                        <div className="bg-white/20 p-2 rounded-full">
                            <LocationEdit size={15} className="text-[10px]" />
                        </div>
                        <div>
                            <h5 className="text-[16px] md:text-xl">New York</h5>
                            <h6 className="text-[10px] md:text-sm">US</h6>
                        </div>
                    </div>
                    <h5 className="text-white/40 text-[16px] md:text-xl">20/20/2025</h5>
                </div>
                <div className="w-full py-4 px-6 flex justify-between">
                    <div className="flex flex-col items-center justify-center gap-2 text-white/40">
                        <h1 className="text-6xl md:text-7xl text-white/80">17<span className="text-4xl">c</span></h1>
                        <h3 className=" text-[12px] md:text-sm text-white/60">Clear Sky</h3>
                    </div>
                    <div className="text-white/80 text-[16px] md:text-xl flex items-center">
                        <Sun size={80} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Weather