import { v4 as uuidv4 } from "uuid";
export const pixar = {
   header: {
      h1: {
         src: "logo.png",
         href: "/",
         title: "Pixar",
      },
      nav: [
         {
            id: uuidv4(),
            text: "Feature Films",
            href: "https://www.pixar.com/movies",
         },
         {
            id: uuidv4(),
            text: "Short Films",
            href: "https://www.pixar.com/short-films-1",
            submenu: [
               {
                  id: uuidv4(),
                  title: "Soul",
                  href: "https://www.pixar.com/soul",
               },
               {
                  id: uuidv4(),
                  title: "Onward",
                  href: "https://www.pixar.com/onward",
               },
               {
                  id: uuidv4(),
                  title: "Toy Story 4",
                  href: "https://www.pixar.com/toy-story-4",
               },
            ],
         },
      ],
   },
   hero: {
      title: "Disney PIXAR - Inside Out 2",
      href: "https://www.pixar.com/",
      src: "https://www.pixar.com/pixar.png",
   },
   columns: [
      {
         id: uuidv4(),
         title: "CAREERS AT PIXAR",
         src: "https://www.pixar.com/careers.png",
         href: "https://www.pixar.com/careers-at-pixar",
      },
      {
         id: uuidv4(),
         title: "Elio",
         src: "https://www.pixar.com/elio.png",
         href: "https://youtube.com/elio",
      },
      {
         id: uuidv4(),
         title: "Win or Lose",
         src: "https://www.pixar.com/winorlose.png",
         href: "https://www.pixar.com/win-or-lose",
      },
   ],
   footer: {
      social: {},
      terms: {},
      copyright: {},
   },
};
