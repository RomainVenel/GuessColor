import * as React from "react";

function RandomColor(props) {

    return (
        <header id={'block-title-color'}>
            <div className={"navbar"}>
                <div></div>
                <div className={'title'}>Guess Color</div>
                <div>
                    <button>Easy</button>
                    <button>Hard</button>
                </div>
            </div>
            <div className="random-color">
                {props.color}
            </div>
        </header>
    );
}

export default RandomColor;
