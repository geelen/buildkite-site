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
      { name: "Twitter", url: "https://twitter.com/harrietgl" },
      { name: "GitHub", url: "https://github.com/harrietgrace" }
    ],
    colour: "rgb(206,153,117)"
  },
  {
    photo: photoJess,
    name: "Jessica Stokes",
    bio: "Hey, I’m Jess! I work on frontend and backend engineering. Some cool fact about me is a bit longer than one line.",
    links: [
      { name: "Twitter", url: "https://twitter.com/ticky" },
      { name: "GitHub", url: "https://github.com/ticky" },
      { name: "Keybase", url: "https://keybase.io/ticky" }
    ],
    colour: "rgb(236,188,217)"
  },
  {
    photo: photoSam,
    name: "Samuel Cochran",
    bio: "Hi, I’m Sam! I work on frontend and backend engineering. Some cool fact about me is a bit longer than one line.",
    links: [
      { name: "Twitter", url: "https://twitter.com/sj26" },
      { name: "GitHub", url: "https://github.com/sj26" },
      { name: "Keybase", url: "https://keybase.io/sj26" }
    ],
    colour: "rgb(179,166,187)"
  },
  {
    photo: photoTim,
    name: "Tim Lucas",
    bio: "Hey, I’m Tim! I'm a Venn diagram of cats, coffee, the web, design, and programming. When I'm not behind a keyboard you can find me climbing rocky walls.",
    links: [
      { name: "Twitter", url: "https://twitter.com/toolmantim" },
      { name: "Dribbble", url: "https://dribbble.com/toolmantim" },
      { name: "GitHub", url: "https://github.com/toolmantim" },
      { name: "Keybase", url: "https://keybase.io/toolmantim" }
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
      { name: "Twitter", url: "https://twitter.com/keithpitt" },
      { name: "GitHub", url: "https://github.com/keithpitt" },
      { name: "Keybase", url: "https://keybase.io/keithpitt" }
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
      { name: "Twitter", url: "https://twitter.com/lox" },
      { name: "GitHub", url: "https://github.com/lox" },
      { name: "Keybase", url: "https://keybase.io/lox" }
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
    bio: "JML has helped Atlassian and Shopify to massively scale their engineering teams. He's passionate about developer productivity, and (something about Ottawa/family/bi-lingual)?",
    roles: ["SVP Engineering @ Shopify"]
  },
  {
    photo: photoMattAllen,
    name: "Matt Allen",
    bio: "Matt is a professional business starter and people connector. When he’s not sharing stories of struggles and success, he’s meeting startups around the world and hunting down Melbourne’s finest coffee in his Tesla.",
    roles: ["Startup BD @ Amazon Web Services"]
  },
  {
    photo: photoJohnBarton,
    name: "John Barton",
    bio: "John is an experienced engineering manager, and builder of large technical teams. He’s an avid reader, and divides his attention between people management and obscure maritime history.",
    roles: ["CTO @ 99designs"]
  }
]