import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import openWeatherMapApi from '../../api/openWeatherMap'

export const getWeather = createAsyncThunk(
  'weather/getWeather',
  (city) => openWeatherMapApi.getWeather(city)
)

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    weather: {},
    temp: '',
    city: 'madrid'
  },
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload
    },
    setCountry: (state, action) => {
      state.country = action.payload
    }
  },
  extraReducers: builder => {
    builder.addCase(getWeather.fulfilled, (state, action) => {
      state.weather = action.payload.weather[0]
      state.temp =  action.payload.main.temp + ' º'
    })
  }
})

export const { setCity, setCountry } = weatherSlice.actions

export default weatherSlice.reducer
