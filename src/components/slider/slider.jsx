import './slider.scss'
import { useState } from 'react'

function Slider({ images }) {
  
  const [imageIndex, setImageIndex] = useState(null)

  const changeSlides = (direction) => {
    if (direction === 'left') {
        if (imageIndex === 0) {
            setImageIndex(images.length - 1);
        } else {
            setImageIndex(imageIndex - 1);
        }
    } else {
        if (imageIndex === images.length - 1) {
            setImageIndex(0);
        } else {
            setImageIndex(imageIndex + 1);
        }
    }
  }
  
  return (
    <div className='slider'>
      { imageIndex !==null && ( <div className="fullSlider">
          <div className="arrow">
            {/* image of left arrow */}
            <img src="https://img.icons8.com/ios/452/chevron-left.png" alt="leftArrow" onClick={()=>changeSlides('left')}/>
          </div>
          <div className="imgContainer">
            <img src={images[imageIndex]} alt="bigImage"/>
          </div>
          <div className="arrow">
            {/* image of right arrow */}
            <img src="https://img.icons8.com/ios/452/chevron-right.png" alt="rightArrow" onClick={()=>changeSlides('right')}/>
          </div>
          <div className="close" onClick={()=> setImageIndex(null)}>X</div>
        </div>)}
      <div className="bigImage">
        <img src={images[0]} alt="bigImage" onClick={()=> setImageIndex(0)}/>
      </div>
      <div className="smallImages">
        {images.slice(1).map((image, index) => (
          <img key={index} src={image} alt="smallImage" onClick={()=>setImageIndex(index+1)}/>
        ))}
      </div>
    </div>
  )
}

export default Slider