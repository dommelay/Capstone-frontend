import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams, useNavigate, Link} from 'react-router-dom'

export interface MyArtwork {
    marker: number;
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

const ArtworkCR = () => {
    const {id} = useParams<{id: string}>()
    const [artwork, setArtwork] = useState<MyArtwork | null>()
    const navigate = useNavigate()
    const [added, setAdded ] = useState(false)

    const handleArtwork = () => {
        axios.get(`https://api.artic.edu/api/v1/artworks/${id}/?fields=id,title,image_id,api_link,date_start,date_end,place_of_origin,artist_title,artwork_type_title,alt_text,iiif_url`).then((response) => {
          console.log(response.data.data)
          console.log(response.data.config)
          const artworkData =  {
            marker: response.data.data.id,
            title: response.data.data.title,
            image_id: response.data.data.image_id,
            api_link: response.data.data.api_link,
            date_start: response.data.data.date_start,
            date_end: response.data.data.date_end,
            place_of_origin: response.data.data.place_of_origin,
            artwork_type_title: response.data.data.artwork_type_title,
            artist_title: response.data.data.artist_title,
            iiif_url: response.data.config.iiif_url,
            imageSrc: `${response.data.config.iiif_url}/${response.data.data.image_id}/full/843,/0/default.jpg`,
            updateLink: `https://api.artic.edu/api/v1/artworks/${response.data.data.id}/?fields=id,title,image_id,api_link,date_start,date_end,place_of_origin,artist_title,artwork_type_title,alt_text,iiif_url`,
          }
          setArtwork(artworkData)
        }).catch((error) => {
          console.log(error)
        })
      }
      const handleAdd = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        axios.post('http://localhost:3000/my-artworks', artwork).then((response) => {
          console.log(response)
          setAdded(true)
        })
      }
      useEffect(() => {
        handleArtwork()
      }, [])

      return (
        <div>
           <div className='nav'>
      <Link to={'/my-artworks'}>
        <h4>My Artworks</h4>
      </Link>
      <Link to = {'/artworks/search'}>
        <h4>Search Artworks</h4>
      </Link>
    </div>
            {artwork 
            ? 
            <div>
              <h2 key={artwork.marker}>{artwork.title}</h2>
              <h2>{artwork.artist_title}</h2>
              <img src={artwork.imageSrc}/>
              {added
              ? 
              <><h2>{artwork.title} added to your collection!</h2></>
              :
              <button onClick={handleAdd}>Add Artwork</button>
              }
            </div>
          : <p>Loading...</p>}
         </div>
      )
}


export default ArtworkCR
// , {
//   headers: {
//     'Access-Control-Allow-Origin': '*'
//   }
//   }