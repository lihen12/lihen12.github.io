import React from 'react';
import Project from './Project';

function Covid19Tracker() {
    const title = "COVID-19 Pandemic Tracker";
    const description = "The COVID-19 Pandemic Tracker is a website to help with data visualization of COVID-19 aggregated data from the New York Times open-source data. This was our first time learning how to use React.js, so this project served as our entry point in learning React. Backend services were designed using Firebase Realtime Database in order to create client-server connection. Website developed using front-end technologies using React.js, JavaScript, CSS3, HTML5. Data visualization of COVID-19 data was done using GEOJSON";
    const imageUrl = ""; // Add your image URL here
    const githubUrl = "https://github.com/jls706771603/COVID-19-Pandemic-Tracker";
    const technologies = "React.js, JavaScript, CSS3, HTML5, Firebase, GEOJSON";

    return (
        <Project title={title} description={description} imageUrl={imageUrl} githubUrl={githubUrl} technologies={technologies} />
    );
}

export default Covid19Tracker;
