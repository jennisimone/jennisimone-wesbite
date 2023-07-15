import React from "react";
import { BlogPostProps } from "../../BlogPost/BlogPost";

export const makingModsPostData: BlogPostProps = {
    id: 'making-mods',
    title: 'My adventures in modding',
    date: '20th May 2023',
    post: [
        <p>I recently made and
        released my first mod. It's something that's interested me for a long time as a regular gamer and someone
        who has been adding other people's mods to my games for about 10 years.</p>,
        <p>So after having an idea for Stardew Valley I decided
            to give it a shot. Stardew Valley was a great place to start because it has very comprehensive modding
            support and guides.</p>,
        <p>My idea was to take one of the existing characters in the game and flesh her out. In Stardew,
            every now and then a witch character appears and curses your farm. In the lore of the game, you know that
            she is the ex wife of a full NPC - the wizard. She also has a hut you can explore but she's conveniently
            absent whenever you visit.</p>,
        <p>So I decided to
            change all of this. I added her as a full character, expanding on her background and removing the curses
            once you become friends with her. Although because the curses do add unique items I also gave her a store
            where you can buy these things.</p>,
        <h3>So how did I
            do it?</h3>,
        <p>The game itself is written in C#, which
            is a language I've worked in plenty as most of my games are written in this language. But a lot of the game
            is written purely in JSON, so the majority of the modding can be done by editing and creating JSON files and
            adding them into the game using some modding tools - smapi and content editor.</p>,
        <p>I relied on the modding documentation from the
            stardew wiki for the entire process. The documentation is very comprehensive and covered everything I needed
            to enable me to figure the rest out either through looking at other people's mods, reading through the game
            files or googling. </p>,
        <p>Releasing my mod to the
            public and seeing it accrue downloads has been a great feeling. At this time it sits at about 500 downloads,
            which feels huge for something I made myself. It's given me the confidence and skills I need to make more
            mods in the future, and at some point I might try and make content for other games, but right now my
            priorities are figuring out my promised features for this mod and sharing it with my user base.</p>
    ]
}