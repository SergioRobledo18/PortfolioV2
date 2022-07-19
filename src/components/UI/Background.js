import React from "react";
import classes from "./Background.module.css";
import classnames from "classnames";

const Background = (props) => {
    return (
        <React.Fragment>
            <div
                className={classnames(
                    classes.background,
                    //if props.light is true, add classes.lightMode else classes.darkMode
                    `${props.light ? [classes.lightMode] : [classes.darkMode]}`
                )}
            ></div>
        </React.Fragment>
    );
};

export default Background;
