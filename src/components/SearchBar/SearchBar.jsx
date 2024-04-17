import { useState } from 'react'
import './SearchBar.scss'

function SearchBar() {
  const [query, setQuery] = useState(
    {
      type: 'Find Room',
      location: '',
      minPrice: 0,
      maxPrice: 0
    }
  )

  const types = ['Find Room', 'Find Roommate'];

  const switchType = (val) => { 
    setQuery((prev) => ({ ...prev, type: val }));
  };
  return (
    <div className='searchBar'>
      <div className='type'>
        {types.map((type) => (
          <button key={type} onClick={() => switchType(type)} className={query.type===type ? "active" : "" }>{type}</button>
        ))}
        </div>
      <form>
        <input type='text' name="location" placeholder='city location' />
        <input type='number' name="minPrice" min={0} max={10000} placeholder='Min Price' />
        <input type='number' name="maxPrice" min={0} max={10000} placeholder='Max Price' />
        <button>Search</button>
      </form>
      
    </div>
  )
}

export default SearchBar