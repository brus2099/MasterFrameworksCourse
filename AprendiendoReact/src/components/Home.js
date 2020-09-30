import React, { Component } from 'react'
import Slider from './Slider'
import Sidebar from './Sidebar'
import Articles from './Articles'

class Home extends Component {

    render() {

        return (
            <div id="home">
                <Slider
                    title="Bienvenido a mi nuevo blog."
                    btn='Ir al blog'
                />
                <div className="center">
                    <div id="content">
                        <h1 className="subheader">Ultimos articulos en entrada</h1>
                        <Articles 
                            home="true"    
                        />
                    </div>
                    <Sidebar />
                </div>
            </div>
        )
    }
}

export default Home