import React from "react";
import classes from "./Icon.module.css";

const Icon = (props) => {
    return (
        <a
            className={classes.iconHolder}
            style={{
                "--backgroundColor": props.iconBackground,
            }}
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
        >
            <svg className={classes.menuIcon} viewBox={props.viewBox}>
                {props.icon}
            </svg>
        </a>
    );
};

export default Icon;
