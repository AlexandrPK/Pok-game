import { useState } from "react";
import Menu from "./Menu";
import NavBar from "./NavBar";



const MenuHeader = ({onChangePage}) => {
    const [menuActive, setMenuActive] = useState(false);
    const toogleMenu = () => {
        setMenuActive(!menuActive)
    }

    const handleChangePage = (page) => {
        if(typeof onChangePage === "function") onChangePage(page)
        setMenuActive(false)
    }

    return (
        <>
            {menuActive && <Menu onChangePage={handleChangePage} />}
            <NavBar onToogleMenu={toogleMenu} menuActive={menuActive} />
        </>
    )


};

export default MenuHeader;