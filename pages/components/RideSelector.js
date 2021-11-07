import { useState, useEffect } from 'react'
import tw from 'tailwind-styled-components'
import { carList } from '../data/carList'
const RideSelector = ({ pickupDuration, dropoffDuration }) => {
  const [rideDuration, setrideDuration] = useState([])
  useEffect(() => {
    fetchduration()
  }, [pickupDuration, dropoffDuration])

  const fetchduration = () => {
    fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupDuration[0]},${pickupDuration[1]};${dropoffDuration[0]},${dropoffDuration[1]}?access_token=pk.eyJ1IjoiaGFyc2hkZXNhaSIsImEiOiJja3Zsb2MwbWwyczR6MnBxNXdpd3ZiaHoyIn0.bHareuEM6XwaS4ViVjkisw`
    )
      .then((res) => {
        return res.json()
      })
      .then((data) => setrideDuration(data.routes[0].duration))
  }
  return (
    <Wrapper>
      <Title>Choose a ride,or swipe up for more</Title>
      <CarList>
        {carList.map((car, index) => {
          return (
            <Car key={index}>
              <CarImage src={car.imgUrl} />
              <CarDetails>
                <Service>{car.service}</Service>
                <Time>{car.Time}</Time>
              </CarDetails>
              <Price>
                {'$ ' + ((rideDuration / 100) * car.multiplier).toFixed(2)}
              </Price>
            </Car>
          )
        })}
      </CarList>
    </Wrapper>
  )
}

export default RideSelector

const CarDetails = tw.div`
flex-1
`
const Service = tw.div`
font-medium

`
const Time = tw.div`
text-xs text-blue-500
`
const Price = tw.div`
 text-xs
`
const Wrapper = tw.div`
  flex flex-col flex-1 overflow-y-scroll
`
const Title = tw.div`
 text-gray-500 text-center text-xs py-2 border-b
`
const CarList = tw.div`
overflow-y-scroll
`
const Car = tw.div`
flex items-center p-4
`

const CarImage = tw.img`
h-14 mr-4
`
