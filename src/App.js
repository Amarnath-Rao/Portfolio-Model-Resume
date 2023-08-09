import React from 'react';
import GitProfile from '@arifszn/gitprofile';
import '@arifszn/gitprofile/dist/style.css';

const config = {
  github: {
    username: 'Amarnath-Rao', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 6, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'n-amarnath-rao-631669240',
    twitter: 'AmarnathRaoN',
    mastodon: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: 'amarnath_rao',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: '',
    website: 'https://amarnathrao-portfolio.stackblitz.io',
    phone: '',
    email: 'amarnathrao36@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/199BxzDYqUV1d4-jq0BxghXC8f_vrf7io/view?usp=drive_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'JavaScript',
    'React.js',
    'Node.js',
    'Next.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'C',
    'C++',
    'CSS',
    'HTML',
    'Tailwind',
  ],

  experiences: [
    {
      company: 'Microsoft',
      position: 'Intern',
      from: 'May 2022',
      to: 'July 2022',
    },
    {
      company: 'ACM Student Chapter, Amrita Amritapuri',
      position: 'Member',
      from: 'July 2019',
      to: 'August 2021',
    },
  ],
  certifications: [
    {
      name: 'Microsoft Cybersecurity Engage',
      body: 'Lorem ipsum dolor sit amet',
      year: 'July 2022',
      link: 'https://drive.google.com/file/d/1KeE0duHo9jpGxw984keAuU-Fwa3V9IY6/view',
    },
  ],

  education: [
    {
      institution: 'Amrita Vishwa Vidhyapeetham',
      degree: 'Bachelors of Technology',
      from: '2021',
      to: '2025',
    },
    {
      institution: 'Aakash Institute ',
      degree: 'Intermediate',
      from: '2019',
      to: '2021',
    },
    {
      institution: 'Narayana Schools',
      degree: '10th standard',
      to: '2019',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'NutriCheck',
      description:
        'NutriCheck is a comprehensive health platform that integrates with popular health apps. It offers three key features: KCalc for food tracking and Google Fit integration, WeatherBite for personalized food recommendations based on location and health conditions, and VitalScan for storing and visualizing health reports.',
      imageUrl:
        'https://thumbs.dreamstime.com/b/nutritional-food-heart-health-wellness-cholesterol-diet-healthy-nutrition-eating-clean-fruits-vegetables-dish-207555122.jpg',
      link: 'https://github.com/Amarnath-Rao/NutriCheck',
    },
    {
      title: 'Animania',
      description: 'Modernization of good old character cards using blockchain',
      imageUrl:
        'https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/ce77163021cd4fafbb9b43e64aecfbb0/projects/64acba23f6aa46beb1d11cefd7d6531c/8d67b48e-9d56-4aab-bd81-c76242f4a92b.jpeg',
      link: 'https://animania-alpha.vercel.app/',
    },
  ],

  /*
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },

  */

  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
};

function App() {
  return <GitProfile config={config} />;
}

export default App;
