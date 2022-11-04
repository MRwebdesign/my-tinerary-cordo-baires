import React from 'react'
import PagNotFound from '../components/PagNotFound'
import CallToAction from '../components/CallToAction'
import { Link } from 'react-router-dom'
import '../index.css'
import BackToTopButton from '../components/BackToTopButton'

export default function PagNotFoundLayout() {
  return (
    /* crear boton que nos lleve a index */
    /* usar boton cta y link a home */
    /* crear componente para armar notfound (main) */
    <div className='NotFoundLayout'>
        <PagNotFound></PagNotFound>
        <Link to={"/home"}><CallToAction title="HOME"/></Link>
        <BackToTopButton/>
    </div>
  )
}
