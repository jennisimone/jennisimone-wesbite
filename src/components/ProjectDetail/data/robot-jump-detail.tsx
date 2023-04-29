import { ProjectDetailProps } from "../ProjectDetail";
import React from "react";

export const robotJumpDetailProps: ProjectDetailProps = {
    title: 'Robot Jump',
    description: [
        <p>Robot jump is a game all about trying to get as high as you can. It follows a similar pattern to the game 'Doodle Jump'. Using the left and right arrow controls make your way up as far as you can. The game also makes a note of your high score and saves this in the cache, so on repeat games you can try and beat your previous scores.</p>,
        <p>The game was made using Unity and C#, images were made in Aseprite and the music was made in garage band. It was mainly created over the course of a single evening, so there is minimal detail in the game. </p>,
        <p>At this time it is currently only playable on desktop due to the input controls. But it may be adapted in the future to add in tilt controls like the original doodle jump game or touch controls. If it is adapted this way in the future, I may also adapt it into an android application and release it on the google play store.</p>,
    ],
    playLink: "https://jennisimone.itch.io/robot-jump",
    destination: 'itch.io'
}