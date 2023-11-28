import { useDispatch } from 'react-redux'
import { switchToNextBackgroundImage } from '../backgroundImageSlice'

function BackgroundImageRightControl () {
  const dispatch = useDispatch()

  const handleRightClick = () => dispatch(switchToNextBackgroundImage())

  return (
    <div>
      <button
        className='right-button'
        aria-label='Switch to next wallpaper'
        onClick={handleRightClick}
      >
        {'>'}
      </button>
    </div>
  )
}

export default BackgroundImageRightControl
