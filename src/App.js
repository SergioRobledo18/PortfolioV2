import React, { useState } from "react";
import classes from "./App.module.css";
import classnames from "classnames";
import Background from "./components/UI/Background";
import Dashboard from "./components/UI/Dashboard";

function App() {
    const [light, setLight] = useState(false);

    const lightModeChangeHandler = () => {
        if (light) {
            setLight(false);
        } else {
            setLight(true);
        }
    };

    return (
        <React.Fragment>
            <div
                className={classnames(
                    classes.mainContainer,
                    //if props.light is true, add classes.lightMode else classes.darkMode
                    `${light ? [classes.lightMode] : [classes.darkMode]}`
                )}
            >
                <Background light={light} />
                <Dashboard setLight={lightModeChangeHandler} light={light} />
            </div>
            ;
        </React.Fragment>
    );
}

export default App;
