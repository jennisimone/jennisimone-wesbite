import React from "react";
import { BlogPostProps } from "../../BlogPost/BlogPost";

export const firstPostData: BlogPostProps = {
    id: 'portfolio-site',
    title: 'Making a portfolio site',
    date: '27th March 2023',
    post: [
        <p>Having my own website is something I've wanted to do for a while. With my gaming & app portfolio growing it felt like the right time. There was one big problem though -</p>,
        <p>I'm a backend developer.</p>,
        <p>On the surface, it doesn't seem like a big problem. I've done plenty of front end work in my career so I know how to do the programming, but what I can't do is design. My art & design skills are non-existent.</p>,
        <p>So what can I do to rectify that? Well I started by just making a basic layout and adding in the content I need. At least at that point I had a functioning website, hosted, with continuous deployment & links off to all my projects.</p>,
        <p>After some serious thought as to how I wanted it to look, I decided to go with a 90s retro tech style with pastel elements. I’m a big fan of pastel, particularly pinks, purples and greens, so I used these as a colour scheme. The rest of the style is loosely based off old windows operating systems. Thick lines, retro fonts and separate boxes for headings.</p>,
        <p>Now for the technical information. The website is made using react & firebase. </p>,
        <p>I chose react because I've used it more recently than I have angular. It's versatile and easy to use once you have the hang of it. I’ve used styled components and SASS throughout so I can flexible reuse blocks throughout with different content. I’m managing a lot of the content using props. </p>,
        <p>I chose firebase primarily because it's free. Using the free tier I could easily create the website, using a domain I own, and deploy it every time I upload to my master brand.</p>,
    ]
}