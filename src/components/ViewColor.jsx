import * as React from "react";
import './../App.css';

function ViewColor() {

    let randomColor = Math.floor(Math.random()*16777215).toString(16);

    return (
        <div className="view-color" style={{'backgroundColor': '#' + randomColor}}>

        </div>
    );
}

export default ViewColor;
