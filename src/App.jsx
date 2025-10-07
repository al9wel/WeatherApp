import { useEffect, useState } from 'react'
import Header from './components/Header'
import Weather from './components/Weather'
import './index.css'
import Swal from 'sweetalert2'
import { BeatLoader, ClipLoader, FadeLoader, SyncLoader } from 'react-spinners'
import { Sun } from 'lucide-react'
import moment from 'moment'
import { useTranslation } from 'react-i18next'

const App = () => {

  const [city, setCity] = useState("mukalla")
  const [loader, setLoader] = useState(false)
  const [language, setLanguage] = useState("en")
  const { t, i18n } = useTranslation();
  const [data, setData] = useState({ city: "", country: "", date: "", temp: null, description: null, wind: "", feels: "", humidity: "" })
  const handleCityChange = (c) => {
    console.log(c)
    setCity(c)
  }
  const handleLanguageChange = () => {
    if (language == "ar") {
      setLanguage("en")
      i18n.changeLanguage("en")
    } else {
      setLanguage("ar")
      i18n.changeLanguage("ar")
    }
  }
  const successError = async (icon, title, text) => {
    const Toast = Swal.mixin({
      toast: true,
      position: "center",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      color: "#fff",
      background: "#050f16",
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    await Toast.fire({
      icon: icon,
      title: title,
      text: text
    });
  }
  useEffect(() => {
    handleLanguageChange()
  }, [])
  useEffect(() => {
    const controller = new AbortController()
    setLoader(true)
    const getWeatherData = async () => {
      const BASE_URL = "https://api.openweathermap.org/data/2.5"
      const API_KEY = import.meta.env.VITE_API_KEY;
      try {
        const response = await fetch(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}`,
          {
            signal: controller.signal
          }
        );
        const data = await response.json()
        if (!response.ok) {
          setLoader(false)
          successError("error", data.cod, data.message)
          setData({ city: "?", country: "?", date: "?", temp: 0, description: "?", wind: "?", feels: "?", humidity: "?", icon: <Sun size={80} /> })
          return
        }
        setLoader(false)
        setData({ city: data.name, country: data.sys.country, date: moment().format("D/MM/YYYY"), temp: Math.floor(data.main.temp - 272), description: data.weather[0].description, wind: data.wind.speed, feels: Math.floor(data.main.feels_like - 272), humidity: data.main.humidity, icon: data.weather[0].icon })
      }
      catch {
        setLoader(false)
        successError("error", "network error", "check your internet connection")
        setData({ city: "?", country: "?", date: "?", temp: 0, description: "?", wind: "?", feels: "?", humidity: "?", icon: <Sun size={80} /> })
      }
    }
    getWeatherData()
    return () => {
      controller.abort()
    }
  }, [city])
  return (
    <>
      <div className="flex items-center justify-center flex-col h-screen">
        <Header language={language} />
        <Weather t={t} language={language} handleLanguageChange={handleLanguageChange} data={data} handleCityChange={handleCityChange} />
        <ClipLoader size={80} color='#ffffff' className='z-20 absolute mt-40' loading={loader} />
      </div>
    </>
  )
}
export default App