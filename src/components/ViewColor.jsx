import React, { useState } from 'react';
import './../App.css';

function ViewColor(props) {

    let randomColor = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);

    function handleClick(e) {
        e.preventDefault();
        if (e.target.style.backgroundColor === props.randomColor) {
            let ok = document.querySelector('#block-title-color');
            ok.style.backgroundColor = props.randomColor;
        } else {
            e.target.style.opacity = 0;
        }
    }

    return (
        <div className="view-color" style={{ backgroundColor: props.color !== undefined? props.color: randomColor}} onClick={handleClick}>

        </div>
    );
}

export default ViewColor;
