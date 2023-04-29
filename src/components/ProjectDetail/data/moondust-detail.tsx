import { ProjectDetailProps } from "../ProjectDetail";
import React from "react";

export const moondustDetailProps: ProjectDetailProps = {
    title: 'Moondust',
    description: [
        <p>Moondust is a platformer where the player has to make their way across a side scrolling platform to each the end. Along the way there are 10 pieces of 'moondust' to collect and the player can't finish the game until they have all 10. It uses the arrow keys and space to jump as the controls. I made this game as an anniversary gift to my partner and the original ending was different to display a message to my partner, but I changed this later to a more generic message.</p>,
        <p>The game was made using Unity and C#, the images were all free assets I found on itch.io. I made this game in an evening so it's short, however I later went back to add in some high score functionality. The game retains two scores - how fast you completed it and how many times you died and had to restart.</p>,
        <p>Due to the control requirements, the game is only playable on desktop.</p>,
    ],
    playLink: "https://jennisimone.itch.io/moondust",
    destination: 'itch.io'
}