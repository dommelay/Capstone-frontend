import React from 'react'
import axios from 'axios'
import {useEffect, useState} from 'react'
import './App.css'

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

const App = () => {
  const [artworks, setArtworks] = useState<Artwork[] | null>()
  

const handleArtworks = () => {
  axios.get('https://api.artic.edu/api/v1/artworks/129884/?fields=id,title,image_id,api_link,date_start,date_end,place_of_origin,artist_title,artwork_type_title,alt_text,iiif_url').then((response) => {
    console.log(response.data.data)
    console.log(response.data.config)
    const artworksData =  [{
      id: response.data.data.id,
      title: response.data.data.title,
      image_id: response.data.data.image_id,
      api_link: response.data.data.api_link,
      date_start: response.data.data.date_start,
      date_end: response.data.data.date_end,
      place_of_origin: response.data.data.place_of_origin,
      artwork_type_title: response.data.data.artwork_type_title,
      artist_title: response.data.data.artist_title,
      iiif_url: response.data.config.iiif_url,
      imageSrc: `${response.data.config.iiif_url}/${response.data.data.image_id}//full/843,/0/default.jpg`,
      updateLink: `https://api.artic.edu/api/v1/artworks/${response.data.data.id}/?fields=id,title,image_id,api_link,date_start,date_end,place_of_origin,artist_title,artwork_type_title,alt_text,iiif_url`,
    }]
    setArtworks(artworksData)
  }).catch((error) => {
    console.log(error)
  })
}

useEffect(() => {
  handleArtworks()
}, [])




  return (
    <div>
        {artworks ?
        artworks.map((artwork) => {
          return <><p key={artwork.id}>{artwork.title}</p></>
        })
      : <p>Loading...</p>}
     </div>
  )
}

export default App;
