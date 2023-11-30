import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getWeather, setCity } from './weatherSlice'

function Weather () {
  const [newCity, setNewCity] = useState('')
  const { weather, temp, city } = useSelector(state => state.weather)
  const dispatch = useDispatch()

  const handleCityName = e => {
    setNewCity(e.target.value)
  }

  const onFormSubmit = (e) => {
    e.preventDefault()

    dispatch(setCity(newCity))
  }

  useEffect(() => {
    if (city) {
      dispatch(getWeather(city))
    }
  }, [dispatch, city])

  return (
    <div className='weather'>
      <p className='weather-city'>{city}</p>
      <p className='weather-temperature'>{temp}</p>
      <p className='weather-description'>{weather.description}</p>
      <img
        src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
        alt=''
        className='weather-icon'
      />
      <form onSubmit={onFormSubmit}>
        <input
          type='text'
          value={newCity}
          placeholder='Put your city'
          className='weather-input'
          onChange={handleCityName}
        />
        <button>Search</button>
      </form>
    </div>
  )
}

export default Weather
