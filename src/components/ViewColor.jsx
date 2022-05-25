import * as React from "react";
import './../App.css';

function ViewColor(props) {

    let randomColor = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);

    return (
        <div className="view-color" style={{ backgroundColor: props.color !== undefined? props.color: randomColor}}>

        </div>
    );
}

export default ViewColor;
