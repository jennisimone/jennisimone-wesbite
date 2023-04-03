import React from "react";
import { BlogPostProps } from "../../BlogPost/BlogPost";

export const firstPostData: BlogPostProps = {
    id: 'portfolio-site',
    title: 'Making a portfolio site',
    date: '27th March 2023',
    post: [
        <p>A few weeks ago I had an idea - I should make a
            portfolio site.</p>,
        <p>I decided this for a couple of reasons:</p>,
        <ul>
            <li >I have a lot of projects and no where to showcase them all</li>
            <li >It’s a fun and challenging project</li>
            <li >It will help me develop my front end design skills.</li>
        </ul>,
        <p>By trade I’m a backend developer, I mainly work in
            Java, Kotlin and NodeTS - and whilst I do a little bit of front end here and there, I mainly still to the
            APIs and servers. </p>,
        <p>So I set out to try and build on the things that I
            knew using React and Firebase. I worked off styled components since this is a pattern we use at work so I
            could use knowledge I already had and refer to other code bases if I needed some direction. I wrote in
            Typescript because I’ve used it a lot and I prefer the structure of it over Javascript. </p>,
        <p>This was also a great opportunity to learn more about
            the hosting side of things. I chose Google Firebase primarily because it’s free. But it also has
            comprehensive documentation and it meant I could keep everything including my domain management in one
            place. </p>,
        <p>One thing that really held me back throughout this
            journey though was that I have no design skills. When I make a game or an app, it takes me a long time to
            come up with a design I’m happy with, and most of the time I’m not 100% happy with it. When I started the
            site I kept the design very simple and focused instead on layout. </p>,
        <p>At one point I had the idea to go with a pastel retro
            design. I’ve seen a lot of this design style coming up recently and I like it a lot so I started
            implementing it into my designs. One thing these designs tend to do a lot is use hard outlines for things,
            so I’ve implemented this, along with separate background colours. Think Windows Classic. </p>,
        <p>Overall I’m happy with how the site turned out, I
            don’t think it’s perfect, but now that I have some design elements in there I hope it at least gives out
            less of a ‘backend developer does front end’ vibes. </p>,
    ]
}