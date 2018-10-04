import photoHarriet from '../../assets/images/about/harriet.jpg'
import photoJess from '../../assets/images/about/jess.jpg'
import photoKeith from '../../assets/images/about/keithpitt.jpg'
import photoLox from '../../assets/images/about/lox.jpg'
import photoSam from '../../assets/images/about/sam.jpg'
import photoTim from '../../assets/images/about/toolmantim.jpg'
import photoCath from '../../assets/images/about/cath.jpg'
import photoEleanor from '../../assets/images/about/eleanor.jpg'
import photoMatthew from '../../assets/images/about/matthew.jpg'
import photoBen from '../../assets/images/about/ben.jpg'

import photoJml from '../../assets/images/about/jml.jpg'
import photoMattAllen from '../../assets/images/about/mattallen.jpg'
import photoJohnBarton from '../../assets/images/about/johnbarton.jpg'

export const team = [
  {
    photo: photoHarriet,
    name: "Harriet Lawrence",
    bio: "Hi, I’m Harriet! I write words about Buildkite. I can usually be found hanging out in a bouldering gym, or with my nose in a book.",
    links: [
      { name: "Twitter", url: "https://twitter.com/harrietgl" },
      { name: "GitHub", url: "https://github.com/harrietgrace" }
    ],
    colour: "rgb(206,153,117)"
  },
  {
    photo: photoJess,
    name: "Jessica Stokes",
    bio: "Hey, I’m Jessica! I love building useful things with people in mind. When I’m not wrangling tech for Buildkite, you can find me reviving old game consoles, or sampling a city’s vegetarian delights.",
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
    bio: "Hi, I’m Sam! I love simplifying complex systems to give folks superpowers. When I’m not tending my home jungle, that is.",
    links: [
      { name: "Twitter", url: "https://twitter.com/sj26" },
      { name: "GitHub", url: "https://github.com/sj26" },
      { name: "Keybase", url: "https://keybase.io/sj26" }
    ],
    colour: "rgb(179,166,187)"
  },
  {
    photo: photoCath,
    name: "Cath Jones",
    bio: "Hey, I’m Cath. I am passionate about people, technology and diversity & inclusion. When I am not supporting the Buildkite team you can find me exploring the world, playing board games or knitting a sweater for my sausage dog.",
    links: [
      { name: "Twitter", url: "https://twitter.com/cathjones0" },
      { name: "GitHub", url: "https://github.com/catherine-jones" },
      { name: "Medium", url: "https://medium.com/@bitgirl" }
    ],
    colour: "rgb(232,211,254)"
  },
  {
    photo: photoEleanor,
    name: "Eleanor Kiefel Haggerty",
    bio: "Hey, I’m Eleanor! I’m a classicist turned developer and I love to craft meaningful software. I’m an avid adventurer and an enthusiastic dog patter.",
    links: [
      { name: "GitHub", url: "https://github.com/eleanorakh" },
      { name: "Twitter", url: "https://twitter.com/eleanorkh" }
    ],
    colour: "rgb(153,153,255)"
  },
  {
    photo: photoMatthew,
    name: "Matthew Draper",
    bio: "Hi, I'm Matthew! I'm at my best when using technology to solve things and make problems. In my free time, I contribute to open source projects like Ruby on Rails.",
    links: [
      { name: "GitHub", url: "https://github.com/matthewd" },
      { name: "Twitter", url: "https://twitter.com/_matthewd" }
    ],
    colour: "rgb(173,196,235)"
  },
  {
    photo: photoBen,
    name: "Ben Christensen",
    bio: "Hello, I’m Ben. I make images, design products, and make beautiful spaces. I vastly prefer the outdoors to the indoors, and spend too much money on awesome food.",
    links: [
      { name: "Portfolio", url: "http://www.benchristensen.co" },
      { name: "Instagram", url: "https://www.instagram.com/bravonovember/" },
      { name: "Twitter", url: "https://twitter.com/bravonovember" }
    ],
    colour: "rgb(242,172,144)"
  }
]

export const leadership = [
  {
    photo: photoTim,
    name: "Tim Lucas",
    bio: "Hey, I’m Tim! I’m a Venn diagram of cats, coffee, the web, design, and programming. When I’m not behind a keyboard, I can usually be found climbing rocky walls.",
    links: [
      { name: "Twitter", url: "https://twitter.com/toolmantim" },
      { name: "Dribbble", url: "https://dribbble.com/toolmantim" },
      { name: "GitHub", url: "https://github.com/toolmantim" }
    ],
    colour: "rgb(129,188,228)",
    roles: ["Founder", "CEO"]
  },
  {
    photo: photoKeith,
    name: "Keith Pitt",
    bio: "Hey, I’m Keith! I’m always going on about how good GraphQL is. Build pipelines and developer tools are my jam, and I love jam.",
    links: [
      { name: "Twitter", url: "https://twitter.com/keithpitt" },
      { name: "GitHub", url: "https://github.com/keithpitt" },
      { name: "Keybase", url: "https://keybase.io/keithpitt" }
    ],
    colour: "rgb(216,138,139)",
    roles: ["Founder", "CTO"]
  },
  {
    photo: photoLox,
    name: "Lachlan Donald",
    bio: "I’m Lachlan (or Lox). I love building tools that help give developers more time to do amazing things. I’m a dad, husband, huge computer geek, and a relentless advocate for the llama species.",
    links: [
      { name: "GitHub", url: "https://github.com/lox" }
    ],
    colour: "rgb(149,149,143)",
    roles: ["COO"]
  }
]

export const advisors = [
  {
    photo: photoJml,
    name: "Jean-Michel Lemieux",
    bio: "JML has helped Atlassian and Shopify to massively scale their engineering teams. He’s an adopted Aussie, but had to move back to his homeland. Advising Buildkite is his secret way to stay connected with the country he loves!",
    roles: ["SVP Engineering @ Shopify"]
  },
  {
    photo: photoMattAllen,
    name: "Matt Allen",
    bio: "Matt is a professional business starter and people connector. When he’s not flying the world to talk to startups, he can be found hunting down Melbourne’s finest coffee in his Tesla.",
    roles: ["Startup BD @ Amazon Web Services"]
  },
  {
    photo: photoJohnBarton,
    name: "John Barton",
    bio: "John is an accomplished engineering manager, and builder of large technical teams. He’s an avid reader, and divides his attention between people management books, technology trends, and maritime museums.",
    roles: ["VP Engineering @ 99designs"]
  }
]