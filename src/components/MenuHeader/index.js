import Menu from "../../components/Menu";
import NavBar from "../../components/NavBar";
import { useState } from "react";

const MenuHeader = ({bgActive = false}) => {

    const [navStatus, setNavStatus] = useState(null);

    const changeNavStatus = () => {
        setNavStatus(prevState => !prevState);
    }
    const navClick = () => {
        setNavStatus(null);
    }

    return (
        <>
            <Menu
                navStatus={navStatus}
                navClick={navClick}
            />
            <NavBar
                navStatus={navStatus}
                changeNavStatus={changeNavStatus}
                bgActive={bgActive}
            />
        </>
    )
}

export default MenuHeader;
