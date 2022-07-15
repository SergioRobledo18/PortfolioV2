import React from "react";
import classes from "./Dashboard.module.css";
import classnames from "classnames";
const Dashboard = (props) => {
    return (
        <React.Fragment>
            <div
                className={classnames(
                    classes.overlay,
                    //if props.light is true, add classes.lightMode else classes.darkMode
                    `${props.light ? [classes.lightMode] : [classes.darkMode]}`
                )}
            >
                <div className={classes.topBox}>
                    <div className={classes.topBoxLogoLeft}>Sergio Robledo</div>
                    <div className={classes.topBoxIconsRight}>
                        <div className={classes.topBoxIconsRightGrid}>
                            <button onClick={props.setLight}>night</button>
                        </div>
                    </div>
                </div>
                <div className={classes.bottomBox}>
                    <div className={classes.bottomBoxLeftMenu}></div>
                    <div className={classes.bottomBoxRightContent}></div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Dashboard;
