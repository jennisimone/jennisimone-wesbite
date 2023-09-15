import React from "react";
import { BlogPostProps } from "../../BlogPost/BlogPost";

export const conferencesPostData: BlogPostProps = {
    id: 'conferences',
    title: 'Conferences',
    date: '15th September 2023',
    post: [<p>I just returned from my second conference as a software developer. I’ve been a software developer for 5 years, but both conferences I attended have been in the last few months due to covid derailing a lot of events I might previously have attended. </p>,
        <p>The first conference I attended was very developer heavy, primarily focusing on dev ops and Java. To help round off my development knowledge, for my second conference I chose one more oriented around ways of working and team practices.</p>,
        <h3>So why attend a conference?</h3>,
        <p>Personally, I struggle to consume video development content. I struggle to find the time to do so and I
            struggle to pay attention. However, when you go to a conference those issues resolve themselves. There
            aren’t other distractions around, like a cat walking in front of your screen, and the time is specifically
            carved out for you to experience those talks. </p>,
        <img src={'images/Cat.jpg'} alt={'Cat blocking screen'} title={'Nico making it hard to work.'} style={{maxWidth: '80%'}}/>,
        <p>Most conferences offer tracks, which allow you to personalise your experience around what topics interest and are important to your professional growth. Personally, I like to go to talk based tracks in the morning when I’m still sharp, and workshops in the afternoon to help keep me awake and engaged. </p>,
        <p>Conferences do however have their downsides - the long days can be tiring, the accommodation can be hit and miss, and with so much information being given to you in such a short time frame, you’re bound to miss some stuff. </p>,
        <p>But on the whole I do enjoy them. For me personally, I’ve always found lecture style learning to work for me, as long as the slides are brief and the delivery engaging, I take a lot of information in. The format allows me to collect information and formulate ideas as I go. For example, a workshop I attended gave me several ideas for icebreakers for meetings I run. A testing library demo gave me insight into a new way to test my work.</p>,
        <p>Whilst this will probably the final conference of the year for me, I look forward to seeing which conferences and opportunities come my way next year and the years to come.</p>,
    ]
}