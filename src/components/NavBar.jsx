import React from 'react'
import ButtonNav from './ButtonNav'
import ButtonNavSig from './ButtonNavSig'


export default function NavBar() {
  return (
    <>
    <div className='flex justify-between navBar'>
    <ButtonNav className="navBarH" titulo="Home" texto1="Cities" texto2="Hotels" />
    <ButtonNavSig className="navBarR" titulo="Register" texto1="Sign In" texto2="Sign Up" />
    </div>
    </>
  )
}
