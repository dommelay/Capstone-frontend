import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const Gallery = () => {



    return (
        <>
        <div className='nav'>
        <Link to = {'/gallery'}>
                <h4>Home</h4>
        </Link>
        <Link to={'/my-artworks'}>
          <h4>My Artworks</h4>
        </Link>
        <Link to = {'/artworks/search'}>
          <h4>Search Artworks</h4>
        </Link>
      </div>
        <div>
            <h1>Gallery</h1>
            <img id='galleryimg'src='https://artic-web.imgix.net/1bded726-d44b-49dd-9eea-279d06052341/IPD-2165_press.jpg?rect=0%2C0%2C3000%2C2096&auto=format%2Ccompress&q=80&fit=crop&crop=faces%2Cedges%2Centropy&w=1200&h=838'/>
        </div>
        </>
    )
}

export default Gallery