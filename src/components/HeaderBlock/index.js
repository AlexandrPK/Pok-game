import hed from './style.module.css'

const Header = ({title, descr}) => {
  return (
    <>
      <header className = {hed.root}>
        <div className = {hed.forest}></div>
        <div className = {hed.container}>
            <h1>{title}</h1>
            <p>{descr}</p>
        </div>
    </header>
    </>
    );
}

export default Header;
