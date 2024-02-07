import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  entries: [
    { text: 'Water Plants', isDone: false },
    { text: 'Make the bed', isDone: false },
    { text: 'Make web pages', isDone: false }
  ],
}

export const journalSlice = createSlice({
  name: 'journal',
  initialState,
  reducers: {
    addJournalEntry: (state, action) => {
      state.entries.push({ text: action.payload, isDone: false })
    },
    removeJournalEntry: (state, action) => {
      state.entries.splice(action.payload, 1)
    },
    toggleEntryDone: (state, action) => {
      state.entries[action.payload].isDone =
        !state.entries[action.payload].isDone
    }
  }
})

export const { addJournalEntry, removeJournalEntry, toggleEntryDone } = journalSlice.actions

export default journalSlice.reducer
