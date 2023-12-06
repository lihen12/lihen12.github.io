import React from 'react';

function Project({ title, description, imageUrl, githubUrl, technologies }) {
    return (
        <div className="project">
            <h3>{title}</h3>
            <img src={imageUrl} alt={title} />
            <p>{description}</p>
            <p><strong>Technologies:</strong> {technologies}</p>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </div>
    );
}

export default Project;
