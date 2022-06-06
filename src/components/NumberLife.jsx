import * as React from "react";
import './../App.css';
import {useContext} from "react";
import {ColorContext} from "../context/colorContext";

function NumberLife() {

    const { life } = useContext(ColorContext);

    return (
        <div className={'block-life'}>
            <div id={'numberLife'}><span>{life}</span>/3</div>
        </div>
    );
}

export default NumberLife;
