import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Main } from './pages/Main';
import { AboutUs } from './pages/AboutUs';
import { ProductPage } from './pages/ProductPage';
import { Admin } from './pages/Admin';
import { Liked } from './pages/Liked';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { CreateProduct } from './pages/CreateProduct';
import { EditProduct } from './pages/EditProduct';
import { DeleteProduct } from './pages/DeleteProduct';
import { CreateCarouselInfo } from './pages/CreateCarouselInfo';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ProductDetail } from './components/ProductDetail';


function App() {

  const [showFooter, setShowFooter] = useState([]);;
    useEffect(() => {
      const handleShowFooter = () => {
        const location = window.location.pathname;
        const shouldShowFooter = !location.includes('/admin',);
        setShowFooter(shouldShowFooter);
      };
      handleShowFooter();
  },[window.location.pathname]);

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        {/* redirect to url element={<Navigate to="/Books" />} */}
        <Route path="/" element={<Main />} />
        <Route path="/Productos" element={<ProductPage />}/>
        <Route path="/Productos/Libros" element={<ProductPage />} />
        <Route path="/Productos/InstrumentosMusicales" element={<ProductPage />} />
        <Route path="/Productos/JuegosDeMesa" element={<ProductPage />} />
        <Route path="/Productos/Tecnologia" element={<ProductPage />} />
        <Route path="/Productos/DetalleProducto/:productId" element={<ProductDetail />} />
        <Route path="/Crear-Productos" element={<CreateProduct />} />
        <Route path="/Editar-Productos" element={<EditProduct />} />
        <Route path="/Delete-Productos" element={<DeleteProduct />} />
        <Route path="/Crear-Informacion-Carrusel" element={<CreateCarouselInfo />} />
        <Route path="/Mis-MeGusta" element={<Liked />} />
        <Route path="/Iniciar-Sesion" element={<Login />} />
        <Route path="/Registro-Usuario" element={<Signup />} />
        <Route path="/Nosotros" element={<AboutUs />} />
        <Route path="/Admin" element={<Admin />} />
      </Routes>
      {showFooter && <Footer/>}
    </BrowserRouter>
  )
}

export default App;