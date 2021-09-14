import s from './style.module.css';

const Layout = ({title, titleColor, urlBg, colorBg, children}) => {
    const bg = urlBg ? {backgroundImage: `url(${urlBg})`} : {background: `${colorBg}`};
    return (        
            <section className={s.root} style={bg}>
                <div className={s.wrapper}>
                    <article>
                        <div className={s.title}>
                            <h3 style={{color: `${titleColor}`}}>{title}</h3>
                            <span className={s.separator}></span>
                        </div>
                        <div className={`${s.desc} ${s.full}`}>
                            {children}
                        </div>
                    </article>
                </div>
            </section>
    );
}

export default Layout;