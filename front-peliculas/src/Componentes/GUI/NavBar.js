import React from 'react'
import Generos from '../Generos/Generos'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

export default function NavBar() {
    return (
        <Router>
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
                            <a className="nav-link active" href="#">Peliculas y Series</a>
                        </li>
                        <li class="nav-item">
                            <Link className='nav-link active' to="/generos">Géneros</Link>
                        </li>
                        <li class='nav-item' href="#">
                            <a className='nav-link active' href="<Directores />">Directores</a>    
                        </li>
                        <li class='nav-item' href="#">
                            <a className='nav-link active' href="#">Productoras</a>    
                        </li>    
                    </ul>
                    
                    <form class="d-flex col-2" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                    </div>
                </div>
                <Routes>
                    <Route path="/generos" component= {<Generos />}/>
                </Routes>
            </nav>
        </Router>
    )
}
