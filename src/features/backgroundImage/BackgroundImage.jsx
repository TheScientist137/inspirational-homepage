import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBackgroundImage } from './backgroundImageSlice'
import { switchToNextBackgroundImage } from './backgroundImageSlice'

import '../../App.css'

function BackgroundImage () {
  const { imageUrls, currentImageUrlIndex } = useSelector(
    state => state.backgroundImage
  )
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(switchToNextBackgroundImage())
  }

  useEffect(() => {
    dispatch(getBackgroundImage())
  }, [dispatch])

  return (
    <div>
      <img
        src={imageUrls[currentImageUrlIndex]}
        alt=''
        id='background-image'
        className='background-image'
      />
      <button
        className='right-button'
        aria-label='Switch to previous wallpaper'
        onClick={handleClick}
      >
        {'>'}
      </button>
    </div>
  )
}

export default BackgroundImage
