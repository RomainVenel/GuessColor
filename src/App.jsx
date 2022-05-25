import './App.css';
import { useEffect } from "react";
import RandomColor from "./components/RandomColor";
import ListColors from "./components/ListColors";

function App() {

    useEffect(() => {
        random_rgba();
    }, []);
    function random_rgba() {
        let o = Math.round, r = Math.random, s = 255;
        return 'RGB(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
    }

    let randomColor = random_rgba();

  return (
    <div className="App">
        <RandomColor color={randomColor}/>
        <ListColors color={randomColor}/>
    </div>
  );
}

export default App;
