import React, { useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import {Link} from "react-router-dom";


function Navbar() {

    const[cats, setCats] = useState([])

    useEffect(() => {
        axios({
            method: "GET",
            url: "/api/category/"
        }).then(response => {
            setCats(response.data)
        })
    }, [])

    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">

                        {cats.map(c => (
                                //     <a className="nav-link" href="#" key={c.id}>{c.name}</a>
                                // ))}
                        <Link className="nav-link" to={{pathname: `/category/${c.id}/`, fromDashboard: false}}>{c.name}</Link>
                        ))}

                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
