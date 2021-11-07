import React, { useEffect } from 'react'
import tw from 'tailwind-styled-components'
import { useRouter } from 'next/router'
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth'
import { auth, provider } from '../firbase'
const Login = () => {
  const router = useRouter()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push('/')
      }
    })
  }, [])
  return (
    <Wrapper>
      <UberLogo src='https://i.ibb.co/n6LWQM4/Post.png' />
      <Title>Login to access your account</Title>
      <LoginImage src='https://i.ibb.co/CsV9RYZ/login-image.png' />
      <SignInButton
        onClick={() => {
          signInWithPopup(auth, provider)
        }}
      >
        Sign in with Google
      </SignInButton>
    </Wrapper>
  )
}
const SignInButton = tw.button`
bg-black text-white py-4 rounded-lg mt-4 text-xl
`
const LoginImage = tw.img`
`
const Title = tw.div`
text-5xl text-gray-500 pt-4 
`
const UberLogo = tw.img`
  h-8 self-start 
`
const Wrapper = tw.div`
bg-gray-200 h-screen p-4 w-full flex flex-col
`
export default Login
