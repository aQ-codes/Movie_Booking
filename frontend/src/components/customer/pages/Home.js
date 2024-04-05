import React from 'react'
import Navbar from '../Navbar'
import ListShows from '../ListShows'
import '../css/Layout.css';

function Home() {
  return (
    <div className='body-2'>
    <Navbar/>
    <ListShows/>
    </div>
  )
}

export default Home
        // <section style={{"background-color": "#eee"}}>

