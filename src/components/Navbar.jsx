"use client"

function Navbar(){

    return (

        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid ms-lg-5 me-lg-5">
                <a class="navbar-brand" href="#">
                <img src="/images/navbar.jpg" alt="estudio contable" width="80" height="90" className="m-3 rounded-circle img-fluid" />
                </a>            
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item px-4">
                            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li class="nav-item px-4">
                            <a class="nav-link active" aria-current="page" href="#">Servicios</a>
                        </li>
                        <li class="nav-item px-4">
                            <a class="nav-link active" aria-current="page" href="#">Quienes Somos</a>
                        </li>
                        <li class="nav-item px-4">
                            <a class="nav-link active" aria-current="page" href="#">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
      </nav>
    )

}


export default Navbar;