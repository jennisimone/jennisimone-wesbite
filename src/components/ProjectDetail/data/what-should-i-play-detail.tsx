import { ProjectDetailProps } from "../ProjectDetail";
import React from "react";

export const whatShouldIPlayDetailProps: ProjectDetailProps = {
    title: 'What Should I Play',
    description: [
        <p>What should I play is an android application, designed to help gamers decide 'what should I play' using the java collections shuffle functionality to choose a random game from a list the player has entered. Beyond this it is also a way for gamers to generally manage and keep track of their backlog. The app offers players a bunch of functionality to store games, add filters to them, mark  as complete and search on all these filters. At this time it is my only published application that isn't a game.</p>,
        <p>It was made in Android Studio using Kotlin. The game uses SQLite to store all the data locally on the players device. Any images were made in Aseprite.</p>,
        <p>The app is an android application so is only usable on those devices. I currently have no plans to port this over to apple due to the recurring cost of a developer license and a lack of experience in those development tools.</p>,
    ],
    playLink: "https://play.google.com/store/apps/details?id=com.jennisimone.whatshouldiplay",
    destination: 'Google Play'
}