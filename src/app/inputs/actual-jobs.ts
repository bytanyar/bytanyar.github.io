import { Job } from '../classes/job';

export const JOBS: Job[] = [
  { id: 1, 
    company: 'Clayton Homes', 
    start: 'February 2009', 
    end: 'January 2020', 
    title: 'Account Specialist / Front End Developer',
    details: [
    'Received 10+ ACE awards for excellence',
    'Ensure customer requirements met for presentation/coding',
    'Perform code QA for design intent and access verification',
    'Convert PSD compositions into HTML and CSS',
    'Expand webpage functionality using JavaScript/JQuery/React JS',
    'Perform cross-browser integration and testing',
    'Write reusable code for UI components',
    'Use existing standards to maximize browser compatibility',
    'Build and test responsive layouts'
  ] },
  { id: 2, 
    company: 'StoragePug', 
    start: 'March 2020', 
    end: 'November 2021',
    title: 'Junior Web Developer / Website Specialist', 
    details: [
    'Showcase customer awesomeness to increased unit bookings through their website',
    'Train others on design standards and using specialized CMS',
    'Convert Zeplin and Figma compositions into HTML and SCSS',
    'Build components using AngularJS for specialized CMS',
    'Expertly edit images to more closely meet design standards using PhotoShop',
    'Use provided wireframes, prototypes and content to build websites to design standards using a specialized CMS',
    'Ensure work adheres to established standards and practices',
    'Use drag-and-drop web editor to build self-storage websites',
    'Use CSS/HTML to override CMS settings to meet design requirements',
    'Use drag-and-drop web editor to build self-storage websites',
    'Communicate with team members, developers, and designers as needed during the website building process',
    'Present designs to peers'
  ] },
  { id: 3, 
    company: 'Various Customers', 
    start: 'December 2022', 
    end: 'Present',
    title: 'Self-Employed/Freelance Frontend Developer and Coursework Full Stack Developer', 
    details: [
    'Projects include:',
    'GROCERY SWAP (Neighborhood-Bartering). A MERN based application for trading local food products to reduce waste and create eco-friendly food swaps in local neighborhoods. Worked with team to design a full CRUD application with functional create, read, update, and delete features',
    'Integrated React with one-to-many relationships using MongoDB to create trade commenting capabilities',
    'Created login and registration using back end validations and web tokens for a secure and personal user experience',
    'Implemented Bcrypt’s password hashing to secure sensitive user account information',
    'Developed and linked 3 models using NoSQL, MongoDB, enabling users to comment and track their trades',
    'Implemented, designed, and styled CSS for completely responsive design',
    'RECIPES. A MERN based application for collecting and using recipes',
    'Created a full CRUD application with functional create, read, update, and delete features from scratch',
    'Leveraged React with fully responsive CSS to populate a list of all recipes and their respective detailed pages',
    'Developed full back end using an Express framework with a MongoDB database'    
  ] },
];