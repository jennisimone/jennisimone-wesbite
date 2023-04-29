import { ProjectDetailProps } from "../ProjectDetail";
import React from "react";

export const afraidOfTheDarkDetailProps: ProjectDetailProps = {
    title: 'Afraid Of The Dark',
    description: [
        <p>Afraid of the dark is a point and click game. The aim of the game is to find a way to keep ghosts at bay by looking around the room for things that might help you. I made this game as part of a game jam hosted on itch.io. The theme of the game jam was 'you're not alone', with my interpretation of the theme the character seems alone until you switch off the lights.</p>,
        <p>The game was made using Unity and C#, images were made in Aseprite and the music was made in garage band. I used two sets of music in the game, with a slightly spookier tune appearing when you switch off the lights. As it was a submission for a game jam, the game is short and made in a couple of days. </p>,
        <p>The game uses mouse controls, which on mobile translate to touch controls. It's fully playable on both mobile and desktop.</p>,
    ],
    playLink: "https://jennisimone.itch.io/dont-fall-asleep",
    destination: 'itch.io'
}