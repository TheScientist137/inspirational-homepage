import { useDispatch } from 'react-redux'
import { removeJournalEntry, toggleEntryDone } from '../journalSlice'
import ConfettiExplosion from 'react-confetti-explosion'

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
    <div>
      <button onClick={handleRemoveEntry}>Remove</button>
      <button disabled={isDone} onClick={handleToggleEntry}>
        {isDone ? <ConfettiExplosion /> : 'Done'}
      </button>
      {entry}
    </div>
  )
}

export default JournalEntry
