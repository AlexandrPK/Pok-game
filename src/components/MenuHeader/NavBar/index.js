import s from './style.module.css';
import cn from 'classnames';

const NavBar = ({onToogleMenu,menuActive}) => {

    const handleToogleMenu = (e) => {
        e.preventDefault()        
        if(typeof onToogleMenu === "function") onToogleMenu()
    }

    return (
        <nav className={s.root}>
            <div className={s.navWrapper}>
                <a className={cn(s.menuButton, {[s.active] : menuActive})} onClick={handleToogleMenu} href="#toogleMenu">
                    <span />
                </a>
            </div>
        </nav>
    )
}

export default NavBar;