import * as React from "react";
import './../App.css';
import ViewColor from "./ViewColor";

function ListColors() {

    return (
        <div>
            <div className="grid-colors">
                <ViewColor/>
                <ViewColor/>
                <ViewColor/>
            </div>
            <div className="grid-colors">
                <ViewColor/>
                <ViewColor/>
                <ViewColor/>
            </div>
        </div>
    );
}

export default ListColors;
