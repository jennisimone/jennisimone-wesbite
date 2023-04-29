import { ProjectDetailProps } from "../ProjectDetail";
import React from "react";

export const maskUpStaySharpDetailProps: ProjectDetailProps = {
    title: 'Mask Up, Stay Sharp',
    description: [
        <p>Mask up, stay sharp is an arcade style game in the style of whack-a-mole. You have to mask people up to protect them from germs for as long as possible. There is always one mask less than the number of uninfected people so the game will always come to an end. There is also a high score leaderboard for the players who last the longest. This game was made as part of a work based hack during covid. I made the game with 3 other people, and I focused mainly on making the masks and their functionality.</p>,
        <p>The game was made in PhaserJS using javascript, the assets were made by someone else in the hack. The leaderboard is hosted on netlify.</p>,
        <p>The game works on mobile and desktop using the mouse or touch screen to add and remove the masks.</p>,
    ],
    playLink: "https://xmas-hack-2021.netlify.app",
    destination: 'Netlify'
}