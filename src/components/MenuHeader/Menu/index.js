import m from './style.module.css';
import cn from 'classnames';

const Menu = ({ onChangePage }) => {

    const handleChangePage = (page) => {
        
        //Это неправильный путь, нужно использовать router.route("куда-нибудь") через систему подписки на события
        //к сожалению я не не застал все эти новомодные библиотеки, моя жизнь перестала быть связана с компьютером когда только появилась перевая версия jquery и набирал популярность prototype.js
        //и пока не совсем понимаю, как вся эта кухня работает
        //а всплывание каждого отдельно взятого события пузырём очень сильно загрязняет код повторяющимися строками  
        //console.log(e.target.attributes.href.value) <--- раньше не было стрелочных функций и я бы искал нужное вот так
        //console.log(page)
        if (typeof onChangePage === "function") onChangePage(page)
        return false
    }

    return (
        <div className={cn(m.menuContainer, { [m.active]: true })}>
            <div className={m.overlay} />
            <div className={m.menuItems}>
                <ul>
                    <li>
                        <a href="#home" onClick={(e) => {e.preventDefault();handleChangePage('home')}}Ъ>
                            HOME
                        </a>
                    </li>
                    <li>
                        <a href="#game" onClick={(e) => {e.preventDefault();handleChangePage('game')}}>
                            GAME
                        </a>
                    </li>
                    <li>
                        <a href="#about">
                            ABOUT
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            CONTACT
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Menu;