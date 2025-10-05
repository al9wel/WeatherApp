import { useEffect, useState } from 'react'
import Header from './components/Header'
import Weather from './components/Weather'
import './index.css'
import Swal from 'sweetalert2'
import { BeatLoader, ClipLoader, FadeLoader, SyncLoader } from 'react-spinners'
import { Sun } from 'lucide-react'
const API_URL = "https://api.openweathermap.org/data/2.5"
const API_KEY = "5d1bcfae9eafcccf018a9fa1ea9c5d34"

const App = () => {
  const [city, setCity] = useState("mukalla")
  const [loader, setLoader] = useState(false)
  const [data, setData] = useState({ city: "", country: "", date: "", temp: null, description: null, wind: "", feels: "", humidity: "" })
  const getDate = () => {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy
    return today
  }
  const handleCityChange = (c) => {
    console.log(c)
    setCity(c)
  }
  useEffect(() => {
    setLoader(true)
    const getWeatherData = async () => {
      try {
        const response = await fetch(`${API_URL}/weather?q=${city}&appid=${API_KEY}`);
        const data = await response.json()
        if (!response.ok) {
          setLoader(false)
          Swal.fire({
            icon: "error",
            title: data.cod,
            text: data.message,
          });
          setData({ city: "?", country: "?", date: "?", temp: 0, description: "?", wind: "?", feels: "?", humidity: "?", icon: <Sun size={80} /> })
          return
        }
        setLoader(false)
        setData({ city: data.name, country: data.sys.country, date: getDate(), temp: Math.floor(data.main.temp - 272), description: data.weather[0].description, wind: data.wind.speed + " m/s", feels: Math.floor(data.main.feels_like - 272) + " c", humidity: data.main.humidity + " %", icon: <Sun size={80} /> })
      }
      catch {
        setLoader(false)
        Swal.fire({
          icon: "error",
          title: "network error",
          text: "check your internet connection",
        });
        setData({ city: "?", country: "?", date: "?", temp: 0, description: "?", wind: "?", feels: "?", humidity: "?", icon: <Sun size={80} /> })
      }
    }
    getWeatherData()
  }, [city])
  return (
    <>
      <div className="flex items-center justify-center flex-col h-screen">
        <Header />
        <Weather data={data} handleCityChange={handleCityChange} />
        <ClipLoader size={80} color='#ffffff' className='z-20 absolute mt-40' loading={loader} />
      </div>
    </>
  )
}
export default App