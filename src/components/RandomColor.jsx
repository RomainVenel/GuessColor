import * as React from "react";

function RandomColor(props) {

    return (
        <div id={'block-title-color'}>
            <div className={"navbar"}>
                <div>Menu</div>
                <div className={'title'}>Guess Color</div>
                <div>
                    <button>Easy</button>
                    <button>Hard</button>
                </div>
            </div>
            <div className="random-color">
                {props.color}
            </div>
        </div>
    );
}

export default RandomColor;
