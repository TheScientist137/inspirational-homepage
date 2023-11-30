import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addJournalEntry } from './journalSlice'
import JournalEntries from './components/JournalEntries'

function Journal () {
  const [newEntry, setNewEntry] = useState('')
  const dispatch = useDispatch()

  const handleInputChange = e => {
    setNewEntry(e.target.value)
  }

  const onFormSubmit = e => {
    e.preventDefault()

    if (newEntry === '') {
      return
    }

    dispatch(addJournalEntry(newEntry))
    setNewEntry('')
   }
   
  return (
    <div>
      <h2>What is on your mind today</h2>

      <form onSubmit={onFormSubmit}>
        <input
          type='text'
          className='journal-input'
          value={newEntry}
          onChange={handleInputChange}
        />
      </form>
      <JournalEntries />
    </div>
  )
}

export default Journal
