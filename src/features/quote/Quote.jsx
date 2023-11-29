import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getQuote } from './quoteSlice'

function Quote () {
  const { content, author } = useSelector(state => state.quote)
  const dispatch = useDispatch()

  // Fetch the new quote when the button is clicked
  const handleNewQuote = () => {
    dispatch(getQuote())
  }

  // Fetch the quote when the component mounts
  useEffect(() => {
    dispatch(getQuote())
  }, [dispatch])

  console.log(content, author)
  return (
    <div>
      <p>{content}</p>
      <p>{author}</p>
      <button onClick={handleNewQuote}>Get New Quote</button>
    </div>
  )
}

export default Quote
