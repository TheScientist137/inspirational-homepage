import BackgroundImage from './features/backgroundImage/BackgroundImage'
import Weather from './features/weather/Weather'
import Quote from './features/quote/Quote'
import Journal from './features/journal/Journal'

import { FaHeart } from "react-icons/fa";

import './App.css'

function App () {
  return (
    <div className='content'>
      <Weather />
      <Journal />
      <Quote />
      <BackgroundImage />
      <footer className='footer'>
        Made with
          {<FaHeart className='heart-icon'/>}
        by
        <a className='github-link' href='https://github.com/TheScientist137?tab=repositories'>
          Guillermo Casado
        </a>
      </footer>
    </div>
  )
}

export default App

// w: 308 h: 656
