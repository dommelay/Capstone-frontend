import React from 'react'
import axios from 'axios'
import {useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'

export interface Artwork {
    id: number;
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
  }

const MyArtwork = () => {
   const [artworks, setArtworks] = useState<Artwork[]>([])

   const handleArtworks = () => {
    axios.get('http://localhost:3000/artworks').then((response) => {
        setArtworks(response.data)
    })
   }
   useEffect(() => {
    handleArtworks()
},[])
    


    return (
        <>
   {artworks.map((artwork) => {
    return (
        <div>
            <h2>{artwork.title}</h2>
        </div>
    )
})}
</>
    )

}

export default MyArtwork