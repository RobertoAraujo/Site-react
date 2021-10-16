import Link from 'next/link';
import Contato from '../pages/contato';
import Sobre from '../pages/sobre';
import Funcionalidades from '../pages/Funcionalidade';

const linkStyle = { marginRight: 55 }

const Menu = () => {
    return (
       
            <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Logo</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Features</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                            </li>
                        </ul>
                        <span class="navbar-text">
                            Navbar text with an inline element
                        </span>
                    </div>
                </div>
            </nav>
           
        
    )
}

export default Menu;