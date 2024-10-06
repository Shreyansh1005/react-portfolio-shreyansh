
import project1 from "../assets/projects/portfolio_project1.jpeg";
import project2 from "../assets/projects/portfolio_project2.jpeg";
import project3 from "../assets/projects/portfolio_project4.jpeg";
import project4 from "../assets/projects/portfolio_project3.jpeg";

export const HERO_CONTENT = "Welcome to my portfolio! I'm Shreyansh Dubey, a passionate Full Stack Developer with a knack for creating innovative web applications. With a good foundation in both front-end and back-end technologies, I thrive on turning complex problems into simple, user-friendly solutions. My journey in web development has equipped me with skills in frameworks like React, Node.js, and Express, as well as expertise in database management with MongoDB. I believe in the power of collaboration and am always eager to learn from others, pushing the boundaries of what's possible in technology. Whether it's developing a responsive user interface or architecting a robust server-side application, I'm dedicated to delivering high-quality work that meets the needs of users and businesses alike. Let's embark on this digital journey together!";


export const ABOUT_TEXT = `I am a web developer with a passion for creating cutting-edge applications that blend functionality with an intuitive user experience. Currently pursuing my B.Tech in Computer Science at JSS Academy of Technical Education, Noida, I have honed my skills in both front-end and back-end development. My experience ranges from building result management systems and certification platforms to developing school transport systems, all with a focus on scalability and performance.
Driven by curiosity and a love for problem-solving, I enjoy diving into new technologies and leveraging them to create meaningful solutions. With strong soft skills and a dedication to continuous learning, I thrive in collaborative environments where innovation meets practical application.`;




export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Intern Full Stack Developer",
    company: "Zidio Development",
    description: `As a web development intern at Zidio Development, I am actively involved in building and refining web applications using cutting-edge technologies. Working alongside a skilled team, I contribute to the design, development, and implementation of user-friendly interfaces and efficient backend systems. My role includes developing new features, optimizing performance, and ensuring responsive designs across various platforms. This ongoing experience is helping me expand my expertise in full-stack development while gaining practical knowledge of the software development lifecycle.`
,
    technologies: ["Javascript", "React.js", "Node.js", "mongoDB"],
  },
  {
    year: "2024",
    role: "Intern Frontend Developer",
    company: "InternPe",
    description: `During my internship at InternPe, I gained hands-on experience in web development, focusing on both front-end and back-end tasks. I contributed to developing and maintaining dynamic web applications, ensuring smooth functionality and user-friendly design. My responsibilities included coding, debugging, and optimizing performance, while also collaborating with the team to deliver efficient solutions. This internship helped me strengthen my skills in full-stack development and provided valuable insights into real-world application development processes.`
,
    technologies: ["HTML", "CSS", "Javascript"],
  },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "Resul-Management-System",
    image: project1,
    description:
      "The Result Management System is a web application developed using the MERN stack (MongoDB, Express, React, Node.js) that streamlines the management of student results. It features role-based access for students and administrators, allowing for real-time updates and viewing of results, grade calculations, and PDF downloads using jsPDF. The admin dashboard enables easy management of student data, ensuring efficient tracking and reporting of academic performance. This scalable solution is designed to enhance the efficiency of educational institutions in managing student results."
,
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Certification-management-system",
    image: project2,
    description:
      "The Certification Management System is a web application built with the MERN stack (MongoDB, Express, React, Node.js) that allows administrators to upload and manage student certificates efficiently. Students can search for their certificates using unique IDs, view details, and download them directly. The system streamlines the certification process, ensuring easy access to important documents while maintaining data integrity and security. This project enhances the user experience for both administrators and students in managing and retrieving certification records."
,
    technologies: ["HTML", "CSS", "React", "Node","MongDB"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "My portfolio website serves as a digital showcase of my skills, projects, and experiences as a Full Stack Developer. Designed with a modern aesthetic and user-friendly interface, this site allows visitors to navigate seamlessly through my work and connect with me easily. It features a dynamic hero section that introduces who I am, along with detailed project showcases highlighting the technologies used and the challenges overcome in each project.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
  },
  {
    title: "AI-in-Agriculture",
    image: project4,
    description:
      "The AI in Agriculture project leverages machine learning algorithms to optimize farming practices and enhance crop yield. By analyzing data such as soil health, weather patterns, and crop performance, the application provides actionable insights to farmers, enabling informed decision-making. This solution aims to improve resource management, reduce costs, and promote sustainable agricultural practices. The integration of AI technology into agriculture seeks to revolutionize traditional farming methods, making them more efficient and productive.",
    technologies: ["HTML", "React","CSS", "Python", "Express", "MogoDB"],
  },
];

export const CONTACT = {
  address: "Bishanpura, Sector-58, Noida, Uttar Pradesh ",
  phoneNo: "+91 8736037009",
  email: "dubeyshreyansh2003@gmail.com",
};
