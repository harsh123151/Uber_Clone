import { useEffect } from 'react'
import tw from 'tailwind-styled-components'
import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken =
  'pk.eyJ1IjoiaGFyc2hkZXNhaSIsImEiOiJja3Zsb2MwbWwyczR6MnBxNXdpd3ZiaHoyIn0.bHareuEM6XwaS4ViVjkisw'

const Map = (props) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [-99.29011, 39.39172],
      zoom: 2,
    })
    if (props.pickUpCoordinates) {
      addtomap(map, props.pickUpCoordinates)
    }

    if (props.dropoffCoordinates) {
      addtomap(map, props.dropoffCoordinates)
    }
    if (props.pickUpCoordinates && props.dropoffCoordinates) {
      map.fitBounds([props.pickUpCoordinates, props.dropoffCoordinates], {
        padding: 60,
      })
    }
  }, [props.pickUpCoordinates, props.dropoffCoordinates])

  const addtomap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map)
  }
  return <Mapper id='map'></Mapper>
}
const Mapper = tw.div`
 flex-1 h-1/2
`

export default Map
