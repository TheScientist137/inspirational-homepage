import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getQuote } from './quoteSlice'

import './Quote.css'

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
    <div className='quote-container'>
      <blockquote className='quote'>
        <p className='quote-content'>{content}</p>
        <cite className='quote-author'>{author}</cite>
      </blockquote>
      <button className='quote-button' onClick={handleNewQuote}>
        Get New Quote
      </button>
    </div>
  )
}

export default Quote
