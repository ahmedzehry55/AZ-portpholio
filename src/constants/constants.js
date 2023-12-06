import { DiFirebase, DiReact, DiZend } from 'react-icons/di';

export const projects = [
  {
    title: 'Notes App',
    description: "this app can helping you to save your notes or and save it on browser local storage .",
      image: '/noteapp.png',
      tags: ['HTML', 'CSS','JavaSctipt' ,'React'],
    source: 'https://github.com/ahmedzehry55/notesApp',
    visit: 'https://ahmedzehry55.github.io/notesApp/',
    id: 0,
  },
  {
    title: 'Baba abdo restaurant menu',
    description:"this design is about restaurant menu ",
    image: '/babaabdoRest.png',
    tags: ['HTML', 'CSS','JavaSctipt' ,'React'],
    source: 'https://github.com/ahmedzehry55/babaAbdo',
    visit: 'https://ahmedzehry55.github.io/babaAbdo/',
    id: 1,
  },
  {
    title: 'GPT-3',
    description: "here we show the features of GPT-3 ai roobot.",
      image: '/gpt3.png',
      tags: ['HTML', 'CSS','JavaSctipt' ,'React'],
    source: 'https://github.com/ahmedzehry55/gpt3',
    visit: 'https://ahmedzehry55.github.io/gpt3/',
    id: 2,
  },
  {
    title: 'Hoo Bank',
    description: "This is a design for the hoo bank ",
    image: '/hoobank.png',
    tags: ['HTML', 'CSS','JavaSctipt' ,'React'],
    source: 'https://github.com/ahmedzehry55/AZ_hoobank',
    visit: 'https://ahmedzehry55.github.io/AZ_hoobank/',
    id: 3,
  },
];

export const Tech = [
  { 
    icon : <DiReact size='4rem'/>, 
    title : 'Front-End',
    text1: "Experiece with ",
    text2: "React.js"
  },
  { 
    icon : <DiFirebase size='4rem'/>, 
    title : 'Back-End',
    text1: " Experience with",
    text2: " Node and Databases"
  },
  { 
    icon : <DiZend size='4rem'/>, 
    title : 'UI/UX',
    text1: "Experience with ",
    text2: " tools like Figma"
  },
  
];