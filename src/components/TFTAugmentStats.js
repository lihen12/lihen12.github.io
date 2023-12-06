import React from 'react';
import Project from './Project';

function TFTAugmentStats() {
    const title = "TFT Augment Stats Website";
    const description = "The TFT Augment Stats Website is a website that aggregates the top 100 Teamfight Tactics players and their 100 most recent matches. I'm looking to grab their 'augment' choices and how well each player places with them and the phase in which they choose these three 'augments'. This is inspired by existing tools such as tactics.tools and metatft.com.";
    const imageUrl = ""; // Add your image URL here
    const githubUrl = "https://github.com/lihen12/augment-stats-website";
    const technologies = "Python, Node.JS, Express, Axios, React, CSS";

    return (
        <Project title={title} description={description} imageUrl={imageUrl} githubUrl={githubUrl} technologies={technologies} />
    );
}

export default TFTAugmentStats;
