import React from "react";
import { BlogPostProps } from "../../BlogPost/BlogPost";

export const hackJamPostData: BlogPostProps = {
    id: 'hack-jam',
    title: 'Hacks and Jams',
    date: '29th April 2023',
    post: [
        <p>A lot of the games I’ve made have been for hacks or game jams. The short isolated format of
            these events really works for me. Often when trying to make more long form games, I lose
            interest, get distracted or just find it too hard and give up.
        </p>,

        <p>There’s a longer term solution for this, mainly around breaking up these games into smaller scopes
            and doing different parts at different times - but that’s for another blog post.
        </p>,

        <p>Right now I want to talk about hacks/jams. So what are they? They’re events that take place over a
            set time period where participants make something that (usually) aligns to a particular
            theme.
        </p>,

        <p>I’ve joined a lot of hacks throughout my career, some game based and some more tech based, with a
            mix of in person and online events.
        </p>,

        <p>The first hack I ever did was on week 2 of my career as a software developer. It was a city wide
            event and the theme was ‘an unusual use of SMS’. My team chose to make a game of battleships
            via SMS. As I was two weeks into learning how to code, my contribution was minimal, but
            despite this the event gave me a love for hacks.
        </p>,

        <p>Over the past few years here’s what I’ve made at hacks:
        </p>,
        <table>
            <thead>
                <tr>
                    <th>
                        Hack type
                    </th>
                    <th>
                        Project
                    </th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    Citywide tech hack
                </td>
                <td>
                    Battleships via SMS
                </td>
            </tr>
            <tr>
                <td>
                    Work hack
                </td>
                <td>
                    Voluntinder, a tinder style app for linking people up who want to attend similar voluntary events.
                </td>
            </tr>
            <tr>
                <td>
                    Citywide tech hack
                </td>
                <td>
                    A machine learning algorithm using pandas for comparing apple food prices with apple stock.
                </td>
            </tr>
            <tr>
                <td>
                    Work hack
                </td>
                <td>
                    Covoider - A covid based game where you navigate around an office collecting items like masks whilst
                    avoiding over people
                </td>
            </tr>
            <tr>
                <td>
                    Game jam
                </td>
                <td>
                    Ant hill massacre - A platformer where you collect ants
                </td>
            </tr>
            <tr>
                <td>
                    Work hack
                </td>
                <td>
                    Mask up, stay sharp - A whack-a-mole style game where you have to mask up infected people
                </td>
            </tr>
            <tr>
                <td>
                    Game jam
                </td>
                <td>
                    Afraid of the dark - A point and click game where you have to protect yourself from the dark
                </td>
            </tr>
            <tr>
                <td>
                    Work hack
                </td>
                <td>
                    Vehicle moves - A crazy taxi style game where you have to deliver vehicles to customers.
                </td>
            </tr>
            </tbody>
        </table>,
        <p>I’ve enjoyed making all these things, each of these hacks has helped me develop skills and
            knowledge around particular technologies.
        </p>,

        <p>Whilst something you make at a hack will never be as polished as a long term project, I think
            they’re a fun way to help you keep your passion for things, whether it be game making or
            work. They often drive me and help me feel motivated to continue making things.
        </p>,

    ]
}