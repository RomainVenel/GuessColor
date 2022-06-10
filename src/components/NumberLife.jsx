import * as React from "react";
import './../App.css';
import {useContext} from "react";
import {ColorContext} from "../context/colorContext";
import { FaHeart } from "react-icons/fa";

function NumberLife() {

    const { life } = useContext(ColorContext);

    return (
        <div className={'block-life'}>
            <div id={'numberLife'}>
                <div id={'nbLife'}>
                    {life}
                    </div>
                <div id={'heart'}>
                    <FaHeart style={{'color': '#9b1313'}}/>
                </div>
            </div>
        </div>
    );
}

export default NumberLife;
