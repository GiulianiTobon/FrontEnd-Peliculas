import React from 'react'
import Footer from '../Componentes/GUI/Footer'
import NavBar from '../Componentes/GUI/NavBar'
import Medias from '../Componentes/Medias/Medias'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Generos from '../Componentes/Generos/Generos'
import Productoras from '../Componentes/Productoras/Productoras'
import Directores from '../Componentes/Directores/Directores'

export default function AppRouter() {
  return (
    <BrowserRouter>
    <NavBar/>
    
        <Routes>

    
        <Route path='/' element={Generos}/>
        <Route path='/generos' element={<Generos/>}/>
        <Route path='/medias' element ={<Medias/>}/>
        <Route path='/productoras' element ={<Productoras/>}/> 
        <Route path='/directores' element ={<Directores/>}/>         
        </Routes> 
        
        <Footer />     
    </BrowserRouter>
  )
}
