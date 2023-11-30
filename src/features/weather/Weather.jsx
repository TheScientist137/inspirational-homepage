import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getWeather, setCity } from './weatherSlice'

function Weather () {
  const { weather, temp, city } = useSelector(state => state.weather)
  const dispatch = useDispatch()

  // Add searching with a button when the city is on the input 

  const handleCityName = e => {
    dispatch(setCity(e.target.value))
  }

  useEffect(() => {
    if (city) {
      dispatch(getWeather(city))
    }
  }, [dispatch, city])

  return (
    <div className='weather'>
      <p className='weather-city'>{city}</p>
      <p className='weather-temperature'>{temp} º</p>
      <p className='weather-description'>{weather.description}</p>
      <img
        src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
        alt=''
        className='weather-icon'
      />
      <input
        type='text'
        value={city}
        placeholder='Put your city'
        className='weather-input'
        onChange={handleCityName}
      />
    </div>
  )
}

export default Weather
