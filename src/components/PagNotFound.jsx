import React from 'react'
import '../index.css'
import img404 from '../img/404-2.png'

export default function PagNotFound() {
  return (
    <>
    <img src={img404} alt="Pag Not Found" className='imgNotFound'/>
    <p className='text404'>We looked everywhere for this page.</p>
    <p className='text404'>Maybe the website URL isn't correct</p>
    </>
  )
}
