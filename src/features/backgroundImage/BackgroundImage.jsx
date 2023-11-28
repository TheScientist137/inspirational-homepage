import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BackgroundImageLeftControl from './components/BackgroundImageLeftControl'
import BackgroundImageRightControl from './components/BackgroundImageRightControl'
import { getBackgroundImage } from './backgroundImageSlice'
import '../../App.css'

function BackgroundImage () {
  const { imageUrls, currentImageUrlIndex } = useSelector(
    state => state.backgroundImage
  )
  const dispatch = useDispatch()

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
      <BackgroundImageLeftControl />
      <BackgroundImageRightControl />
    </div>
  )
}

export default BackgroundImage
