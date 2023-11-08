import { ProjectDetailProps } from "../ProjectDetail";
import React from "react";

export const vehicleMovesDetailProps: ProjectDetailProps = {
    title: 'Vehicle Moves',
    description: [
        <p>Vehicle moves is an arcade style driving game where you have to pick up and deliver vehicles as fast as you can. It keeps track of the number of cars you've delivered and the game ends either when you run our of time or your vehicle is damaged too much. It uses a collider on objects around the world to cause damage and there are several pickups that can help you by fixing your car, adding time or increasing your speed. This game was made as part of a work based hack. I made the game with 5 other people, and I focused on a broad range of things, including setting up tilemaps, creating pickups, adding colliders, saving personal high scores and adding the pick up and drop off functionality.</p>,
        <p>The game was made in Unity using C#. The assets are a mix of ones made in Aseprite and sourced free and paid assets. It saves the users high score into the cache using Unity's playerprefs.</p>,
        <p>The game works on desktop only due to the controls.</p>,
    ],
    playLink: "https://xmas-hack-2022.netlify.app",
    destination: 'Netlify'
}