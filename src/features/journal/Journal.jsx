import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addJournalEntry } from './journalSlice'
import JournalEntries from './components/JournalEntries'

import './Journal.css'

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
    <div className='journal'>
      <div className='journal-form-container'>
        <h2 className='journal-title'>What is on your mind today ?</h2>
        <form className='journal-form' onSubmit={onFormSubmit}>
          <input
            type='text'
            value={newEntry}
            className='journal-input'
            onChange={handleInputChange}
          />
        </form>
      </div>

      <JournalEntries />
    </div>
  )
}

export default Journal
