import {ProjectSummaryProps} from "../../ProjectSummary/ProjectSummary";

export const moondustProps: ProjectSummaryProps = {
    path: "moondust",
    name: "Moondust",
    imageName: "moondust.png",
    imageAlt: "Moondust game screenshot",
    projectSummary: [
        <p>Moondust is a simple platform runner game, where the player needs to collect moonsprites as they go along a linear platform.</p>
        // <p>Afraid of the dark was a game I made for a game jam where the theme was "you are not alone". It's a simple point and click puzzle game where the user has to figure out how to protect themselves from ghosts at night.</p>,
        // <p>This game was made using Unity and C#. It was primary a way to learn game development whilst contributing to
        //     an online community. </p>
    ],
    icon:
        <a target="_blank" href='https://jennisimone.itch.io/moondust' rel="noreferrer"><img alt='Play on itch.io' src='/images/icons/badge-color.png'/></a>
}