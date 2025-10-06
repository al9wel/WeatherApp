const Header = ({ language }) => {
    return (
        <>
            <div className=" bac absolute inset-0 bg-cover bg-center bg-no-repeat ">
                <div className=' absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-indigo-900/40'></div>
                <div className=' absolute inset-0 bg-black-20'></div>
            </div>
            <div className='relative z-10 mx-auto container px-4 py-2'>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="mb-8">
                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl tracking-tight">
                                Weather <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">App</span>
                            </h1>
                            <p className="text-white/100 text-lg md:text-xl mb-8 max-w-2xl leading-relaxed mx-auto">
                                {language == "en" ? "Experince weather like never before with real-time data,beatiful visuals" : "عِش تجربة طقس لا مثيل لها مع بيانات فورية ورسوميات ساحرة!"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header