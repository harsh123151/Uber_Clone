import { useState, useEffect } from 'react'
import tw from 'tailwind-styled-components'
import Map from './components/Map'
import { useRouter } from 'next/router'
import RideSelector from './components/RideSelector'
import Link from 'next/link'
const Confirm = () => {
  const [pickUp, setpickUp] = useState()
  const [dropOff, setdropOff] = useState()
  const router = useRouter()
  const { pickup, dropoff } = router.query
  useEffect(() => {
    if (pickup && dropoff) {
      pickUpCoordinates(pickup), dropoffCoordinates(dropoff)
    }
  }, [pickup, dropoff])

  const pickUpCoordinates = (pickup) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            'pk.eyJ1IjoiaGFyc2hkZXNhaSIsImEiOiJja3Zsb2MwbWwyczR6MnBxNXdpd3ZiaHoyIn0.bHareuEM6XwaS4ViVjkisw',
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => setpickUp(data.features[0].center))
  }

  const dropoffCoordinates = (dropoff) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            'pk.eyJ1IjoiaGFyc2hkZXNhaSIsImEiOiJja3Zsb2MwbWwyczR6MnBxNXdpd3ZiaHoyIn0.bHareuEM6XwaS4ViVjkisw',
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => setdropOff(data.features[0].center))
  }
  return (
    <Wrapper>
      <ButtonContainer>
        <Link href='/search'>
          <BackButon src='https://img.icons8.com/ios-filled/50/000000/left.png' />
        </Link>
      </ButtonContainer>
      <Map pickUpCoordinates={pickUp} dropoffCoordinates={dropOff} />
      <RideContainer>
        <RideSelector pickupDuration={pickUp} dropoffDuration={dropOff} />
        <RideConfirmButton>
          <ConfirmButton>confirm Uber x</ConfirmButton>
        </RideConfirmButton>
      </RideContainer>
    </Wrapper>
  )
}

const Wrapper = tw.div`
 flex h-screen flex-col
`
const RideContainer = tw.div`
flex flex-1 flex-col h-1/2
`
const RideConfirmButton = tw.div`
border-t-2
`
const ConfirmButton = tw.div`
bg-black text-white text-center my-4 mx-4 py-4 text-xl 
`
const ButtonContainer = tw.div`
rounded-full absolute top-4 left-4 z-10 bg-white
`
const BackButon = tw.img`
h-full object-contain
`
export default Confirm
