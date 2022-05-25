import * as React from "react";

function RandomColor(props) {

    return (
        <div className={'block-title-color'}>
            <div className="title">
                Guess Color
            </div>
            <div className="random-color">
                {props.color}
            </div>
        </div>
    );
}

export default RandomColor;
