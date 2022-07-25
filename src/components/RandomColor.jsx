import * as React from "react";

function RandomColor(props) {

    function handleEasy(e) {
        e.preventDefault();
        console.log(e.target);
    }

    function handleHard(e) {
        e.preventDefault();
        console.log(e.target);
    }

    return (
        <header id={'block-title-color'}>
            <div className={"navbar"}>
                <div></div>
                <div className={'title'}>Guess Color</div>
                <div>
                    <button onClick={handleEasy}>Easy</button>
                    <button onClick={handleHard}>Hard</button>
                </div>
            </div>
            <div className="random-color">
                {props.color}
            </div>
        </header>
    );
}

export default RandomColor;
