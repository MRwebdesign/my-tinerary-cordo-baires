import React from 'react'
import FooterNetworks from '../components/FooterNetworks'
import FooterPages from '../components/FooterPages'
import FooterMaps from '../components/FooterMaps'
import '../index.css'

export default function footer() {
  return (
    <div className='flex justify-around footerLayout'>
        <FooterNetworks></FooterNetworks>
        <FooterPages></FooterPages>
        <FooterMaps></FooterMaps>
    </div>
  )
}
