import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import quotableApi from '../../api/quotable'

export const getQuote = createAsyncThunk('quote/getQuote', quotableApi.getQuote)

export const quoteSlice = createSlice({
  name: 'quote',
  initialState: {
    content: '',
    author: 'name'
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getQuote.fulfilled, (state, action) => {
      state.content = action.payload.content
      state.author = action.payload.author
    })
  }
})

export default quoteSlice.reducer
