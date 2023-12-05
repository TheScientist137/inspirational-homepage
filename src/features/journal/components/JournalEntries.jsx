import { useSelector } from 'react-redux'
import JournalEntry from './JournalEntry'

import '../Journal.css'

function JournalEntries () {
  const { entries } = useSelector(state => state.journal)

  console.log(entries)
  return (
    <div className='journal-list-container'>
      <ul className='journal-unordered-list'>
        {entries.map((entry, index) => (
          <li className='journal-list-element' key={entry.text}>
            <JournalEntry id={index} isDone={entry.isDone} entry={entry.text} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default JournalEntries
