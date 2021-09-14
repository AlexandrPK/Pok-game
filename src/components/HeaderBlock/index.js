import s from "./style.module.css";

const Header = ({title,descr,onClickButton}) => {
    const handleClick = () => {
        if(typeof onClickButton === "function" ) onClickButton('game');
    }

    return (
        <header className={s.root}>
            <div className={s.forest}></div>
            <div className={s.container}>
                <h1>{title}</h1>
                <p>{descr}</p>
                <button onClick={handleClick}>Начать игру</button>
            </div>
        </header>
    );
}

export default Header;