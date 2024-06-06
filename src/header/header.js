import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

function Header() {
    return (
        <header className="bg-light py-3">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="logo">
                    <img src="" alt="SMK TI BAZMA" />
                </div>
                <nav>
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#link1">Home</a>
                            </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#link2">Profil Sekolah</a>
                            </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#link3">Karir</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#link4">Kontak</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;