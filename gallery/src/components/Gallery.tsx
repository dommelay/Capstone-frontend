import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const Gallery = () => {



    return (
        <>
        <div className='nav'>
            <div id='topnav'>
                <Link style={{ textDecoration: 'none' }} to = {'/gallery'}>
                        <h4 className='navlink'>Home</h4>
                </Link>
            </div>
            <div id='middlenav'> 
                <Link style={{ textDecoration: 'none' }} to = {'/artworks/search'}>
                <h4 className='navlink'>Search Artworks</h4>
                </Link>
            </div>
            <div>
                <Link style={{ textDecoration: 'none' }} to={'/my-artworks'}>
                <h4 className='navlink'>My Artworks</h4>
                </Link>
            </div>
            <div id='artlogodiv'>
            <img id='artlogo' src={process.env.PUBLIC_URL + '/ArtLogo.png'} ></img>
            </div>
      </div>
        <div id='galleryimgdiv'>
            <img id='galleryimg'src='https://artic-web.imgix.net/1bded726-d44b-49dd-9eea-279d06052341/IPD-2165_press.jpg?rect=0%2C0%2C3000%2C2096&auto=format%2Ccompress&q=80&fit=crop&crop=faces%2Cedges%2Centropy&w=1200&h=838'/>
        </div>
        <div>
            <h1>Gallery</h1>
        </div>
        
        </>
    )
    
}

export default Gallery

//responsive design, have bottom text move right as ecreen enlarges; flex column to flex row with media query