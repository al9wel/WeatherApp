import { Cloud, LocationEdit, SearchIcon, Thermometer, Wind } from "lucide-react"
import { useState } from "react"

const Weather = ({ data, handleCityChange }) => {
    const [cityInput, setCityInput] = useState("")
    return (
        <>
            <div className="flex justify-center items-center gap-4 w-[90%] md:w-[70%] lg:w-[50%]">
                <input value={cityInput} onChange={(e) => setCityInput(e.target.value)} type="text" placeholder='City Name' className='flex-1 px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-300  hover:bg-white/15' />
                <button onClick={() => handleCityChange(cityInput)} className=" px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-white/30  hover:ring-2 hover:ring-white/30 hover:border-white/40 transition-all duration-300  hover:bg-white/15 cursor-pointer">
                    <SearchIcon size={20} />
                </button>
            </div>
            <div className="w-[90%] md:w-[70%] lg:w-[50%] bg-white/20 backdrop-blur-sm min-h-98 max-h-screen mt-6 mb-6 rounded-md">
                {/* city and date */}
                <div className="w-full py-4 px-6 flex justify-between">
                    <div className="flex items-center justify-center gap-2 text-white/40">
                        <div className={`${data.city == "" ? "hidden" : ""} bg-white/20 p-2 rounded-full`}>
                            <LocationEdit size={15} className={`text-[10px]`} />
                        </div>
                        <div>
                            <h5 className="text-[16px] md:text-xl">{data.city}</h5>
                            <h6 className="text-[10px] md:text-sm">{data.country}</h6>
                        </div>
                    </div>
                    <h5 className="text-white/40 text-[16px] md:text-xl">{data.date}</h5>
                </div>
                {/* temp and icon */}
                <div className="w-full py-4 px-6 flex justify-between">
                    <div className="flex flex-col items-center justify-center gap-2 text-white/40">
                        <h1 className="text-6xl md:text-7xl text-white/80">{data.temp}<span className={`${data.temp == null ? "hidden" : ""} text-4xl`}>c</span></h1>
                        <h3 className=" text-[12px] md:text-sm text-white/60">{data.description}</h3>
                    </div>
                    <div className="text-white/80 text-[16px] md:text-xl flex items-center">
                        {data.icon}
                    </div>
                </div>
                {/* other info */}
                <div className={`w-full py-4 px-6 grid grid-cols-1 gap-4`}>
                    {/* wind speed */}
                    <div className={`${data.wind == "" ? "hidden" : ""} bg-green-500/5 backdrop-blur-2xl rounded-md px-4 py-1 flex justify-between items-center`}>
                        <div className="flex gap-4 ">
                            <div className="bg-white/20 flex items-center justify-center h-6 w-8 rounded-full">
                                <Wind size={15} className="text-green-500 font-bold" />
                            </div>
                            <h1 className="text-white/60 text-sm">Wind Speed </h1>
                        </div>
                        <h1 className="text-center m-2 text-white/80 text-[16px]">{data.wind}</h1>
                    </div>
                    {/* feels like */}
                    <div className={`${data.feels == "" ? "hidden" : ""} bg-orange-500/5 backdrop-blur-2xl rounded-md px-4 py-1 flex justify-between items-center`}>
                        <div className="flex gap-4 ">
                            <div className="bg-white/20 flex items-center justify-center h-6 w-8 rounded-full">
                                <Thermometer size={15} className="text-orange-500/50 font-bold" />
                            </div>
                            <h1 className="text-white/60 text-sm">Feels Like</h1>
                        </div>
                        <h1 className="text-center m-2 text-white/80 text-[16px]">{data.feels}</h1>
                    </div>
                    {/* humidity */}
                    <div className={`${data.humidity == "" ? "hidden" : ""} bg-blue-500/5 backdrop-blur-2xl rounded-md px-4 py-1 flex justify-between items-center`}>
                        <div className="flex gap-4 ">
                            <div className="bg-white/20 flex items-center justify-center h-6 w-8 rounded-full">
                                <Cloud size={15} className="text-blue-500/50 font-bold" />
                            </div>
                            <h1 className="text-white/60 text-sm">humidity</h1>
                        </div>
                        <h1 className="text-center m-2 text-white/80 text-[16px]">{data.humidity}</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Weather