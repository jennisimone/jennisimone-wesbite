import { ProjectDetailProps } from "../ProjectDetail";
import React from "react";

export const robotJumpDetailProps: ProjectDetailProps = {
    title: 'Robot Jump',
    gameEmbed: <iframe title={"Robot Jump"} src="https://itch.io/embed-upload/7536375?color=bbd9de"
                       allowFullScreen={false}
                       width="600" height="620"><a href="https://jennisimone.itch.io/robot-jump">Play Robot Jump on
        itch.io</a></iframe>,
    description: [
        <p>Robot jump is a game all about trying to get as high as you can. It follows a similar pattern to the game 'Doodle Jump'</p>
    ]
}