const API_KEY = 'd374dde972ec5bb9a097c705c537c0b3'
const API_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${API_KEY}`

export const getWeather = async (city) => {
  const response = await fetch(`${API_URL}&q=${city}`)
  const json = await response.json()

  return json
}

const openWeatherMapApi = {
  getWeather
}

export default openWeatherMapApi
