import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li><NavLink to='/profile' activeClassName={s.active}>Profile</NavLink></li>
                <li><NavLink to='/dialogs' activeClassName={s.active}>Message</NavLink></li>
                <li><NavLink to='/news' activeClassName={s.active}>News</NavLink></li>
                <li><NavLink to='/music' activeClassName={s.active}>Music</NavLink></li>
                <li><NavLink to='/settings' activeClassName={s.active}>Settings</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar;