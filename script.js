body {
    font-family: Arial, sans-serif;
    color: #263238;
    background: #fff;
}

html {
    scroll-behavior: smooth;
}

.top-bar {
    background: #087f5b;
    color: white;
    font-size: 14px;
    padding: 8px 0;
}

.logo {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: #0b9b6d;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    font-weight: bold;
}

.navbar-brand strong {
    display: block;
    color: #087f5b;
    font-size: 20px;
    line-height: 18px;
}

.navbar-brand span {
    color: #555;
    font-size: 14px;
}

.nav-link {
    font-weight: 600;
    margin: 0 5px;
}

.nav-link:hover,
.nav-link.active {
    color: #087f5b !important;
}

.carrito-btn {
    border-radius: 25px;
}

.hero-slide {
    height: 550px;
    display: flex;
    align-items: center;
    background-size: cover;
    background-position: center;
    position: relative;
}

.hero-slide::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, .48);
}

.slide-1 {
    background-image: url("https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=1600&q=80");
}

.slide-2 {
    background-image: url("https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1600&q=80");
}

.slide-3 {
    background-image: url("https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1600&q=80");
}

.hero-content {
    position: relative;
    color: white;
    max-width: 650px;
    z-index: 2;
}

.etiqueta,
.titulo-verde {
    color: #0b9b6d;
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 14px;
}

.hero .etiqueta {
    color: #8ff0c8;
}

.hero h1 {
    font-size: 55px;
    font-weight: 700;
    margin: 15px 0;
}

.hero p {
    font-size: 20px;
    margin-bottom: 25px;
}

.btn-success {
    background: #087f5b;
    border-color: #087f5b;
}

.btn-success:hover {
    background: #056548;
    border-color: #056548;
}

.buscador {
    margin-top: -35px;
    position: relative;
    z-index: 5;
}

.search-box {
    background: white;
    padding: 15px;
    border-radius: 15px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, .15);
    display: flex;
    gap: 10px;
    align-items: center;
}

.search-box i {
    font-size: 25px;
    color: #087f5b;
}

.search-box input {
    border: none;
    box-shadow: none !important;
}

.categoria {
    text-align: center;
    background: white;
    padding: 30px 15px;
    border-radius: 18px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, .08);
    transition: .3s;
    cursor: pointer;
    height: 100%;
}

.categoria:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, .14);
}

.categoria-icon {
    width: 70px;
    height: 70px;
    margin: auto;
    border-radius: 50%;
    background: #e5f7f0;
    color: #087f5b;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    margin-bottom: 15px;
}

.productos {
    background: #f5f9f7;
}

.producto-card {
    border: none;
    border-radius: 18px;
    overflow: hidden;
    height: 100%;
    transition: .3s;
    box-shadow: 0 5px 20px rgba(0, 0, 0, .07);
}

.producto-card:hover {
    transform: translateY(-7px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, .13);
}

.producto-img {
    height: 180px;
    background: #e8f8f1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #087f5b;
    font-size: 70px;
}

.producto-img.vitamina {
    background: #fff6df;
    color: #e09b00;
}

.producto-img.higiene {
    background: #e7f3ff;
    color: #2580c4;
}

.producto-img.bebe {
    background: #fff0f4;
    color: #e15c86;
}

.categoria-producto {
    color: #087f5b;
    font-size: 13px;
    font-weight: bold;
}

.producto-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
}

.producto-bottom strong {
    color: #087f5b;
    font-size: 21px;
}

.promociones {
    background: white;
}

.promo-card {
    padding: 35px;
    border-radius: 20px;
    background: #e9f8f1;
    height: 100%;
    position: relative;
    overflow: hidden;
}

.promo-card:nth-child(2) {
    background: #fff7e5;
}

.promo-card:nth-child(3) {
    background: #eaf3ff;
}

.promo-tag {
    color: #087f5b;
    font-size: 13px;
    font-weight: bold;
    letter-spacing: 1px;
}

.promo-card h3 {
    margin: 15px 0;
}

.servicios {
    background: #f5f9f7;
}

.servicio {
    background: white;
    text-align: center;
    padding: 40px 25px;
    border-radius: 20px;
    height: 100%;
    box-shadow: 0 5px 20px rgba(0, 0, 0, .07);
    transition: .3s;
}

.servicio:hover {
    transform: translateY(-7px);
}

.servicio > i {
    font-size: 45px;
    color: #087f5b;
}

.servicio h4 {
    margin: 20px 0 10px;
}

.ubicacion {
    background: white;
}

.dato {
    display: flex;
    gap: 15px;
    margin-top: 20px;
}

.dato > i {
    width: 45px;
    height: 45px;
    min-width: 45px;
    background: #e6f7f0;
    color: #087f5b;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.dato p {
    margin: 5px 0 0;
    color: #666;
}

.mapa {
    min-height: 380px;
    border-radius: 25px;
    background: linear-gradient(135deg, #087f5b, #0db77d);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 30px;
}

.mapa > i {
    font-size: 75px;
    margin-bottom: 15px;
}

.contacto {
    background: #087f5b;
    color: white;
}

.contacto h2 {
    font-size: 38px;
}

.contacto span {
    color: #a7f5d5;
    font-weight: bold;
    letter-spacing: 1px;
}

footer {
    background: #17211d;
    color: #bfc9c5;
    padding: 60px 0 25px;
}

.footer-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    color: white;
    font-size: 20px;
    margin-bottom: 20px;
}

.footer-logo .logo {
    width: 40px;
    height: 40px;
}

footer h5 {
    color: white;
    margin-bottom: 20px;
}

footer a {
    display: block;
    color: #bfc9c5;
    text-decoration: none;
    margin-bottom: 10px;
}

footer a:hover {
    color: #6de0b4;
}

footer p {
    margin-bottom: 10px;
}

.redes {
    display: flex;
    gap: 10px;
}

.redes a {
    width: 40px;
    height: 40px;
    background: #27342f;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
}

.redes a:hover {
    background: #087f5b;
    color: white;
}

.carrito-vacio {
    text-align: center;
    padding: 30px;
    color: #777;
}

.carrito-vacio i {
    font-size: 50px;
    color: #aaa;
}

.item-carrito {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eee;
    padding: 15px 0;
}

@media (max-width: 768px) {

    .top-bar .container {
        justify-content: center !important;
        gap: 15px;
        font-size: 12px;
    }

    .hero-slide {
        height: 500px;
    }

    .hero h1 {
        font-size: 38px;
    }

    .hero p {
        font-size: 17px;
    }

    .search-box {
        flex-wrap: wrap;
    }

    .search-box input {
        width: 70%;
    }

    .search-box button {
        width: 100%;
    }

    .contacto {
        text-align: center;
    }

    .contacto .text-md-end {
        text-align: center !important;
        margin-top: 20px;
    }

}