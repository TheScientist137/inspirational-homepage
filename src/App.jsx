import BackgroundImage from './features/backgroundImage/BackgroundImage'
import Weather from './features/weather/Weather'
import Quote from './features/quote/Quote'

function App () {
  return (
    <div>
      <h1>Inspirational Homepage</h1>
      <Weather />
      <Quote />
      <BackgroundImage />
    </div>
  )
}

export default App
