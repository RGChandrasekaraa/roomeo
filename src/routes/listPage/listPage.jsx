import Card from '../../components/card/Card'
import Filter from '../../components/filter/Filter'
import MapComponent from '../../components/map/map'
import { listData } from '../../lib/dummyData'
import './listPage.scss'

function ListPage() {
  const data = listData
  return (
    <div className='listPage'>
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data.map(item => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <MapComponent items={data} />
      </div>

    </div>
  )
}

export default ListPage