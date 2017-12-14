const photoHarriet = require('../../assets/images/about/harriet.jpg');
const photoJess = require('../../assets/images/about/jess.jpg');
const photoKeith = require('../../assets/images/about/keithpitt.jpg');
const photoLox = require('../../assets/images/about/lox.jpg');
const photoSam = require('../../assets/images/about/sam.jpg');
const photoTim = require('../../assets/images/about/toolmantim.jpg');

const photoJml = require('../../assets/images/about/jml.jpg');
const photoMattAllen = require('../../assets/images/about/mattallen.jpg');
const photoJohnBarton = require('../../assets/images/about/johnbarton.jpg');

export const team = [
  {
    photo: photoHarriet,
    name: "Harriet Lawrence",
    bio: "Hi, I’m Harriet! I work on frontend and backend engineering. Some cool fact about me is a bit longer than one line.",
    links: [
      { name: "Twitter", url: "/TODO" },
      { name: "GitHub", url: "/TODO" },
      { name: "KeyBase", url: "/TODO" }
    ],
    colour: "rgb(206,153,117)"
  },
  {
    photo: photoJess,
    name: "Jessica Stokes",
    bio: "Hi, I’m Jess! I work on frontend and backend engineering. Some cool fact about me is a bit longer than one line.",
    links: [
      { name: "Twitter", url: "/TODO" },
      { name: "GitHub", url: "/TODO" },
      { name: "KeyBase", url: "/TODO" }
    ],
    colour: "rgb(236,188,217)"
  },
  {
    photo: photoSam,
    name: "Samuel Cochran",
    bio: "Hi, I’m Sam! I work on frontend and backend engineering. Some cool fact about me is a bit longer than one line.",
    links: [
      { name: "Twitter", url: "/TODO" },
      { name: "GitHub", url: "/TODO" },
      { name: "KeyBase", url: "/TODO" }
    ],
    colour: "rgb(179,166,187)"
  },
  {
    photo: photoTim,
    name: "Tim Lucas",
    bio: "Hi, I’m Tim! I work on frontend and backend engineering. Some cool fact about me is a bit longer than one line.",
    links: [
      { name: "Twitter", url: "/TODO" },
      { name: "GitHub", url: "/TODO" },
      { name: "KeyBase", url: "/TODO" }
    ],
    colour: "rgb(129,188,228)",
    leadership: true,
    roles: ["Founder", "CEO"]
  },
  {
    photo: photoKeith,
    name: "Keith Pitt",
    bio: "Hi, I’m Keith! I work on frontend and backend engineering. Some cool fact about me is a bit longer than one line.",
    links: [
      { name: "Twitter", url: "/TODO" },
      { name: "GitHub", url: "/TODO" },
      { name: "KeyBase", url: "/TODO" }
    ],
    colour: "rgb(216,138,139)",
    leadership: true,    
    roles: ["Founder", "CTO"]
  },
  {
    photo: photoLox,
    name: "Lachlan Donald",
    bio: "Hi, I’m Lachlan! I work on frontend and backend engineering. Some cool fact about me is a bit longer than one line.",
    links: [
      { name: "Twitter", url: "/TODO" },
      { name: "GitHub", url: "/TODO" },
      { name: "KeyBase", url: "/TODO" }
    ],
    colour: "rgb(149,149,143)",
    leadership: true,
    roles: ["COO"]
  }
];

export const leadership = team.filter((t) => t.leadership);

export const advisors = [
  {
    photo: photoJml,
    name: "Jean-Michel Lemieux",
    bio: "JML has experience with TODO and advises us with TODO. When not TODO'ing he likes to TODO",
    links: [
      { name: "Twitter", url: "/TODO" }
    ],
    roles: ["CTO @ 99designs"]
  },
  {
    photo: photoMattAllen,
    name: "Matt Allen",
    bio: "Matt has experience with TODO and advises us with TODO. When not TODO'ing he likes to TODO",
    links: [
      { name: "Twitter", url: "/TODO" }
    ],
    roles: ["Startup BD @ AWSCloud"]
  },
  {
    photo: photoJohnBarton,
    name: "John Barton",
    bio: "JB has experience with TODO and advises us with TODO. When not TODO'ing he likes to TODO",
    links: [
      { name: "Twitter", url: "/TODO" }
    ],
    roles: ["SVP Engineering @ Shopify"]
  }
]