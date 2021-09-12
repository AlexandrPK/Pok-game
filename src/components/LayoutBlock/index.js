import l from './style.module.css'


const Layout = ({title, descr, urlBg, colorBg, children,}) => {

  const bgR = {
    backgroundImage: urlBg ? `url("${urlBg}")` : null,
    backgroundColor: `${colorBg}`,
  };
  
  return (
    <>
       <section className={l.root} style={bgR}>
        <div className={l.wrapper}>
          <article>
            <div className={l.title}>
            <h3>{title}</h3>
            <span className={l.separator}></span>
            </div>
            <div className={`${l.desc} ${l.full}`}>{children}</div>
          </article>
        </div>
        </section>
    </>
    );
}

export default Layout;
