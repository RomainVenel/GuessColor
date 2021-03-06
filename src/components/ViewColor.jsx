import './../App.css';
import {useContext, useMemo} from "react";
import {ColorContext} from "../context/colorContext";

function ViewColor(props) {

    const rc = useMemo(() => '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6), []);
    const { life, setLife } = useContext(ColorContext);

    function handleClick(e) {
        e.preventDefault();
        if (e.target.style.backgroundColor === props.randomColor) {
            // Changement de couleur
            let colorTitle = document.querySelector('#block-title-color');
            colorTitle.style.backgroundColor = props.randomColor;
            let popup = document.querySelector('#popup-win');
            popup.style.display = 'block';
            popup.className = 'animate__animated animate__fadeIn';
            document.querySelector('.App').style.pointerEvents = 'none';
        } else {
            e.target.style.opacity = 0;
            setLife(life - 1);
        }
        if (life === 1) {
            let popup = document.querySelector('#popup-lose');
            popup.style.display = 'block';
            popup.className = 'animate__animated animate__fadeIn';
            document.querySelector('.App').style.pointerEvents = 'none';
        }
    }

    return (
        <div className="view-color" style={{ backgroundColor: props.color !== undefined? props.color: rc}} onClick={handleClick}>

        </div>
    );
}

export default ViewColor;
