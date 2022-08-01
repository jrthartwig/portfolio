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
  subtitle: 'Custom Websites and Business Applications',
  cta: 'Check Out Our Projects',
  aboutCta: 'Meet the CEO',
};

// ABOUT DATA
export const aboutData = {
  img: 'selfie.jpg',
  paragraphOne:
    "Hello there, I'm Jocelynn. I run a boutique software consultancy, focused on helping businesses elevate their online presences.",
  paragraphTwo:
    'We specialize in marketing websites that help drive sales and build brand awareness, as well as internal business applications.',
  paragraphThree:
    'We are a small team of technologists, who are passionate about quality, innovation, and helping businesses grow.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'yeastyboy2.png',
    title: 'Yeasty Boy Bread Company',
    info: 'YBBC is a bread baking business that specializes in sourdoughs and focaccias. Currently the YBBC website functions as a marketing and pre order funnel.',
    info2: '',
    url: 'https://yeastyboybreadco.com/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'petersbodyshop.png',
    title: 'Peters Body Shop',
    info: 'Peters Body Shop is a collision repair shop. Their website is a marketing brochure website with a call to action to schedule an appointment for a repair estimate.',
    info2: '',
    url: 'https://petersbodyshop.com', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'blog.png',
    title: 'Personal/Technical Blog',
    info: 'A blog about my adventures in technology and my other various hobbies.',
    info2: '',
    url: 'https://blog.jocelynnlearns.com',
    // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'csk.png',
    title: 'Comfort Scratch Kitchen',
    info: 'A marketing website for a homestyle restaurant in South Carolina',
    info2: '',
    url: 'https://comfortscratchkitchen.com/',
    // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'jocelynn@fwnanodev.com',
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
