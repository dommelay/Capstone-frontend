import React from 'react'
import axios from 'axios'
import {useState, useEffect } from 'react'
import {useParams, Link, useNavigate} from 'react-router-dom'

export interface MyArtwork {
    title: string;
    image_id: string;
    api_link: string;
    date_start: number;
    date_end: number;
    place_of_origin: string;
    artwork_type_title: string;
    artist_title: string;
    iiif_url: string;
    imageSrc: string;
    updateLink: string;
    marker: number;
    _id: string;
  }

const MyArtwork = () => {
   const [artworks, setArtworks] = useState<MyArtwork[]>([])
   const navigate = useNavigate()
   
   const handleArtworks = () => {
    axios.get('http://localhost:3000/my-artworks').then((response) => {
        setArtworks(response.data)
    })
   
   }
   
   useEffect(() => {
    handleArtworks()
},[])

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
   
    <div className='myartworkscontainer'>

    {artworks.map((artwork) => {
        const handleDelete = (event: React.MouseEvent <HTMLButtonElement, MouseEvent>) => {
            event.preventDefault()
            axios.delete(`http://localhost:3000/my-artworks/${artwork._id}`).then((response) => {
                handleArtworks()
            })
        } 
        return (
            <div className='myartwork'>
                <h2>{artwork.title}</h2>
                <h2>{artwork.marker}</h2>
                <h2>{artwork._id}</h2>
                <h2>{artwork.imageSrc}</h2>
                <img src={artwork.imageSrc}/>

                    <button onClick={handleDelete}>Delete</button>
            </div>
        )
    })}
    </div>
  
    {/* <button onClick={handleDelete}>Delete</button> */}
   </> 
)

    {/* <button onClick={handleDelete}>Delete</button> */}



}

export default MyArtwork