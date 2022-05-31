import * as React from "react";
import './../App.css';
import ViewColor from "./ViewColor";
import NumberLife from "./NumberLife";
import {useState} from "react";
import {ColorContext} from "../context/colorContext";
import {useMemo} from "react";

function ListColors(props) {

    const [life, setLife] = useState(3);
    const value = { life, setLife };

    let color = props.color;
    const nbColors = [0,1,2,3,4,5];
    const randPlaceColor = useMemo(() => Math.floor(Math.random() * 6), []);

    const getColors = (index) => {
        if (index === randPlaceColor) {
            return <ViewColor key={index} randomColor={color} color={color}/>
        }
        return <ViewColor key={index} randomColor={color}/>
    };

    return (
        <ColorContext.Provider value={value}>
            <div>
                <NumberLife/>
                <div className="grid-colors">
                    {nbColors.map((number) =>
                        getColors(number)
                    )}
                </div>
            </div>
        </ColorContext.Provider>
    );
}

export default ListColors;
