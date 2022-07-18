import React from "react";
import classes from "./MenuItem.module.css";

const MenuItem = (props) => {
    return (
        <React.Fragment>
            <button className={classes.menuItemContainer}>
                <div className={classes.menuItemContainerIcon}>
                    <div className={classes.iconBackground}>
                        <svg
                            className={classes.menuIcon}
                            viewBox={props.viewBox}
                        >
                            {props.icon}
                        </svg>
                    </div>
                </div>
                <div className={classes.menuItemContainerDescription}>
                    {props.description}
                </div>
            </button>
        </React.Fragment>
    );
};

export default MenuItem;
