import React, { useState } from 'react'
import PropTypes from 'prop-types';
// import {Link} from "react-router-dom"
export default function Navbar(props) {
    const [isdarkmode, setdarkmode] = useState(false);
    const [text, settext] = useState("Enable dark mode");
    let mystyle = {
        color: ' white',
        backgroundColor: '#273a9b'
    }
    const toggledarklight = () => {
        setdarkmode(!isdarkmode);

        console.log('hey')
        document.body.classList.toggle('dark-mode')
        if (text === "Enable dark mode") {
            settext("Enable light mode")
            props.showAlert('Dark mode is enabled', 'success')
        }
        else {
            settext("Enable dark mode")
            props.showAlert('Light mode is enabled', 'success')
        }
    }

    return (

        <nav className="navbar navbar-expand-lg " style={mystyle}>
            <div className="container-fluid ">
                <a className="navbar-brand " style={mystyle} href="#">{props.title} </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active " style={mystyle} aria-current="page" href="#">Home</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" style={mystyle} href="#">{props.text} </a>
                        </li> */}

                    </ul>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" onClick={toggledarklight} role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label text-light" htmlFor="flexSwitchCheckDefault">{text}</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string
}

//setting default props
Navbar.defaultProps = {
    title: "this is the default title",
    text: "this is the default text"
}
