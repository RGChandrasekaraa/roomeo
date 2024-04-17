import './homePage.scss';
import homepageBanner from './banner.png';
import SearchBar from '../../components/SearchBar/SearchBar';

function HomePage() {
  return (
    <div className='homePage'>
      <div className='textContainer'>
        <div className='wrapper'>
          <h1 className='title'>Find your student accomodation now.</h1>
          <p>Roomeo is a platform that helps you find the perfect roommates for your next adventure. Whether you are looking for a new place to live or looking for someone to fill a room in your current place, Roomeo has you covered.</p>
          <SearchBar />
          <div className='boxes'>
            <div className='box'>
              <h1>500</h1>
              <h2>Rooms Available</h2>
            </div>  
            <div className='box'>
              <h1>200</h1>
              <h2>Awards Received</h2> 
            </div>
            <div className='box'>
              <h1>100</h1>
              <h2>Happy Customers</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='imgContainer'>
        <img src={ homepageBanner } alt='homePageImage' />
      </div>
    </div>
  );
}

export default HomePage;
