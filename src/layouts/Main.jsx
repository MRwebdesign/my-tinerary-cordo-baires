import React from 'react'
import { Link } from 'react-router-dom'
import CallToAction from '../components/CallToAction'

export default function Main() {
  return (
    <div className='main-full flex center'>
        <div className='flex column g-1'>
        <h1>Botones CTA</h1>
        <Link to={"#"}><CallToAction title="Hotels"/></Link>
        <Link to={"#"}><CallToAction title="Cities"/></Link>
        </div>
    </div>
  )
}
