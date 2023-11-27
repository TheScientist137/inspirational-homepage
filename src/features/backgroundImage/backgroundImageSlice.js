import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import unsplashApi from '../../api/unsplash'

export const getBackgroundImage = createAsyncThunk(
  'backgroundImage/getImage',
  unsplashApi.getImage
)

export const backgroundImageSlice = createSlice({
  name: 'backgroundImage',
  initialState: {
    imageUrls: [],
    currentImageUrlIndex: 0
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getBackgroundImage.fulfilled, (state, action) => {
      state.imageUrls = action.payload
      console.log(state.imageUrls)
      state.currentImageUrlIndex = 0
    })
  }
})

export const { switchToNextBackgroundImage, switchToPreviousBackgroundImage } =
  backgroundImageSlice.actions

export default backgroundImageSlice.reducer