import * as React from "react";

function RandomColor() {

    function random_rgba() {
        var o = Math.round, r = Math.random, s = 255;
        return 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
    }

    let color = random_rgba();
    console.log(color);

    return (
        <div className="random-color">
            {color}
        </div>
    );
}

export default RandomColor;
