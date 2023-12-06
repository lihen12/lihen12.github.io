import React from 'react';
import Project from './Project';

function DiscordShopBot() {
    const title = "Discord Shopping List Bot";
    const description = "This is a Shopping List Bot that allows the user to create a list of items using /slash commands on a Discord App channel. The development of this project used DiscordApp's API and developed in Java.";
    const imageUrl = ""; // Add your image URL here
    const githubUrl = "https://github.com/lihen12/discord-shop-bot";
    const technologies = "Java, Discord API";

    return (
        <Project title={title} description={description} imageUrl={imageUrl} githubUrl={githubUrl} technologies={technologies} />
    );
}

export default DiscordShopBot;
