import './App.css';
import NavBar from './Componentes/GUI/NavBar';
import Footer from './Componentes/GUI/Footer';
import Generos from './Componentes/Generos/Generos';
import Medias from './Componentes/Medias/Medias';

function App() {
  return (
    <>
      <div className="Container">
          <NavBar/>      
      </div>
        <Medias/>
        <Footer />
        
      
    </>
  );
}

export default App;
