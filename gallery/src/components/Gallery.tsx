import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const Gallery = () => {



    return (
        <>
        <div className='nav'>
        <Link to={'/my-artworks'}>
          <h4>My Artworks</h4>
        </Link>
        <Link to = {'/artworks/search'}>
          <h4>Search Artworks</h4>
        </Link>
      </div>
        <div>
            <h1>Gallery</h1>
        </div>
        </>
    )
}

export default Gallery