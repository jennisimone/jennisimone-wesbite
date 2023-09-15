import React from "react";
import { BlogPostProps } from "../../BlogPost/BlogPost";

export const gameEnginePostData: BlogPostProps = {
    id: 'game-engine',
    title: 'Choosing A Game Engine',
    date: '15th June 2023',
    post: [
        <p>Since I started making games I’ve used a variety of different game engines and frameworks. </p>,
        <h3>Godot</h3>,
        <p>The first time I tried to make a game I used Godot. At this time I knew very little about coding and nothing
            about game development. But I followed a tutorial, and managed to make a character who could move left,
            right and jump. I was super proud of my progress but never went back to it. At the time, Godot was
            relatively new and there wasn’t a lot about it online other than a couple of tutorials, recently I’ve seen
            Godot grow substantially in popularity, but I haven’t gone back to it. </p>,
        <h3>HTML Canvas</h3>,
        <p>The next couple of games I made I used Javascript and the HTML5 canvas. I used this to make a complete game
            of pong whilst following a tutorial. This was the first time I made something full, complete and playable. I
            was really proud of myself, but really I had no idea what I’d just done, all the art was drawn using CSS
            which felt very abstract and you couldn’t really see what you were doing until you ran the project.</p>,
        <h3>Unity</h3>,
        <p>Later I moved on to Unity. Compared to my other ways of making games, Unity felt intimidating. For a new
            person using the software it felt like there were a million things to do and a million ways to do it. I
            followed a bunch of tutorials and eventually got to a point where I feel I can use that same knowledge from
            those tutorials and make my own games. Which I’ve done. </p>,
        <p>Most of my games recently are made using unity, in fact six out of the ten projects currently listed on my
            website were made using Unity. Whilst I feel like I’ve now gotten to grips with Unity to the point where I
            could make any game with enough time and focused googling, I can’t help but feel that it might not be the
            most optimised engine for what I want to make. My games feel large and clunky, even for the simplest
            game.</p>,
        <h3>Game Maker Studio 2</h3>,
        <p>So this has brought me to Game Maker Studio 2, unlike Unity this engine focuses solely on 2D games. That
            means all the tools are specifically designed for 2D and when researching you don’t need to add ‘2D’ to the
            end of your googling search. </p>,
        <p>Like when I started Unity, the interface can be intimidating. Whilst it has a lot of the same features of
            Unity the way it displays these to the player is completely different. So I’m back in tutorial mode, at
            least until I have a good understanding of the basics. </p>,
        <p>One thing I love about GMS2 is how much clearer a lot of the interfacing is. Scripts are split into function,
            things like collisions and timers are build in and only require very simple scripts to implement. No
            manually starting coroutines or comparing tags. </p>,
        <p>My only hesitation is the pricing structure. The free tier only allows you to export games to their own
            platform. So in order to export to web or desktop you need to pay more. Which is something I’m willing to do
            eventually when I’ve made my game. I want to use GMS2 to make a longer, more complete project I can list on
            Steam in the future, so I feel comfortable just developing locally until I reach that point.</p>,
        <h3>Other engines and frameworks</h3>,
        <p>Whilst these are the only engines and frameworks I’ve used, there are others I’m aware of and may play around
            with in the future. Monoframe specifically is one I’m very interested in. The game Stardew Valley uses the
            Monoframe framework, it feels similar to Phaser which I’ve used in the past for some hacks, but with C#
            instead of Javascript. Although, I’m reluctant because it’s a framework and not an engine, so you
            essentially need to build your own engine on top of this and I don’t know if I’m there yet, but maybe I will
            be in the future. </p>
    ]
}