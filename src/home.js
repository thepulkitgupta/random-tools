import React from 'react';
import { Link } from 'react-router-dom';
import './resources/css/Button3D.css'
function Home() {
    return (

        <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
            <div style={{ fontSize: "15vmin" }}>
                <div onTouchStart="">
                    <div className="button3d">
                        <Link to="/Utilities">Fun Ahead</Link>
                    </div>
                    <div className="button3d">
                        <a href="https://www.google.com" target="_blank"> Anime Search </a>
                    </div>
                </div>
             </div>
         </div>
    );
}

export default Home;
