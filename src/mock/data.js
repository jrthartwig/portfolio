import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Fort Wayne Nano Dev', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Fort Wayne Nano Dev', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Fort Wayne',
  name: 'Nano Dev',
  subtitle: 'Custom Websites for Small Businesses',
  cta: 'Check Out My Projects',
  aboutCta: 'Meet the Coder'
};

// ABOUT DATA
export const aboutData = {
  img: 'selfie.jpeg',
  paragraphOne: 'Hello there, I\'m Jocelynn. I am passionate about helping small businesses build their online presence.',
  paragraphTwo: 'I specialize in marketing websites that help drive sales and build brand awareness.',
  paragraphThree: 'When I\'m not writing code, I enjoy playing chess, violin, and exploring nature.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'yeastyboy.png',
    title: 'Yeasty Boy Bread Company',
    info: 'YBBC is a bread baking business that specializes in sourdoughs and focaccias. Currently the YBBC website functions as a marketing and pre order funnel.',
    info2: 'https://yeastyboybreadco.com/',
    url: 'https://yellow-island-0c92a2910.azurestaticapps.net/',
    repo: 'https://github.com/jrthartwig/yeasty-boy', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'petersbodyshop.png',
    title: 'Peters Body Shop',
    info: 'Peters Body Shop is a collision repair shop. Their website is a marketing brochure website with a call to action to schedule an appointment for a repair estimate.',
    info2: '',
    url: 'https://petersbodyshop.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'blog.png',
    title: 'Personal/Technical Blog',
    info: 'A blog about my adventures in technology and my other various hobbies.',
    info2: '',
    url: 'https://blog.jocelynnlearns.com',
    repo: 'https://github.com/jrthartwig/blogV2', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'jocelynnhartwig@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jocelynn23/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jrthartwig',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
