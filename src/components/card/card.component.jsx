import React from 'react';
import './card.style.css';

export const Card = (props) => {
    return (
        <div className="card-container">
            <img className="img-style" alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2`} />
            <h1>{props.monster.name}</h1>
            <h2>{props.monster.email}</h2>
        </div>
    )
}