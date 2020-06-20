import React from 'react';
import "./style/my-forest.css";

export function MyForest() {
    return <div className="my-forest">
        <div className="my-forest__title">My forest</div>
        <div className="my-forest__leaves-count">With 7436 <div className="my-forest__leave"></div></div>
        <div className="my-forest__co2-count">Saved 6.3kg of CO2</div>
    </div>;
}