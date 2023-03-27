import {ProjectSummaryProps} from "../../ProjectSummary/ProjectSummary";

export const robotJumpProps: ProjectSummaryProps = {
    path: "robot-jump",
    name: "Robot Jump",
    imageName: "robot-jump.png",
    imageAlt: "Robot Jump game screenshot",
    projectSummary: [
        <p>Robot Jump is a casual game where players have to move left and right to get as high as possible.</p>
        // <p>Robot jump is a game I made for fun. It's based on games like doodle jump, where the object is to make your
        //     way up some platforms as far as you can without falling.</p>,
        // <p>This game was made using Unity and C#.</p>
    ],
    icon:
        <a target="_blank" href='https://jennisimone.itch.io/robot-jump' rel="noreferrer"><img
            alt='Play on itch.io' src='/images/icons/itch-badge.png'/></a>

}