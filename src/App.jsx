import './App.css';
import {useEffect, useMemo, useState} from "react";
import RandomColor from "./components/RandomColor";
import ListColors from "./components/ListColors";
import {ColorContext} from "./context/colorContext";
import * as React from "react";

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
        <div className="App">
            <RandomColor color={randomColor}/>
            <ListColors color={randomColor}/>
        </div>
      </ColorContext.Provider>
  );
}

export default App;
