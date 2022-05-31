import './../App.css';
import {useContext, useMemo} from "react";
import {ColorContext} from "../context/colorContext";

function ViewColor(props) {

    const rc = useMemo(() => '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6), []);
    const { life, setLife } = useContext(ColorContext);

    function handleClick(e) {
        e.preventDefault();
        if (e.target.style.backgroundColor === props.randomColor) {
            let colorTitle = document.querySelector('#block-title-color');
            colorTitle.style.backgroundColor = props.randomColor;
        } else {
            e.target.style.opacity = 0;
            setLife(life - 1);
        }
    }

    return (
        <div className="view-color" style={{ backgroundColor: props.color !== undefined? props.color: rc}} onClick={handleClick}>

        </div>
    );
}

export default ViewColor;
