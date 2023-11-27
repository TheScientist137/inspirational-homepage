import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBackgroundImage } from './backgroundImageSlice'

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
      <img src={imageUrls[currentImageUrlIndex]} alt='' id='background-image' />
      {console.log(imageUrls[currentImageUrlIndex])}
    </div>
  )
}

export default BackgroundImage
