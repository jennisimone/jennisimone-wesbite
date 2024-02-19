import { ProjectDetailProps } from "../ProjectDetail";
import React from "react";

export const fastFoodDashDetailProps: ProjectDetailProps = {
    title: 'Fast Food Dash',
    description: [
        <p>Fast food dash was made for a work hackathon. The game takes place in a work office, it's a 2 player split screen competitive game. Both players race to a 'food alert' to get the food first. It was inspired by a real slack channel we have at my current place of work.</p>,
        <p>It was built using Phaser in Typescript and Tiled. The music was made in Garageband and the art was sourced from itch.io.</p>,
        <p>It is a desktop game only as it uses WASD and the arrow keys to control the different characters.</p>,
    ],
    playLink: "https://fast-food-dash.netlify.app/",
    destination: 'Netlify'
}