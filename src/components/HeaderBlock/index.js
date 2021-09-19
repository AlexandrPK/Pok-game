import header from './style.module.css';


const Header = ({ title = "", descr = "" }) => {
    return (
        <header id="welcome" className={header.root} >
            <div className={header.forest}></div>
            <div className={header.silhouette}></div>
            <div className={header.moon}></div>
            <div className={header.container}>
                <h1>{title}</h1>
                <p>{descr}</p>
            </div>
        </header>
    )
}


export default Header;