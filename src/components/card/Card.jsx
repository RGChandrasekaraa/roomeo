import { Link } from 'react-router-dom'
import './card.scss'

function Card(item){
  return (
    <div className='card'>
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.img} alt={item.name} />
      </Link>
      <Link className="textContainer">
        <h2 className='title'>
          <Link to={`/${item.id}`}> {item.title}</Link>
        </h2>

        <p className='address'>
          <img src="https://img.icons8.com/ios/50/000000/marker.png" alt="location" />
          <span>{item.address}</span>
        </p>

        <p className='price'>
          <span>${item.price}</span>
        </p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              {/* bed icon image */}
            <img src="https://img.icons8.com/ios/50/000000/bedroom.png" alt="bed" />
            <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              {/* bath icon image */}
            <img src="https://img.icons8.com/ios/50/000000/shower.png" alt="bath" />
            <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            {/* save icon */}
            <img src="https://img.icons8.com/ios/50/000000/like.png" alt="save" />
            {/* share icon */}
            <img src="https://img.icons8.com/ios/50/000000/share.png" alt="share" />
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Card