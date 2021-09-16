import s from "./style.module.css"

import MenuHeader from '../../components/MenuHeader/index.js';
import Layout from '../../components/LayoutBlock/index.js';
import Footer from '../../components/FooterBlock/index.js';
import PokemonCard from '../../components/PokemonCard/index.js';

import POKEMONS from '../../pokemon.json';

const GamePage = ({onChangePage}) => {
    const handleChangePage = (page) => {
        if(typeof onChangePage === "function") onChangePage(page);
    }
    return (
        <>
            <MenuHeader onChangePage={handleChangePage} />

            <Layout title="Cards" titleColor="#FEFEFE" colorBg="#202736">
                <div id="cards" className={s.flex}>
                    {POKEMONS.map(item => <PokemonCard id={item.id} name={item.name} type={item.type} img={item.img} values={item.values} key={item.id} />)}
                </div>
            </Layout>
            <Footer />
        </>
    )

}

export default GamePage;