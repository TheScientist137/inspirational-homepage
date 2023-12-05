import BackgroundImage from './features/backgroundImage/BackgroundImage'
import Weather from './features/weather/Weather'
import Quote from './features/quote/Quote'
import Journal from './features/journal/Journal'

import './App.css'

function App () {
  return (
    <div className='App'>
      <div className='content'>
        <Weather />
        <Journal />
        <div className='background'>
          <BackgroundImage />
        </div>
        <Quote />
      </div>
    </div>
  )
}

export default App

// w: 308 h: 656