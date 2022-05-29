import React from "react";
import style from './Presentation.module.css';

const Presentation = () : JSX.Element => {
    return (
        <div>
            <div>{'logo'}</div>
            <div>
                <h1>Authentication Project</h1>
                <p>Tecnologies used: </p>
            </div>
            <div className={style.tecnologies}></div>
        </div>
    )
};

export default Presentation;