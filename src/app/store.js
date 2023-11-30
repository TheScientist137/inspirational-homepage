import { configureStore } from '@reduxjs/toolkit'

import backgroundImageReducer from '../features/backgroundImage/backgroundImageSlice'
import weatherReducer from '../features/weather/weatherSlice'
import quoteReducer from '../features/quote/quoteSlice'
import journalReducer from '../features/journal/journalSlice'

export default configureStore({
  reducer: {
    backgroundImage: backgroundImageReducer,
    weather: weatherReducer,
    quote: quoteReducer,
    journal: journalReducer
  }
})
