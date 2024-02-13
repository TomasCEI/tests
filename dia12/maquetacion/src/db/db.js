import { v4 as uuidv4 } from "uuid";
export const pixar = {
   header: {
      h1: {
         src: "https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/0755a48b-bbaf-4dff-8e78-9b489106eec6/logo022.jpg?format=1500w",
         href: "/",
         title: "Pixar Animation Studios",
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
      src: "https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/11db2edf-cfab-45f3-b825-6eb0933f16f9/io2_logo.png?format=1500w",
      background: "https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1699472929056-R6KDN8SAAXSJBT45V866/io2bg.jpg?format=2500w",
   },
   columns: [
      {
         id: uuidv4(),
         title: "CAREERS AT PIXAR",
         src: "https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1489515186655-LQ8Q6L0MFGETKRSTD0UW/image-asset.jpeg?format=750w",
         href: "https://www.pixar.com/careers-at-pixar",
      },
      {
         id: uuidv4(),
         title: "Elio",
         src: "https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/14d587cf-008b-403e-aa2d-78a0d91c98cf/Home_Lower-elio.jpg?format=750w",
         href: "https://youtube.com/elio",
      },
      {
         id: uuidv4(),
         title: "Win or Lose",
         src: "https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/9c25e4d4-ad11-421d-ab84-afda6157e3a5/wl_lower.jpg?format=750w",
         href: "https://www.pixar.com/win-or-lose",
      },
   ],
   footer: {
      socials: [
         {
            icon: "fab fa-facebook",
            href: "https://www.facebook.com/Pixar",
         },
         {
            icon: "fab fa-twitter",
            href: "https://twitter.com/pixar",
         },
         {
            icon: "fab fa-youtube",
            href: "https://www.youtube.com/user/DisneyPixar",
         },
         {
            icon: "fab fa-instagram",
            href: "https://www.instagram.com/pixar",
         },
      ],
      terms: [
         {
            href: "https://www.pixar.com/privacy-policy",
            text: "Privacy Policy",
         },
         {
            href: "https://www.pixar.com/terms-of-use",
            text: "Terms of Use",
         },
         {
            href: "https://www.pixar.com/terms-of-use",
            text: "Your US state privacy rights",
         },
         {
            href: "https://www.pixar.com/terms-of-use",
            text: "Children's Online Privacy Policy",
         },
         {
            href: "https://www.pixar.com/terms-of-use",
            text: "Interest-Based Ads",
         },
      ],
      copyright: "© 1986-2023 DISNEY / PIXAR",
      button: {
         href: "https://www.pixar.com/contact",
         text: "Do not sell or share my personal information",
      },
   },
};
