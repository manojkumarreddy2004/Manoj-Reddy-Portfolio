export const about = "A dedicated and passionate Computer Science and Engineering student with a strong foundation in programming, web development, and database management. Eager to leverage my skills to build innovative solutions and contribute to a dynamic team.";

export const education = [
  {
    degree: "B.TECH in Computer Science",
    institution: "Sreenidhi Institute of Science and Technology",
    period: "2020 - 2024",
    grade: "CGPA: 8.61/10",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Sri Chaitanya Junior College",
    period: "2018 - 2020",
    grade: "Percentage: 97.4%",
  },
  {
    degree: "10th Grade (ICSE)",
    institution: "Johnson Grammar School",
    period: "2018",
    grade: "Percentage: 94.6%",
  },
];

export const skills = [
  { name: "C++", proficiency: 90 },
  { name: "Java", proficiency: 90 },
  { name: "Python", proficiency: 80 },
  { name: "JavaScript", proficiency: 85 },
  { name: "HTML", proficiency: 95 },
  { name: "CSS", proficiency: 90 },
  { name: "ReactJS", proficiency: 85 },
  { name: "NodeJS", proficiency: 80 },
  { name: "ExpressJS", proficiency: 80 },
  { name: "MySQL", proficiency: 85 },
  { name: "MongoDB", proficiency: 80 },
  { name: "Git & GitHub", proficiency: 90 },
];

export const projects = [
  {
    name: "Personalized News Feed Aggregator",
    description: "A web application that gathers news from various sources using the NewsAPI and delivers a personalized feed based on user preferences.",
    tech: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "NewsAPI"],
    link: "https://github.com/reddy-manoj/News-Aggregator",
  },
  {
    name: "E-commerce Website",
    description: "A fully functional e-commerce platform with features like product catalog, shopping cart, and user authentication.",
    tech: ["HTML", "CSS", "JavaScript", "ReactJS", "NodeJS", "ExpressJS", "MySQL"],
    link: "https://github.com/reddy-manoj/E-commerce-website",
  },
  {
    name: "Student Management System",
    description: "A desktop application to manage student records, including personal details, academic performance, and attendance.",
    tech: ["Java", "Swing", "MySQL"],
    link: "https://github.com/reddy-manoj/Student-Management-System",
  },
];

export const certifications = [
  {
    name: "Problem Solving (Basic)",
    issuer: "HackerRank",
    date: "October 2022",
  },
  {
    name: "Java (Basic)",
    issuer: "HackerRank",
    date: "October 2022",
  },
  {
    name: "SQL (Basic)",
    issuer: "HackerRank",
    date: "December 2022",
  },
];

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/manoj-reddy-y-6415a7229/",
  github: "https://github.com/reddy-manoj",
  leetcode: "https://leetcode.com/reddy_manoj_2003/",
  hackerrank: "https://www.hackerrank.com/profile/y_manojreddy2003",
};

export const hobbies = {
    languages: ["English", "Hindi", "Telugu"],
    activities: ["Badminton", "Chess", "Gym", "Swimming"],
};

const allText = [
  about,
  ...education.map(e => `${e.degree} at ${e.institution}`),
  ...skills.map(s => s.name),
  ...projects.map(p => `${p.name}: ${p.description} using ${p.tech.join(', ')}`),
  ...certifications.map(c => `${c.name} from ${c.issuer}`),
  ...hobbies.languages,
  ...hobbies.activities,
  "Computer Science Engineering"
].join('\n');

export const portfolioContentString = allText;
