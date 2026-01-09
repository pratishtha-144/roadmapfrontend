// Topic Content Data Structure

export interface Resource {
  title: string;
  type: 'Roadmap' | 'Course' | 'Video' | 'Article' | 'Practice';
  url: string;
  isPremium?: boolean;
  discount?: string;
}

export interface KeyConcept {
  id: string;
  title: string;
  description?: string;
}

export interface ProjectIdea {
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface TopicContent {
  id: string;
  title: string;
  definition: string;
  importance: string;
  usage: string;
  keyConcepts: KeyConcept[];
  freeResources: {
    roadmaps: Resource[];
    courses: Resource[];
    videos: Resource[];
    articles: Resource[];
    practice: Resource[];
  };
  studyPath: {
    prerequisites: string[];
    nextTopics: string[];
  };
  projectIdeas: ProjectIdea[];
  aiTutorPrompts: string[];
}

export const topicContentData: Record<string, TopicContent> = {
  html: {
    id: 'html',
    title: 'HTML',
    definition: 'HTML (HyperText Markup Language) is the standard language used to create the structure of web pages. It defines elements such as headings, paragraphs, images, links, and forms.',
    importance: 'HTML is the foundation of web development. Without HTML, web pages cannot exist. It provides the structural skeleton that CSS styles and JavaScript makes interactive.',
    usage: 'HTML is used in every website and web application. It structures content for browsers to interpret and display. Modern HTML5 adds semantic elements, multimedia support, and form controls.',
    keyConcepts: [
      { id: 'tags', title: 'HTML Tags', description: 'Basic building blocks like <div>, <p>, <h1>' },
      { id: 'elements', title: 'Elements & Attributes', description: 'How elements work with attributes like id, class, src' },
      { id: 'semantic', title: 'Semantic HTML', description: 'Using meaningful tags like <header>, <nav>, <article>' },
      { id: 'forms', title: 'Forms & Inputs', description: 'Creating interactive forms with input fields' },
      { id: 'multimedia', title: 'Multimedia Elements', description: 'Embedding images, videos, and audio' },
      { id: 'accessibility', title: 'Accessibility Basics', description: 'Making web content accessible to all users' },
      { id: 'seo', title: 'SEO in HTML', description: 'Optimizing HTML for search engines' },
    ],
    freeResources: {
      roadmaps: [
        {
          title: 'Visit the Dedicated HTML Roadmap',
          type: 'Roadmap',
          url: 'https://roadmap.sh/html',
        },
      ],
      courses: [
        {
          title: 'Responsive Web Design Certification - Co-Learn HTML & CSS with guided projects',
          type: 'Course',
          url: 'https://www.freecodecamp.org/learn/responsive-web-design/',
        },
        {
          title: 'HTML Tags',
          type: 'Course',
          url: 'https://www.w3schools.com/tags/',
        },
        {
          title: 'HTML Forms',
          type: 'Course',
          url: 'https://www.w3schools.com/html/html_forms.asp',
        },
        {
          title: 'Semantic HTML',
          type: 'Course',
          url: 'https://web.dev/learn/html/semantic-html/',
        },
        {
          title: 'HTML Accessibility Attributes',
          type: 'Course',
          url: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA',
        },
      ],
      videos: [
        {
          title: 'HTML Full Course for Beginners',
          type: 'Video',
          url: 'https://www.youtube.com/watch?v=pQN-pnXPaVg',
        },
        {
          title: 'HTML Full Course - Build a Website Tutorial',
          type: 'Video',
          url: 'https://www.youtube.com/watch?v=mJgBOIoGihA',
        },
        {
          title: 'HTML & CSS Full Course - Beginner to Pro',
          type: 'Video',
          url: 'https://www.youtube.com/watch?v=G3e-cpL7ofc',
        },
      ],
      articles: [
        {
          title: 'Semantic HTML Guide',
          type: 'Article',
          url: 'https://developer.mozilla.org/en-US/docs/Glossary/Semantics',
        },
        {
          title: 'Explore top posts about HTML',
          type: 'Article',
          url: 'https://app.daily.dev/tags/html',
        },
        {
          title: 'HTML Best Practices',
          type: 'Article',
          url: 'https://github.com/hail2u/html-best-practices',
        },
      ],
      practice: [
        {
          title: 'HTML Practice Exercises',
          type: 'Practice',
          url: 'https://www.w3schools.com/html/html_exercises.asp',
        },
        {
          title: 'Build Real Projects',
          type: 'Practice',
          url: 'https://www.frontendmentor.io/',
        },
      ],
    },
    studyPath: {
      prerequisites: ['Basic Internet Concepts', 'How Web Works'],
      nextTopics: ['CSS', 'Semantic HTML', 'Accessibility'],
    },
    projectIdeas: [
      {
        title: 'Personal Portfolio Page',
        description: 'Create a simple portfolio page with your bio, skills, and projects using semantic HTML.',
        difficulty: 'Beginner',
      },
      {
        title: 'Resume Website',
        description: 'Build an online resume with proper heading hierarchy and contact form.',
        difficulty: 'Beginner',
      },
      {
        title: 'Simple Blog Layout',
        description: 'Design a blog layout with articles, navigation, and footer using semantic elements.',
        difficulty: 'Beginner',
      },
      {
        title: 'Landing Page',
        description: 'Create a product landing page with hero section, features, and call-to-action.',
        difficulty: 'Intermediate',
      },
    ],
    aiTutorPrompts: [
      'Explain semantic HTML in simple terms with examples',
      'What is the difference between <div> and <section>?',
      'How do I make my HTML accessible?',
      'Show me how to create a contact form in HTML',
    ],
  },
  
  css: {
    id: 'css',
    title: 'CSS',
    definition: 'CSS (Cascading Style Sheets) styles HTML documents, controlling layout, colors, and fonts. Separates design from content using selectors to target elements. Features responsive design with media queries, cascade rules, inheritance, and specificity. Modern CSS includes Flexbox, Grid, animations, and transitions.',
    importance: 'CSS is essential for creating visually appealing and responsive websites. It enables designers and developers to build professional, modern user interfaces that work across all devices.',
    usage: 'CSS is used in every website to control layout, colors, typography, spacing, and responsiveness. From simple styling to complex animations and grid systems.',
    keyConcepts: [
      { id: 'basics', title: 'CSS Basics', description: 'Syntax, selectors, properties, and values' },
      { id: 'layouts', title: 'CSS Layouts', description: 'Flexbox, Grid, and positioning techniques' },
      { id: 'positioning', title: 'CSS Positioning', description: 'Static, relative, absolute, fixed, and sticky positioning' },
      { id: 'selectors', title: 'CSS Selectors and Combinators', description: 'Element, class, ID, attribute, and pseudo selectors' },
      { id: 'variables', title: 'CSS Variables', description: 'Custom properties for reusable values' },
      { id: 'media-queries', title: 'CSS Media Queries', description: 'Responsive design for different screen sizes' },
    ],
    freeResources: {
      roadmaps: [
        {
          title: 'Visit the Dedicated CSS Roadmap',
          type: 'Roadmap',
          url: 'https://roadmap.sh/css',
        },
      ],
      courses: [
        {
          title: 'Responsive Web Design Certification - Co-Learn HTML & CSS with guided projects',
          type: 'Course',
          url: 'https://www.freecodecamp.org/learn/responsive-web-design/',
        },
      ],
      videos: [
        {
          title: 'CSS Complete Course',
          type: 'Video',
          url: 'https://www.youtube.com/watch?v=1Rs2ND1ryYc',
        },
        {
          title: 'HTML & CSS Full Course - Beginner to Pro',
          type: 'Video',
          url: 'https://www.youtube.com/watch?v=G3e-cpL7ofc',
        },
      ],
      articles: [
        {
          title: 'Web.dev by Google — Learn CSS',
          type: 'Article',
          url: 'https://web.dev/learn/css/',
        },
        {
          title: 'Explore top posts about CSS',
          type: 'Article',
          url: 'https://app.daily.dev/tags/css',
        },
      ],
      practice: [
        {
          title: 'CSS Exercises',
          type: 'Practice',
          url: 'https://www.w3schools.com/css/css_exercises.asp',
        },
        {
          title: 'CSS Battle',
          type: 'Practice',
          url: 'https://cssbattle.dev/',
        },
      ],
    },
    studyPath: {
      prerequisites: ['HTML'],
      nextTopics: ['JavaScript', 'Responsive Design', 'CSS Frameworks'],
    },
    projectIdeas: [
      {
        title: 'Responsive Portfolio Website',
        description: 'Build a fully responsive portfolio with modern CSS Grid and Flexbox layouts.',
        difficulty: 'Intermediate',
      },
      {
        title: 'CSS Animation Showcase',
        description: 'Create a page with various CSS animations, transitions, and keyframes.',
        difficulty: 'Intermediate',
      },
      {
        title: 'Product Card Component',
        description: 'Design a reusable product card with hover effects and responsive layout.',
        difficulty: 'Beginner',
      },
      {
        title: 'Dashboard UI',
        description: 'Build a responsive dashboard layout using CSS Grid.',
        difficulty: 'Advanced',
      },
    ],
    aiTutorPrompts: [
      'Explain the CSS box model with examples',
      'What is the difference between Flexbox and Grid?',
      'How do I center a div vertically and horizontally?',
      'Explain CSS specificity and cascade',
    ],
  },

  javascript: {
    id: 'javascript',
    title: 'JavaScript',
    definition: 'JavaScript is a versatile programming language that makes websites interactive. Runs in browsers, servers (Node.js), and desktop applications. Features dynamic typing, event-driven programming, and constant evolution. Essential for modern web development across frontend and backend.',
    importance: 'JavaScript is the most popular programming language for web development. It powers interactive features, single-page applications, mobile apps, and server-side development. Mastery of JavaScript is essential for any modern frontend developer.',
    usage: 'JavaScript is used everywhere: client-side interactivity, server-side APIs with Node.js, mobile apps with React Native, desktop apps with Electron, and even IoT devices.',
    keyConcepts: [
      { id: 'basics', title: 'JavaScript Basics', description: 'Syntax, variables, operators, and basic constructs' },
      { id: 'variables', title: 'JavaScript Variables and Scope', description: 'var, let, const, and scope rules' },
      { id: 'data-types', title: 'JavaScript Data Types', description: 'Primitives, objects, arrays, and type coercion' },
      { id: 'loops', title: 'JavaScript Loops', description: 'for, while, forEach, map, filter, reduce' },
      { id: 'functions', title: 'All about JavaScript Functions', description: 'Function declarations, expressions, arrow functions, and callbacks' },
      { id: 'prototypes', title: 'JavaScript Prototypes', description: 'Prototype chain and inheritance' },
      { id: 'promises', title: 'JavaScript Promises', description: 'Asynchronous programming with Promises' },
      { id: 'modules', title: 'JavaScript Modules', description: 'ES6 modules, import/export' },
      { id: 'dom', title: 'JavaScript DOM Manipulation', description: 'Selecting and modifying HTML elements' },
    ],
    freeResources: {
      roadmaps: [
        {
          title: 'Visit Dedicated JavaScript Roadmap',
          type: 'Roadmap',
          url: 'https://roadmap.sh/javascript',
        },
      ],
      courses: [],
      videos: [],
      articles: [
        {
          title: 'The Modern JavaScript Tutorial',
          type: 'Article',
          url: 'https://javascript.info/',
        },
        {
          title: 'Build 30 Javascript projects in 30 days',
          type: 'Article',
          url: 'https://javascript30.com/',
        },
        {
          title: 'Explore top posts about JavaScript',
          type: 'Article',
          url: 'https://app.daily.dev/tags/javascript',
        },
      ],
      practice: [
        {
          title: 'JavaScript Exercises',
          type: 'Practice',
          url: 'https://www.w3schools.com/js/js_exercises.asp',
        },
        {
          title: 'Codewars JavaScript Challenges',
          type: 'Practice',
          url: 'https://www.codewars.com/',
        },
      ],
    },
    studyPath: {
      prerequisites: ['HTML', 'CSS', 'Programming Fundamentals'],
      nextTopics: ['DOM Manipulation', 'ES6+', 'Async JavaScript', 'Version Control'],
    },
    projectIdeas: [
      {
        title: 'To-Do List App',
        description: 'Build an interactive to-do list with add, delete, and complete functionality using vanilla JavaScript.',
        difficulty: 'Beginner',
      },
      {
        title: 'Calculator',
        description: 'Create a functional calculator with all basic operations and clear button.',
        difficulty: 'Beginner',
      },
      {
        title: 'Weather App',
        description: 'Fetch weather data from an API and display it dynamically.',
        difficulty: 'Intermediate',
      },
      {
        title: 'Quiz App',
        description: 'Build an interactive quiz with score tracking and multiple choice questions.',
        difficulty: 'Intermediate',
      },
    ],
    aiTutorPrompts: [
      'Explain JavaScript closures with simple examples',
      'What is the difference between let, const, and var?',
      'How does async/await work in JavaScript?',
      'Explain the JavaScript event loop',
    ],
  },

  'version-control': {
    id: 'version-control',
    title: 'Version Control (Git & GitHub)',
    definition: 'Version control is a system that records changes to files over time, allowing you to track history and collaborate with others.',
    importance: 'Git is essential for professional development, enabling team collaboration, code backup, and managing project history.',
    usage: 'Git is used in virtually every software project for version tracking, branching, and collaboration through platforms like GitHub.',
    keyConcepts: [
      { id: 'git-basics', title: 'Git Basics (commit, push, pull)' },
      { id: 'branching', title: 'Branching & Merging' },
      { id: 'github', title: 'GitHub Workflow' },
      { id: 'collaboration', title: 'Collaboration & Pull Requests' },
    ],
    freeResources: {
      roadmaps: [],
      courses: [],
      videos: [],
      articles: [],
      practice: [],
    },
    studyPath: {
      prerequisites: ['HTML', 'CSS', 'JavaScript'],
      nextTopics: ['Frameworks', 'Deployment'],
    },
    projectIdeas: [],
    aiTutorPrompts: [
      'Explain Git workflow for beginners',
      'What is the difference between git merge and git rebase?',
      'How do I resolve merge conflicts?',
    ],
  },

  frameworks: {
    id: 'frameworks',
    title: 'Frameworks & Libraries',
    definition: 'JavaScript frameworks and libraries are tools that provide pre-written code to build web applications faster and more efficiently.',
    importance: 'Frameworks like React, Vue, and Angular are industry standards that make complex applications manageable and scalable.',
    usage: 'Used to build modern single-page applications (SPAs), mobile apps, and complex user interfaces.',
    keyConcepts: [
      { id: 'react', title: 'React' },
      { id: 'vue', title: 'Vue.js' },
      { id: 'angular', title: 'Angular' },
      { id: 'state', title: 'State Management' },
      { id: 'routing', title: 'Client-side Routing' },
    ],
    freeResources: {
      roadmaps: [],
      courses: [],
      videos: [],
      articles: [],
      practice: [],
    },
    studyPath: {
      prerequisites: ['JavaScript', 'Version Control'],
      nextTopics: ['Testing', 'Performance'],
    },
    projectIdeas: [],
    aiTutorPrompts: [
      'Which framework should I learn first?',
      'Explain React components',
      'What is virtual DOM?',
    ],
  },

  testing: {
    id: 'testing',
    title: 'Testing',
    definition: 'Testing is the practice of verifying that code works as expected through automated tests.',
    importance: 'Testing ensures code quality, prevents bugs, and makes refactoring safer.',
    usage: 'Used in professional development to maintain code reliability and quality.',
    keyConcepts: [
      { id: 'unit', title: 'Unit Testing' },
      { id: 'integration', title: 'Integration Testing' },
      { id: 'e2e', title: 'End-to-End Testing' },
      { id: 'jest', title: 'Jest & Testing Library' },
    ],
    freeResources: {
      roadmaps: [],
      courses: [],
      videos: [],
      articles: [],
      practice: [],
    },
    studyPath: {
      prerequisites: ['Frameworks'],
      nextTopics: ['Performance', 'Deployment'],
    },
    projectIdeas: [],
    aiTutorPrompts: [
      'What is the difference between unit and integration testing?',
      'How do I write my first test in Jest?',
    ],
  },

  performance: {
    id: 'performance',
    title: 'Performance Optimization',
    definition: 'Performance optimization involves improving the speed and efficiency of web applications.',
    importance: 'Fast websites improve user experience, SEO rankings, and conversion rates.',
    usage: 'Critical for production applications to ensure smooth user experience.',
    keyConcepts: [
      { id: 'loading', title: 'Page Load Optimization' },
      { id: 'images', title: 'Image Optimization' },
      { id: 'caching', title: 'Caching Strategies' },
      { id: 'lazy', title: 'Lazy Loading' },
    ],
    freeResources: {
      roadmaps: [],
      courses: [],
      videos: [],
      articles: [],
      practice: [],
    },
    studyPath: {
      prerequisites: ['Frameworks', 'Testing'],
      nextTopics: ['Deployment'],
    },
    projectIdeas: [],
    aiTutorPrompts: [
      'How do I optimize my website performance?',
      'What are web vitals?',
    ],
  },

  deployment: {
    id: 'deployment',
    title: 'Deployment',
    definition: 'Deployment is the process of making your web application available on the internet.',
    importance: 'Deployment skills allow you to share your projects with the world and understand production environments.',
    usage: 'Every web application needs to be deployed to be accessible to users.',
    keyConcepts: [
      { id: 'hosting', title: 'Web Hosting Basics' },
      { id: 'ci-cd', title: 'CI/CD Pipelines' },
      { id: 'domains', title: 'Domain & DNS' },
      { id: 'platforms', title: 'Deployment Platforms (Vercel, Netlify)' },
    ],
    freeResources: {
      roadmaps: [],
      courses: [],
      videos: [],
      articles: [],
      practice: [],
    },
    studyPath: {
      prerequisites: ['Performance', 'Testing'],
      nextTopics: [],
    },
    projectIdeas: [],
    aiTutorPrompts: [
      'How do I deploy my React app?',
      'What is the difference between Vercel and Netlify?',
    ],
  },
};
