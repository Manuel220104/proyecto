import { Link } from 'react-router-dom'
import Logo from '../assets/Images/Logo.png'
import search from '../assets/icons/search.png'
import cart from '../assets/icons/cart.png'
import login from '../assets/icons/login.png'
import like from '../assets/icons/like.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';



export function Navigation() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen)
    }

    const [searchOpen, setSearchOpen] = useState(false);

    const toggleSearch = () => {
        setSearchOpen(!searchOpen)
    }


    // Obtener el current link no se usa

    // const [currentURL, setCurrentURL] = useState('');
    // useEffect(() => {
    //   const currentURL = window.location.pathname;
    //   setCurrentURL(currentURL);
    // }, []);

    //  Busqueda
    const navigate = useNavigate();
    const redirectToURL = '/Productos';
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        navigate(`${redirectToURL}?Busqueda=${searchTerm}`);
    };

    const handleSearchKeyDown = (e) => {
        // Manejar la búsqueda cuando se presiona "Enter" (código de tecla 13)
        if (e.key === 'Enter') {
            e.preventDefault(); // Evitar que se envíe un formulario si está dentro de uno
            handleSearch(); // Llama a tu función de búsqueda aquí
        }
      };

    return (
        <div>
            <div className="navbar">
                <div className="navbar-items">
                    <Link to="/">
                        <img className="navbar-logo" src={Logo} alt="Logo" />
                    </Link>

                    <Link to="/">
                        <div className="navbar-item ocultar enlace">Inicio</div>
                    </Link>

                    <Link to="/Productos">
                        <div className="navbar-item ocultar enlace">Productos</div>
                    </Link>

                    <Link to="/Nosotros">
                        <div className="navbar-item ocultar enlace">Acerca de nosotros</div>
                    </Link>
                </div>

                <div className="navbar-search">
                    <input className="navbar-item search-bar-fake button ocultar" style={{ color: "#5abcf4", }} type="button"  onClick={toggleSearch}/>
                
                    <a href="#" className="navbar-item search-icon" onClick={toggleSearch}><img src={search} alt="Buscar" /></a>

                    <img className="navbar-item cart-icon" src={cart} alt="Carrito" />
                    <Link to="/Mis-MeGusta">
                        <img className="navbar-item like-icon" src={like} alt="Me gusta" />
                    </Link>

                    <div className="navbar-login">
                        <a className="login" href="">
                        <Link to="/Iniciar-Sesion">
                            <img className="login-icon" src={login} alt="login" />
                        </Link>
                        <Link to="/Iniciar-Sesion">
                            <span className="ocultar"> Iniciar sesión / Registrarse</span>
                        </Link>
                        </a>
                    </div>

                    <div className="burguer">
                        <FontAwesomeIcon onClick={toggleSidebar} icon={faBars} style={{ color: "#5abcf4", }} />
                    </div>
                </div>
            </div>

            <div className={`side-bar ${sidebarOpen ? 'active' : ''}`}>
                <div className="flex justify-between items-center">
                    <span className="text-center ml-3">Menu</span>
                    <FontAwesomeIcon onClick={toggleSidebar} icon={faX} style={{ color: "#5abcf4", }} />
                </div>
                <hr className="my-4 border-t-2 border-gray-300" />
                <Link to="/">
                    <div onClick={toggleSidebar} className="navbar-item sidebar-item mt-3 enlace">Inicio</div>
                </Link>

                <Link to="/Productos">
                    <div onClick={toggleSidebar} className="navbar-item sidebar-item enlace">Productos</div>
                </Link>

                <Link to="/Nosotros">
                    <div onClick={toggleSidebar} className="navbar-item sidebar-item enlace">Acerca de nosotros</div>
                </Link>
            </div>

        
            <div className={`search flex justify-content-start items-center justify-center ${searchOpen ? 'active'  : ''}`}>
                <Link to="/">
                    <img className="ml-3 mr-0 navbar-logo ocultar2" src={Logo} alt="Logo" />
                </Link>
                <div className='mid-search w-full h-full flex items-center justify-center'>
                    <input onChange={(e) => setSearchTerm(e.target.value)} onKeyDown={handleSearchKeyDown} className="navbar-item search-bar" type="text" placeholder="" />
                    <button onClick={handleSearch} className="navbar-item search-icon "><img src={search} alt="Buscar" /></button>
                </div>
                <FontAwesomeIcon  className="mr-10"icon={faX} onClick={toggleSearch} style={{ color: "#5abcf4", }} />
            </div>

           
        </div>
    )
}