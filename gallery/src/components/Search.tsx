import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import randomWords from 'random-words'

const Search = () => {
const [searchParam, setSearchParam] = useState('')
const [searchedArtworks, setSearchedArtworks] = useState([])
const [search, setSearch] = useState(false)
const randomSearch: string[] = randomWords({exactly: 2})
const [randomSearchString, setRandomSearchString] = useState('')
const [loading, setLoading] = useState(false)

const randomSearchGeneration = () => {
    const first = randomSearch[0]
    const second = randomSearch[1]
    const string = randomSearch[0] + randomSearch[1]
    const randomString = string.split(' ').join('-')
    setSearchParam(randomString)
}
const handleConcatination = () => {
    const input = searchParam.toString().split(' ').join('-')
    setSearchParam(input)
}
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParam(event.target.value)
}
const handleSubmitSearch = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setSearch(true)
    setLoading(true)
    event.preventDefault()
    handleConcatination()
    axios.get(`https://api.artic.edu/api/v1/artworks/search?q=${searchParam}`).then((response) => {
        if (response && response.data && response.data.data) {
        console.log(response.data)
        setSearchedArtworks(response.data.data)
        }
        setLoading(false)
    })
    setSearchParam('')
}

useEffect(() => {
    console.log(randomSearch)
}, [])

    return (
        <div>
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


            <h1>Search Artworks</h1>
            <form>
                <label htmlFor='searchParam'></label>
                <input onChange={handleChange} type='text' name='search'/>
                <button type='submit' onClick={handleSubmitSearch}>Search</button>
            </form>
            <div className='searchcontainer'>
            {searchedArtworks.length != 0
             && search === true ? searchedArtworks.map((artwork:{id: number, title: string, alt_text: string, thumbnail: {alt_text: string}}) => {
                
                return (  
                    <div className='searchedArt'>
                    
                            <Link to={`/artworks/${artwork.id}`}><h5 className='searchid'>{artwork.id}</h5></Link>
                        <div className='searchinfo'>
                            <h2 className='searchtitle'>{artwork.title}</h2>
                        
                        {artwork.thumbnail != null ?
                        <>
                            <h2 className='searchthumbnail'>{artwork.thumbnail.alt_text}</h2>
                        </>
                        : <>
                        <h2 className='searchthumbnail'>Description unavailable</h2></>}
                        </div>
                    </div> 
                  )
                })
                :
                ( search === false ?
                    <>
                    <div>
                        <h1>Search Display</h1>
                    </div>
                    </>
                : 
                ( loading ? <></> 
                :
                <>
                    <div>
                        <h2>Sorry, there are no results that match your search criteria. Please search again!</h2>
                    </div>
                  </>
                )
                )
                }
                </div>
    
        </div>

    )

}


export default Search

// artwork alt_text should appear only when hovering over the div.
// if else for null search