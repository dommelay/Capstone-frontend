import React from 'react'
import axios from 'axios'
import {useEffect, useState} from 'react'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import './App.css'
import AddDisplay from './components/AddDisplay'
import Search from './components/Search'
import MyArtwork from './components/Artworks'

const App = () => {
//  const [favArtworks, setFavArtworks] = useState([])

//  const handleFavArtowrks = () => {
//   axios.get('http://localhost:3000/artworks').then((response) => {
//     setFavArtworks(response.data)
//   })
//  }

//  useEffect(() => {
//   handleFavArtowrks()
//  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/artworks' element={<MyArtwork/>}/>
        <Route path='/artworks/:id' element={<AddDisplay/>}/>
        <Route path='/artworks/search' element={<Search/>}/>

      </Routes>
    </BrowserRouter>
  )
  
}

export default App;
