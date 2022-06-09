import './App.css';
import {useEffect, useMemo, useState} from "react";
import RandomColor from "./components/RandomColor";
import ListColors from "./components/ListColors";
import Footer from "./components/Footer";
import {ColorContext} from "./context/colorContext";
import * as React from "react";
import "animate.css";

function App() {

    const [life, setLife] = useState(3);
    const value = { life, setLife };

    useEffect(() => {
        random_rgba();
    }, []);
    function random_rgba() {
        let o = Math.round, r = Math.random, s = 255;
        return 'rgb(' + o(r()*s) + ', ' + o(r()*s) + ', ' + o(r()*s) + ')';
    }

    let randomColor = useMemo(() =>random_rgba(), []);

    function handleClick(e) {
        e.preventDefault();
        window.location.reload(false);
    }

  return (
      <ColorContext.Provider value={value}>
        <div id={'popup-win'}>
          <div className="bodyPopup" id="winPopup">
              <button className="close">✖</button>
              <img src={require('./assets/prize.png')} alt="cookies-img"/>
              <p>Tu as gagné !</p>
              <button className="accept" onClick={handleClick}>Rejouer</button>
          </div>
        </div>
        <div id={'popup-lose'}>
          <div className="bodyPopup" id="losePopup">
              <button className="close">✖</button>
              <img src={require('./assets/lose.png')} alt="cookies-img"/>
              <p>Tu as perdu !</p>
              <button className="accept" onClick={handleClick}>Rejouer</button>
          </div>
        </div>
        <div className="App">
            <RandomColor color={randomColor}/>
            <ListColors color={randomColor}/>
            <Footer/>
        </div>
      </ColorContext.Provider>
  );
}

export default App;
