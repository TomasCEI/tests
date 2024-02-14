import { v4 as uuidv4 } from 'uuid';



export const pixar= {
    header: {
        h1: {
            src: "https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/0755a48b-bbaf-4dff-8e78-9b489106eec6/logo022.jpg?format=1500w",
            href: "/",
            title: "Disney Pixar"
        },
        nav: [
            {
                id: uuidv4(),
                href: "/feature-films-launch.html",
                text: "Feature Films"
            },
            {
                id: uuidv4(),
                href: "/short-films.html",
                text: "Short Films",
                sumbenu: [
                    { id: uuidv4(), text: "Theatrical Shorts", href:"#"},
                    { id: uuidv4(), text: "Disney+", href:"#"},
                    { id: uuidv4(), text: "Sparkshorts", href:"#"},
                ]
            },
            {
                id: uuidv4(),
                href: "/technology.html",
                text: "Technology",
                sumbenu: [
                    { id: uuidv4(), text: "item1", href:"#"},
                    { id: uuidv4(), text: "item2", href:"#"},
                    { id: uuidv4(), text: "item3", href:"#"},
                ]
            },
        ]
    },
    hero: {
        href: "https://www.youtube.com/watch?v=VWavstJydZU",
        src: "https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/11db2edf-cfab-45f3-b825-6eb0933f16f9/io2_logo.png?format=1500w",
        text: "Disney PIXAR - Inside Out 2",
        backgroundsrc: "https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1699472929056-R6KDN8SAAXSJBT45V866/io2bg.jpg?format=2500w"
    }, 
    columns: {},
    footer: {}
}