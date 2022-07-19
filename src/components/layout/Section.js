import React from "react";
import classes from "./Section.module.css";

const Section = (props) => {
    return <div className={classes.sectionMainContainer}>{props.children}</div>;
};

export default Section;
