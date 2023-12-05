import { useDispatch } from 'react-redux'
import { removeJournalEntry, toggleEntryDone } from '../journalSlice'
import ConfettiExplosion from 'react-confetti-explosion'

import '../Journal.css'

// eslint-disable-next-line react/prop-types
function JournalEntry ({ id, entry, isDone }) {
  const dispatch = useDispatch()

  const handleRemoveEntry = () => {
    dispatch(removeJournalEntry(id))
  }

  const handleToggleEntry = () => {
    dispatch(toggleEntryDone(id))
    console.log(isDone)
  }

  return (
    <div className='entry-container'>
      <div className='entry-buttons-container'>
        {isDone === false ? (
          <button
            className='entry-button entry-button-done'
            disabled={isDone}
            onClick={handleToggleEntry}
          >
            <h5>Done</h5>
          </button>
        ) : (
          <ConfettiExplosion />
        )}
        <button
          className='entry-button entry-button-remove'
          onClick={handleRemoveEntry}
        >
          <h5>Remove</h5>
        </button>
      </div>
      <h4 className='entry-text'>{entry}</h4>
    </div>
  )
}

export default JournalEntry
