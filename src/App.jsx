import BackgroundImage from './features/backgroundImage/BackgroundImage'
import Weather from './features/weather/Weather'
import Quote from './features/quote/Quote'
import Journal from './features/journal/Journal'

function App () {
  return (
    <div>
      <h1>Inspirational Homepage</h1>
      <Weather />
      <Quote />
      <Journal />
      <BackgroundImage />
    </div>
  )
}

export default App
