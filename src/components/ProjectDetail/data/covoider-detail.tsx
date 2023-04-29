import { ProjectDetailProps } from "../ProjectDetail";
import React from "react";

export const covoiderDetailProps: ProjectDetailProps = {
    title: 'Covoider',
    description: [
        <p>Covoider is an arcade style game where you have navigate around a busy office during covid avoiding other people and their germs. The aim of the game is to find all 10 office and covid themed items spread around the office. Also around the office you'll find hand sanitiser to heal and coffee to speed you up. This game was made as part of a work based hack during covid. I made the game with 3 other people, and I focused mainly on the floor plan, health and pickups.</p>,
        <p>The game was made in PhaserJS using javascript, the sprites are mainly free and paid ones found online and the map was made using Tiled.</p>,
        <p>The game is only available on desktop, it uses arrow controls to navigate.</p>,
    ],
    playLink: "https://xmas-hack-2020.netlify.app",
    destination: 'Netlify'
}