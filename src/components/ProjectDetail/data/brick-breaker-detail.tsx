import { ProjectDetailProps } from "../ProjectDetail";
import React from "react";

export const brickBreakerDetailProps: ProjectDetailProps = {
    title: 'Brick Breaker',
    description: [
        <p>Brick Breaker is a simple game where the player tries to break all the bricks in the level without losing all their balls. It has 10 levels each with a different design. There are several power ups and power downs which impact gameplay, most for just a short amount of time.</p>,
        <p>It was built using Gamemaker Studio 2. All assets were created in gamemaker. Sound effects were sourced from freesound.org.</p>,
        <p>It is a desktop game only as it uses the left and right arrow keys to control the paddle.</p>,
    ],
    playLink: "https://jennisimone.itch.io/brick-breaker/",
    destination: 'itch.io'
}