import { useEffect, useRef, useState } from 'react'
import Weather from './components/Weather'
import './index.css'
import { ClipLoader, FadeLoader } from 'react-spinners'
import { useTranslation } from 'react-i18next'
import { useSelector, useDispatch } from 'react-redux'
import { changeCity, getWeather } from './app/weather/weatherSlice'
const App = () => {
  const city = useSelector((state) => state.weather.city)
  const data = useSelector((state) => state.weather.data)
  const loader = useSelector((state) => state.weather.loader)
  const dispatch = useDispatch()
  const [language, setLanguage] = useState("en")
  const { t, i18n } = useTranslation();
  const isFirstRender = useRef(true);
  const handleLanguageChange = () => {
    if (language == "ar") {
      setLanguage("en")
      i18n.changeLanguage("en")
    } else {
      setLanguage("ar")
      i18n.changeLanguage("ar")
    }
  }
  const handleCityChange = (c) => {
    dispatch(changeCity(c))
  }
  useEffect(() => {
    handleLanguageChange()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    const getCityByIP = async () => {
      const res = await fetch("https://ipapi.co/json/");
      const data = await res.json();
      return data.city
    };
    if (isFirstRender.current) {
      isFirstRender.current = false;
      getCityByIP()
        .then((userCity) => {
          dispatch(getWeather(userCity))
        })
      return;
    }
    dispatch(getWeather(city))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city])
  return (
    <>
      <div className="flex items-center justify-center flex-col min-h-screen background">
        <div className=' absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-indigo-900/40'></div>
        <h1 className="text-5xl md:text-7xl font-bold text-white my-6 drop-shadow-2xl tracking-tight">
          Weather <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">App</span>
        </h1>
        <p className="text-white z-30 text-center text-lg md:text-xl mb-2.5 md:mb-6 max-w-2xl leading-relaxed mx-auto">
          {t("Experince weather like never before with real-time data,beatiful visuals")}
        </p>
        <div className={` ${loader ? "" : "hidden"} w-full h-screen flex justify-center items-center absolute z-10`}>
          <div className={`${loader ? "" : "hidden"}bg-black/20 rounded-[30px] py-2 pr-2 pl-3.5 `}>
            {/* <ClipLoader size={80} color='#ffffff' className=' ' loading={loader} /> */}
            <FadeLoader margin={5} color="#ffffff" loading={loader} />
          </div>
        </div>
        <Weather t={t} language={language} handleLanguageChange={handleLanguageChange} data={data} handleCityChange={handleCityChange} />
      </div>
    </>
  )
}
export default App