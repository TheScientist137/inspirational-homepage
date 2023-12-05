import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getWeather, setCity } from './weatherSlice'

import './Weather.css'

function Weather () {
  const [newCity, setNewCity] = useState('')
  const { weather, temp, city } = useSelector(state => state.weather)
  const dispatch = useDispatch()

  const handleCityName = e => {
    setNewCity(e.target.value)
  }

  const onFormSubmit = e => {
    e.preventDefault()

    dispatch(setCity(newCity))
  }

  useEffect(() => {
    if (city) {
      dispatch(getWeather(city))
      setNewCity('')
    }
  }, [dispatch, city])

  return (
    <div className='weather-container'>
      <div className='weather-content-container'>
        <div className='weather-image-container'>
          <img
            src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            alt=''
            className='weather-icon'
          />
        </div>
        <div className='weather-text-container'>
          <h4 className='weather-city'>{city}</h4>
          <p className='weather-temperature'>{temp}</p>
          <p className='weather-description'>{weather.description}</p>
        </div>
      </div>
      <form className='weather-form' onSubmit={onFormSubmit}>
        <input
          type='text'
          value={newCity}
          placeholder='Search by city or country'
          className='weather-input'
          onChange={handleCityName}
        />
        <button className='weather-search-button'>Search</button>
      </form>
    </div>
  )
}

export default Weather
