import cn from "classnames";
import { Link } from "react-router-dom";

import menu from "./style.module.css"

const menuItems = [
    {
        title: "HOME",
        to: "/"
    },
    {
        title: "GAME",
        to: "/game"
    },
    {
        title: "ABOUT",
        to: "/about"
    },
    {
        title: "CONTACT",
        to: "/contact"
    }
]

const Menu = ({ navStatus, navClick }) => {
    return (
        <div className={cn(
            menu.menuContainer, {
            [menu.active]: navStatus === true,
            [menu.deactive]: navStatus === false
        }
        )}>
            <div className={menu.overlay} />
            <div>
                <ul>
                    {
                        menuItems.map(({ title, to }, index) => {
                            return (
                                <li key={index}>
                                    <Link to={to} onClick={navClick}>
                                        {title}
                                    </Link>
                                </li>)
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
export default Menu;
