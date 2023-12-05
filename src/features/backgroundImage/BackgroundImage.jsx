import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BackgroundImageLeftControl from './components/BackgroundImageLeftControl'
import BackgroundImageRightControl from './components/BackgroundImageRightControl'
import { getBackgroundImage } from './backgroundImageSlice'
import './BackgroundImage.css'

function BackgroundImage () {
  const { imageUrls, currentImageUrlIndex } = useSelector(
    state => state.backgroundImage
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBackgroundImage())
  }, [dispatch])

  return (
    <div className='background'>
      <img
        src={imageUrls[currentImageUrlIndex]}
        alt=''
        id='background-image'
        className='background-image'
      />
      <div className='buttons'>
        <BackgroundImageLeftControl />
        <BackgroundImageRightControl />
      </div>
    </div>
  )
}

export default BackgroundImage
