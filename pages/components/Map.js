import { useEffect } from 'react'
import tw from 'tailwind-styled-components'
import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken =
  'pk.eyJ1IjoiaGFyc2hkZXNhaSIsImEiOiJja3Zsb2MwbWwyczR6MnBxNXdpd3ZiaHoyIn0.bHareuEM6XwaS4ViVjkisw'

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [-99.29011, 39.39172],
      zoom: 2,
    })
  }, [])

  return <Mapper id='map'>hello</Mapper>
}
const Mapper = tw.div`
 flex-1
`

export default Map
