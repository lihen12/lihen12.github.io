import React from 'react';
import Covid19Tracker from './Covid19Tracker';
import TFTAugmentStats from './TFTAugmentStats';
import DiscordShopBot from './DiscordShopBot';

function ProjectsContainer() {
    return (
        <div className="projects-container">
            <Covid19Tracker />
            <TFTAugmentStats />
            <DiscordShopBot />
            {/* Add more projects as needed */}
        </div>
    );
}

export default ProjectsContainer;
