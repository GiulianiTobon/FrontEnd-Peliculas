import React from 'react'
import Generos from '../Generos/Generos'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

export default function NavBar() {
    return (
        
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src='.\Front-end\front-peliculas\public\logoLogin.png'></img>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link className="nav-link active" to="/medias">Peliculas y Series</Link>
                        </li>
                        <li class="nav-item">
                            <Link className='nav-link active' to="/generos">Géneros</Link>
                        </li>
                        <li class='nav-item' href="#">
                            <Link className='nav-link active' to="/directores">Directores</Link>    
                        </li>
                        <li class='nav-item' href="#">
                            <Link className='nav-link active' to="/productoras">Productoras</Link>    
                        </li>    
                    </ul>
                    
                    <form class="d-flex col-2" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                    </div>
                </div>
            </nav>
        
    )
}
