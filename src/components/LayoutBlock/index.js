import cl from "classnames";

import layout from "./style.module.css";

const Layout = ({id=null, title, descr, urlBg = false, colorBg = "none", children}) => {
    let bg = {
                backgroundImage: urlBg  ? `url(${ urlBg })` : "none",
                backgroundColor: colorBg,
            }
    return (
        <section id={id} className={layout.root} style={bg}>
            <div className={layout.wrapper}>
                <article>
                    <div className={layout.title}>
                        <h3>{title}</h3>
                        <span className={layout.separator}></span>
                    </div>
                    <div className={cl(layout.desc, layout.full)}>
                        { children ?? <p>{ descr }</p>}
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;
