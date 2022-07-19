import React from "react";
import Section from "../layout/Section";
import classes from "./AboutMe.module.css";

const AboutMe = (props) => {
    return (
        <Section>
            <h1 className={classes.sectionTitle}>About Me</h1>
        </Section>
    );
};

export default AboutMe;
