import Header from './components/Header'
import Weather from './components/Weather'
import './index.css'

const App = () => {
  return (
    <>
      <div className=" min-h-screen relative overflow-hidden ">
        <Header />
        <div className='relative z-10 mx-auto container'>
          <div className='flex flex-col justify-center items-center'>
            <Weather />
          </div>
        </div>
      </div>
    </>
  )
}
export default App