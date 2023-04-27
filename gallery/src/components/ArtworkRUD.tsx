import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import {useParams, Link, useNavigate } from 'react-router-dom'

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
    _id: number;
  }

const ArtworkRUD = () => {
    const navigate = useNavigate()
    const {id} = useParams<{id: string}>()
    const [artwork, setArtwork] = useState<MyArtwork | null>()

    const handleArtwork = () => {
        axios.get(`http://localhost:3000/my-artworks/${id}`).then((response) => {
            setArtwork(response.data)
        })
    }
    const handleDelete = (event: React.MouseEvent <HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        axios.delete(`http://localhost:3000/my-artworks/${id}`).then((response) => {
            navigate('/gallery')
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
              <img src={artwork.imageSrc}/>
              <button onClick={handleDelete}>Delete From Collection</button>
            </div>
          : <p>Loading...</p>}
         </div>


    )
}


export default ArtworkRUD