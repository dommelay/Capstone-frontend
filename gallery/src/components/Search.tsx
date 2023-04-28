import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


const Search = () => {
const [searchParam, setSearchParam] = useState('')
const [searchedArtworks, setSearchedArtworks] = useState([])

const handleConcatination = () => {
    const input = searchParam.toString().split(' ').join('-')
    setSearchParam(input)
}
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParam(event.target.value)
}
const handleSubmitSearch = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    handleConcatination()
    axios.get(`https://api.artic.edu/api/v1/artworks/search?q=${searchParam}`).then((response) => {
        if (response && response.data && response.data.data) {
        console.log(response.data)
        setSearchedArtworks(response.data.data)
        }
    })
    setSearchParam('')
}


    return (
        <div>
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


            <h1>Search Artworks</h1>
            <form>
                <label htmlFor='searchParam'></label>
                <input onChange={handleChange} type='text' name='search'/>
                <button type='submit' onClick={handleSubmitSearch}>Search</button>
            </form>
            {searchedArtworks && searchedArtworks.length != 0
            ? searchedArtworks.map((artwork:{id: number, title: string, alt_text: string, thumbnail: {alt_text: string}}) => {
                
                return (  
                    <div className='searchedArt'>
                        <Link to={`/artworks/${artwork.id}`}>{artwork.id}</Link>
                        <h2>{artwork.title}</h2>
                        {artwork.thumbnail != null ?
                        <h2>{artwork.thumbnail.alt_text}</h2>
                        : <>Description unavailable</>}
                    </div> 
                  )
                })
                 
                : <>
                    <div>
                        <h2>Sorry, there are no results that match your search criteria. Please try again!</h2>
                    </div>
                  </>
                }
    
        </div>

    )

}


export default Search

// artwork alt_text should appear only when hovering over the div.
// if else for null search