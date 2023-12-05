import { useDispatch } from 'react-redux'
import { switchToPreviousBackgroundImage } from '../backgroundImageSlice'

import '../../../App.css'

function BackgroundImageLeftControl () {
  const dispatch = useDispatch()

  const handleLeftClick = () => dispatch(switchToPreviousBackgroundImage())

  return (
    <div>
      <button
        className='button'
        aria-label='Switch to previous wallpaper'
        onClick={handleLeftClick}
      >
        {'<'}
      </button>
    </div>
  )
}

export default BackgroundImageLeftControl
