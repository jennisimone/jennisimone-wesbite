import { ProjectDetailProps } from "../ProjectDetail";
import React from "react";

export const expandedWitchDetailProps: ProjectDetailProps = {
    title: 'Expanded Witch Mod',
    description: [
        <p>The expanded witch mod is a mod for Stardew Valley. It expands upon the witch character in the game.</p>,
        <p>In the game the character is referenced but doesn't get much game play beyond that. I created this mod to make the character romanceable and marriable for the player. She has multiple cut scenes and spritesheets depending on where you're at in the game.</p>,
        <p>The mod was made by making spritesheets in aseprite, modifying and creating json files and some C# programming. It's available for the desktop and mobile versions of Stardew Valley.</p>,
    ],
    playLink: "https://www.nexusmods.com/stardewvalley/mods/16304",
    destination: 'Nexus Mods'
}