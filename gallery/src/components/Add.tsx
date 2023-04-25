import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
// import {useHistory} from 'react-router-dom'


const Add = () => {
const [searchParam, setSearchParam] = useState('')
const [searchedArtworks, setSearchedArtworks] = useState([])

const handleConcatination = () => {
    const input = searchParam.split(' ').join('-')
    setSearchParam(input)
}
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParam(event.target.value)
}
const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    handleConcatination()
    axios.get(`https://api.artic.edu/api/v1/artworks/search?q=${searchParam}`).then((response) => {
        console.log(response.data)
        setSearchedArtworks(response.data.data)
    })
    setSearchParam('')
}


    return (
        <div>
            <h1>Search Artworks</h1>
            <form>
                <label htmlFor='searchParam'></label>
                <input onChange={handleChange} type='text' name='search'/>
                <button type='submit' onClick={handleSubmit}>Search</button>
            </form>
            {searchedArtworks 
            ? searchedArtworks.map((artwork:{id: number, title: string, alt_text: string, thumbnail: {alt_text: string}}) => {
              return (  
                <div className='searchedArt'>
                    <h2>{artwork.id}</h2>
                    <h2>{artwork.title}</h2>
                    <h2>{artwork.thumbnail.alt_text}</h2>
                </div> 
              )
            })
             
            : <></>}
        </div>

    )


}


export default Add