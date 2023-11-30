import { useSelector } from 'react-redux'
import JournalEntry from './JournalEntry'

function JournalEntries () {
  const { entries } = useSelector(state => state.journal)

  console.log(entries)
  return (
    <div>
      <ul>
        {entries.map((entry, index) => (
          <li key={entry.text}>
            <JournalEntry id={index} isDone={entry.isDone} entry={entry.text} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default JournalEntries
