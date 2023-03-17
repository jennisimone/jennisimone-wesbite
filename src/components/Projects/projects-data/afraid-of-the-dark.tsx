import {ProjectSummaryProps} from "../../ProjectSummary/ProjectSummary";

export const afraidOfTheDarkProps: ProjectSummaryProps = {
    path: "afraid-of-the-dark",
    name: "Afraid Of The Dark",
    imageName: "afraid-of-the-dark.png",
    imageAlt: "Afraid Of The Dark game screenshot",
    projectSummary: [
        <p>Afraid Of The Dark is a point and click game where players have to try and make their bedroom safe from ghosts.</p>
        // <p>Afraid of the dark was a game I made for a game jam where the theme was "you are not alone". It's a simple point and click puzzle game where the user has to figure out how to protect themselves from ghosts at night.</p>,
        // <p>This game was made using Unity and C#. It was primary a way to learn game development whilst contributing to
        //     an online community. </p>
    ],
    icon:
        <a target="_blank" href='https://jennisimone.itch.io/dont-fall-asleep' rel="noreferrer"><img alt='Play on itch.io' src='/images/icons/badge-color.png'/></a>
}