import { ProjectDetailProps } from "../ProjectDetail";
import React from "react";

export const operationPresentDropDetailProps: ProjectDetailProps = {
    title: 'Operation Present Drop',
    description: [
        <p>Operation present drop is an android game similar to flappy bird, the player taps the screen to move Santa up and navigates between chimneys and smoke to deliver presents. The game was originally made as a secret santa present and released on a private itch.io account for that person. However by the end I was very happy with how the game turned out so I decided to release it on the Android store.</p>,
        <p>It was made in Unity using C#, images were made in Aseprite and the music was made in garage band. The game uses unity's playerprefs to save a users high score locally to their device. At this time the app has only been updated once to fix some bugs and allow the user to disable the music.</p>,
        <p>The app is an android application so is only usable on those devices. I currently have no plans to port this over to apple due to the recurring cost of a developer license.</p>,
    ],
    playLink: "https://play.google.com/store/apps/details?id=com.DefaultCompany.operationpresentdrop",
    destination: 'Google Play'
}