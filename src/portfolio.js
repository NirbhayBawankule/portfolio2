/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Nirbhay Bawankule",
  title: "Hi all, I'm Nirbhay",
  subTitle: emoji(
    "I am a Computer Science student at KIIT University, passionate about building transparent, reliable, and practical machine learning systems. My work spans projects in predictive modeling, data analysis, and neural networks. I enjoy turning complex data into actionable insights and exploring the intersection of algorithms, AI, and human decision-making. This portfolio showcases my projects, skills, and experience in Python, Machine Learning, Deep Learning, and MLOps."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1VmOVESCDW9fxfajaOczkpR7sXXE4elhr/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/NirbhayBawankule",
  linkedin: "https://www.linkedin.com/in/nirbhay-bawankule/",
  gmail: "nirbhaybawankule2004@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Specializing in Machine Learning and Data Analytics. I have hands-on experience in Python programming, building ML models from scratch, and designing data-driven solutions that transform raw data into actionable insights.",
  skills: [
    emoji(
      "⚡ Building ML models from scratch (linear/logistic regression, tree models, NN)"
    ),
    emoji("⚡ Data cleaning, EDA, feature engineering with Pandas & NumPy"),
    emoji(
      "⚡ Model evaluation, interpretation, and basic MLOps workflows"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
  {
    skillName: "Python",
    iconifyTag: "logos:python"
  },
  {
    skillName: "NumPy",
    iconifyTag: "logos:numpy"
  },
  {
    skillName: "Pandas",
    iconifyTag: "logos:pandas-icon"
  },
  {
    skillName: "Scikit-Learn",
    iconifyTag: "simple-icons:scikitlearn"
  },
  {
    skillName: "TensorFlow",
    iconifyTag: "logos:tensorflow"
  },
  {
    skillName: "PyTorch",
    iconifyTag: "logos:pytorch-icon"
  },
  {
    skillName: "GitHub",
    iconifyTag: "mdi:github"
  },
  {
    skillName: "SQL",
    iconifyTag: "vscode-icons:file-type-sql"
  },
  {
    skillName: "Jupyter Notebook",
    iconifyTag: "logos:jupyter"
  },
  {
    skillName: "C",
    iconifyTag: "mdi:language-c"
  },
  {
    skillName: "Java",
    iconifyTag: "logos:java"
  },
  {
    skillName: "Docker",
    iconifyTag: "logos:docker-icon"
  }
],
display: true
 // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Kalinga Institute of Industrial Technology",
      logo: require("./assets/images/image.png"),
      subHeader: "Bachelors in Computer Science Engineering",
      duration: "July 2023 - Present",
      desc: "Pursuing undergraduate degree in Computer Science. Focus areas: Machine Learning, Data Mining, and MLOps.",
      grade: "CGPA: 7.78(current)",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Machine Learning", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming (Python / Java)",
      progressPercentage: "90%"
    },
    {
      Stack: "Data Analysis",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "ML Domain Member",
      company: "Coding Ninjas Society, KIIT University",
      companylogo: require("./assets/images/cn.png"),
      date: "August 2025 – Present",
      desc: "Collaborated with peers on ML-focused sessions, discussions, and coding events to foster a practical learning environment and strengthen applied machine learning skills.",
      descBullets: []
    },

    {
      role: "Hacktoberfest 2025 Contributor",
      company: "Hacktoberfest",
      companylogo: require("./assets/images/hack.webp"),
      date: "October 2025",
      desc: "Contributed to open-source projects during Hacktoberfest 2025, earning badges for active participation and successful pull requests.",
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = { // Set true or false to show Contact profile using Github, defaults to true
  display: false,
  opensource: [{
    role: "Hacktoberfest 2025 Contributor",
    company: "Hacktoberfest",
    companylogo: require("./assets/images/hack.webp"),
    date: "October 2025",
    desc: "Contributed to open-source projects during Hacktoberfest 2025, earning badges for active participation and successful pull requests.",
  }

  ] // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF MY PROJECTS THAT I HAVE WORKED ON",
  projects: [
    {
      //image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "HR-Analytics-Employee-Attrition-Performance",
      projectDesc: "Predicting employee attrition using data mining and machine learning techniques — includes data preprocessing, EDA, and model comparison",
      footerLink: [
        {
          name: "Visit Repo",
          url: "https://github.com/NirbhayBawankule/HR-Analytics-Employee-Attrition-Performance"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      //image: require("./assets/images/nextuLogo.webp"),
      projectName: "Breast-Cancer-Diagnosis-Logistic-Regression-from-Scratch",
      projectDesc: "A from-scratch implementation of Logistic Regression for diagnosing breast cancer using the Wisconsin Diagnostic dataset. Includes full data analysis, visualization, model training, evaluation, and prediction interface.",
      footerLink: [
        {
          name: "Visit Repo",
          url: "https://github.com/NirbhayBawankule/Breast-Cancer-Diagnosis-Logistic-Regression-from-Scratch"
        }
      ]
    },
    {
      //image: require("./assets/images/nextuLogo.webp"),
      projectName: "Uber-Ride-Data-Analysis",
      projectDesc: "An end-to-end data analysis project exploring Uber ride request patterns by time, location, and trip status. Includes data cleaning, feature engineering, visualizations (heatmaps, time-series plots), and actionable insights to improve service efficiency.",
      footerLink: [
        {
          name: "Visit Repo",
          url: "https://github.com/NirbhayBawankule/Uber-Ride-Data-Analysis"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Andrew Ng’s Machine Learning Specialization",
      subtitle:
        "Completed Andrew Ng’s Machine Learning Specialization from Coursera covering supervised and unsupervised learning, best practices, and real-world applications.",
      image: require("./assets/images/coursera.png"),
      imageAlt: "Coursera Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/87QGEKJNAU1A?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n"
        }
      ]
    },
    {
      title: "Hacktoberfest 2025 Badges",
      subtitle:
        "Earned Hacktoberfest 2025 Badges for open-source contributions during the month of October.",
      image: require("./assets/images/lvl1-astronaut.webp"),
      imageAlt: "Holopin Action Logo",
      footerLink: [
        {
          name: "Badge",
          url: "https://www.holopin.io/@nirbhaybawankule#badges"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: false,
  blogs: [],
  display: false
};

const talkSection = {
  title: "Talks",
  subtitle: "",
  talks: [],
  display: false
};
const podcastSection = {
  title: "Podcast 🎙️",
  subtitle: "",
  podcast: [],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8237798967",
  email_address: "nirbhaybawankule2004@gmail.com"
};

//Twitter Section

const twitterDetails = {
  userName: "",  // e.g., "nirbhaybawankule"
  display: false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
