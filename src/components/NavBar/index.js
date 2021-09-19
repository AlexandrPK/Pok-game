import cn from "classnames";

import navbar from "./style.module.css"

const NavBar = ({navStatus = false, bgActive, changeNavStatus}) => {
    const onNavBtnClick = () => {
        changeNavStatus && changeNavStatus()
    }
    return (
        <nav className={cn(navbar.root, {[navbar.bgActive]: bgActive})  } id={navbar.navbar}>
            <div className={navbar.navWrapper}>
                <p className={navbar.brand}>
                    LOGO {bgActive}
                </p>
                <div className={ cn(navbar.menuButton, {[navbar.active]: navStatus})} onClick={onNavBtnClick}>
                    <span />
                </div>
            </div>
        </nav>
    )
}
export default NavBar;