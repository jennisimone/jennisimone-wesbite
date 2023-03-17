import {ProjectSummaryProps} from "../../ProjectSummary/ProjectSummary";

export const antHillMassacreProps: ProjectSummaryProps = {
    path: "ant-hill-massacre",
    name: "Ant Hill Massacre",
    imageName: "ant-hill-massacre.png",
    imageAlt: "Ant Hill Massage game screenshot",
    projectSummary: [
        <p>Ant Hill Massacre is a platform game where players have to collect ants to help build enough strength to save their colony.</p>
        // <p>Ant hill massacre was the first video game I made. I made it to compete in a game jam where the theme was
        //     'Stronger Together'. In this game you play as an ant who needs to rescue other ants to save their ant hill
        //     which has been trapped by a rock.</p>,
        // <p>This game was made using Unity and C#. It was primary a way to learn game development whilst contributing to
        //     an online community. </p>
    ],
    icon:
        <a target="_blank" href='https://jennisimone.itch.io/ant-hill-massacre' rel="noreferrer"><img alt='Play on itch.io' src='/images/icons/badge-color.png'/></a>
}