import Link from 'next/link';
import Contato from '../pages/contato';
import Sobre from '../pages/sobre';
import Funcionalidades from '../pages/Funcionalidade';

const linkStyle = { marginRight: 55 }

const Menu = () => {
    return (
        <div>
            <Link href="/">
                <a> Home </a>
            </Link>
            <Link href="/sobre">
                <a> sobre </a>
            </Link>
            <Link href="/contato">
                <a> Contato </a>
            </Link>
            <Link href="/Funcionalidade">
                <a> Funcionalidade </a>
            </Link>
        </div>
    )
}

export default Menu;