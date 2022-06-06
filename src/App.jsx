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

  return (
      <ColorContext.Provider value={value}>
        <div id={'popup-finish'}>
          <div className="cookiesContent" id="cookiesPopup">
              <button className="close">✖</button>
              <img src="https://cdn-icons-png.flaticon.com/512/1047/1047711.png" alt="cookies-img"/>
              <p>We use cookies for improving user experience, analytics and marketing.</p>
              <button className="accept">That's fine!</button>
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
