import React from "react";
import classes from "./Icon.module.css";

const Icon = (props) => {
    return (
        <a
            className={classes.iconHolder}
            style={{
                "--backgroundColor": props.iconBackground,
            }}
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
        >
            <svg
                className={classes.menuIcon}
                viewBox={props.viewBox}
                style={{ "--iconColor": props.iconColor }}
            >
                {props.icon}
            </svg>
        </a>
    );
};

export default Icon;
