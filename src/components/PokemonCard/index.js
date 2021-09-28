<<<<<<< Updated upstream
import s from "./style.module.css";
import cardBack from "./assets/card-back-side.jpeg";
import { useState } from "react";
const PokemonCard = ({ img, name, stats, type, values, id }) => {
  const [isActive, setActive] = useState(false);
  const handleClick = () => {
    setActive(!isActive);
  };
  return (
    <div className={s.root} onClick={handleClick}>
      <div className={`${s.pokemonCard} ${isActive && s.active}`}>
        <div className={s.cardFront}>
          <div className={`${s.wrap} ${s.front}`}>
            <div className={`${s.pokemon} ${s[type]}`}>
              <div className={s.values}>
                <div className={`${s.count} ${s.top}`}>{values.top}</div>
                <div className={`${s.count} ${s.right}`}>{values.right}</div>
                <div className={`${s.count} ${s.bottom}`}>{values.bottom}</div>
                <div className={`${s.count} ${s.left}`}>{values.left}</div>
              </div>
              <div className={s.imgContainer}>
                <img src={img} alt={name} />
              </div>
              <div className={s.info}>
                <span className={s.number}>#{id}</span>
                <h3 className={s.name}>{name}</h3>
                <small className={s.type}>
                  Type: <span>{type}</span>
                </small>
              </div>
            </div>
          </div>
        </div>

        <div className={s.cardBack}>
          <div className={`${s.wrap} ${s.back}`}>
            <img src={cardBack} alt="Сard Backed" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PokemonCard;
=======
import cn from 'classnames'
import s from './style.module.css'

const PokemonCard = ({objectId, className, isSelected=false, minimize = false, id, name, type, img, values, isActive = false, pickCard, possession}) => {
    const handleCardClick =() =>{
        pickCard && pickCard(objectId);
    };
    return(
        <div className={cn(className, s.pokemonCard, {[s.active]: isActive},{[s.selected]: isSelected})} onClick={handleCardClick}>
            <div className={s.cardFront} >
                <div className={cn(s.wrap, s.front)}>
                    <div className={cn(s.pokemon, s[type], s[possession])} >
                        <div className={s.values}>
                            <div className={cn(s.count, s.top)}>{values.top}</div>
                            <div className={cn(s.count, s.right)}>{values.right}</div>
                            <div className={cn(s.count, s.bottom)}>{values.bottom}</div>
                            <div className={cn(s.count, s.left)}>{values.left}</div>
                        </div>
                        <div className={s.imgContainer}>
                            <img src={img} alt={name} />
                        </div>
                        { !minimize && (<div className={s.info}>
                            <span className={s.number}>#{id}</span>
                            <h3 className={s.name}>
                                {name}
                            </h3>
                            <small className={s.type}>
                                Type: <span>{type}</span>
                            </small>
                        </div>) }
                    </div>
                </div>
            </div>

            <div className={s.cardBack}>
                <div className={cn(s.wrap, s.back)} />
            </div>

        </div>);
}

export default PokemonCard;
>>>>>>> Stashed changes
