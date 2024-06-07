import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

function Header() {
    return (
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <svg className="bi me-2" width="40" height="32"><use href=""></use></svg>
                    <span className="fs-4">SMK TI BAZMA</span>
                </a>
                <ul className="nav nav-pills">
                    <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Profil Sekolah</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Kemitraan</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Karir</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
                </ul>
            </header>
        </div>
    );
}

export default Header;