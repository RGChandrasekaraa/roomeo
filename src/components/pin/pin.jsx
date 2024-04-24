import { Marker, Popup } from 'react-leaflet';
import './pin.scss';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation

function Pin({ item }) {  // Correct the function parameter to receive an object `item`
  // Validate latitude and longitude
  if (typeof item.latitude !== 'number' || typeof item.longitude !== 'number') {
    console.error("Invalid coordinates for item:", item);
    return null; // Do not render the component if coordinates are invalid
  }

  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="popupContainer">
          <img src={item.img} alt={item.title} />
          <div className="textContainer">
            <Link to={`/${item.id}`}>{item.title}</Link> {/* Corrected from <link> to <Link> */}
            <span>{item.bedroom} bedroom</span>
            <b>{item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;
