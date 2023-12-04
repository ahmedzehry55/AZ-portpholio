import { DiFirebase, DiReact, DiZend } from 'react-icons/di';

export const projects = [
  {
    title: 'Notes App',
    description: "this app can helping you to seve your notes or and save it on browser local storage .",
      image: '/images/noteapp.PNG',
      tags: ['HTML', 'CSS','JavaSctipt' ,'React'],
    source: 'https://github.com/ahmedzehry55/notesApp',
    visit: 'https://ahmedzehry55.github.io/notesApp/',
    id: 0,
  },
  {
    title: 'Baba abdo restaurant menu',
    description:"this design is about restaurant menu ",
    image: '/images/babaabdoRest.PNG',
    tags: ['HTML', 'CSS','JavaSctipt' ,'React'],
    source: 'https://github.com/ahmedzehry55/babaAbdo',
    visit: 'https://ahmedzehry55.github.io/babaAbdo/',
    id: 1,
  },
  {
    title: 'GPT-3',
    description: "here we show the features of GPT-3 ai roobot.",
      image: '/images/gpt3.PNG',
      tags: ['HTML', 'CSS','JavaSctipt' ,'React'],
    source: 'https://github.com/ahmedzehry55/gpt3',
    visit: 'https://ahmedzehry55.github.io/gpt3/',
    id: 2,
  },
  {
    title: 'Hoo Bank',
    description: "This is a design for the hoo bank ",
    image: '/images/hoobank.PNG',
    tags: ['HTML', 'CSS','JavaSctipt' ,'React'],
    source: 'https://github.com/ahmedzehry55/AZ_hoobank',
    visit: 'https://ahmedzehry55.github.io/AZ_hoobank/',
    id: 3,
  },
];

export const TimeLineData = [
  { year: 2017, text: 'Started my journey', },
  { year: 2018, text: 'Worked as a freelance developer', },
  { year: 2019, text: 'Founded JavaScript Mastery', },
  { year: 2020, text: 'Shared my projects with the world', },
  { year: 2021, text: 'Started my own platform', },
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