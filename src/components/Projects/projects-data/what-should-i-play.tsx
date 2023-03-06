import {ProjectSummaryProps} from "../../ProjectSummary/ProjectSummary";

export const whatShouldIPlayProps: ProjectSummaryProps = {
    name: "What Should I Play",
    imageName: "what-should-i-play.png",
    imageAlt: "What should I play app screenshot",
    projectSummary: [
        <p>What should I play is an android application designed to help people choose a game to play. It offers users a
            way to manage their backlog with the option to randomly select a game based on things like multiplayer or genre.
            The application is written in Kotlin and made using Android Studio. It was made using very basic features,
            using only activities and sqlite, it was primarily used a way to learn
            Android development.</p>,
        <a target="_blank" href='https://play.google.com/store/apps/details?id=com.jennisimone.whatshouldiplay&gl=GB&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1' rel="noreferrer"><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a>
    ]
}