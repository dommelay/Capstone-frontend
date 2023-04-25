import React from 'react'
import axios from 'axios'
import {useEffect, useState} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Test from './components/Test'
import Add from './components/Add'

const App = () => {
 const [favArtworks, setFavArtworks] = useState([])

 const handleFavArtowrks = () => {
  axios.get('http://localhost:3000/artworks').then((response) => {
    setFavArtworks(response.data)
  })
 }

 useEffect(() => {
  handleFavArtowrks()
 }, [])

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Test/>}/>
        <Route path='/artworks/search' element={<Add/>}/>

      </Routes>
    </BrowserRouter>
  )
  
}

export default App;
