import React from 'react';
import './assets/css/App.css';

// Importar componentes
import MiComponente from './components/MiComponente'
import Musica from './components/Musica'

// Componentes de la Maquetacion
import Header from './components/Header'
import Slider from './components/Slider'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import SeccionPruebas from './components/SeccionPruebas'

function App() {

    let buttonString = 'Ir al blog'

    return (
        <div className="App">

            <Header />

            <Slider 
                title="Bienvenido a mi ejercicio de practica."
                btn = {buttonString}
            />

            <div className="center">

                <Musica />

                <Sidebar />

            </div>

            <div className="clearfix"></div>
            <Footer />

        </div>
    );
}

export default App;
