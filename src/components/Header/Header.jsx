import h from './Header.module.css';

const Header = () => {
    return (
        <header className={h.header}>
            <img className={h.logo} src='https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg' />
        </header>
    )
}

export default Header;