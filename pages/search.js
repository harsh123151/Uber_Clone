import { useState, useEffect } from 'react'
import tw from 'tailwind-styled-components'
import Link from 'next/link'

const Search = () => {
  const [pickUpLocation, setpickUpLocation] = useState('')
  const [dropOffLocation, setdropOffLocation] = useState('')
  return (
    <Wrapper
      onKeyUp={(e) => {
        if (e.keyCode === 13) {
          document.getElementById('confirmbutton').click()
        }
      }}
    >
      <Link href='/'>
        <ButtonContainer>
          <BackButton src='https://img.icons8.com/ios-filled/50/000000/left.png' />
        </ButtonContainer>
      </Link>
      <InputContainer>
        <FromToIcon>
          <Circle src='https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png' />
          <Line src=' https://img.icons8.com/ios/50/9CA3AF/vertical-line.png' />
          <Square src='https://img.icons8.com/windows/50/000000/square-full.png' />
        </FromToIcon>
        <InputBoxes>
          <InputBox
            placeholder='Enter Pickup Location...'
            value={pickUpLocation}
            onChange={(e) => setpickUpLocation(e.target.value)}
          />
          <InputBox
            placeholder='Where To?'
            value={dropOffLocation}
            onChange={(e) => setdropOffLocation(e.target.value)}
          />
        </InputBoxes>
        <PlusIcon src='https://img.icons8.com/ios/50/000000/plus-math.png' />
      </InputContainer>
      <SavedPlaces>
        <StarIcon src='https://img.icons8.com/ios-filled/50/ffffff/star--v1.png' />
        Saved Places
      </SavedPlaces>
      <Link
        href={{
          pathname: '/Confirm',
          query: {
            pickup: pickUpLocation,
            dropoff: dropOffLocation,
          },
        }}
      >
        <Confirm id='confirmbutton'>
          <ConfirmButton>Confirm Location</ConfirmButton>
        </Confirm>
      </Link>
    </Wrapper>
  )
}

export default Search

const Wrapper = tw.div`
bg-gray-200 h-screen
`
const ButtonContainer = tw.div`
bg-white px-4
`
const BackButton = tw.img`
h-12
`
const InputContainer = tw.div`
flex bg-white items-center justify-between px-4 mb-2
`
const FromToIcon = tw.div`
w-10 flex flex-col mr-4 items-center
`
const Circle = tw.img`
 h-4
`
const Line = tw.img`
 h-10
`
const Square = tw.img`
 h-4
`
const InputBoxes = tw.div`
flex flex-col flex-1
`
const InputBox = tw.input`
 bg-gray-200 h-10 my-2 p-2 outline-none border-none rounded-4
`
const PlusIcon = tw.img`
 w-10 h-10 bg-gray-200 rounded-full ml-4
`
const SavedPlaces = tw.div`
 flex items-center bg-white px-4 py-2 mb-2
`
const StarIcon = tw.img`
 w-10 h-10 bg-gray-400 rounded-full p-2 mr-2
`
const Confirm = tw.div`
bg-black flex justify-center items-center py-2 h-12 mx-4 rounded transform hover:scale-105  text-lg transition 
`
const ConfirmButton = tw.button`
text-white w-full 
`
