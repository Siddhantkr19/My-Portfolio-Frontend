import React from 'react';
import './Skills.css';
import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaDocker, FaDatabase, FaLeaf, FaBrain } from 'react-icons/fa';
import { SiSpringboot, SiHibernate, SiMysql, SiPostgresql, SiRedis, SiJavascript, SiTailwindcss, SiPostman, SiSwagger, SiGnubash, SiLeetcode, SiHackerrank } from 'react-icons/si';
import { VscServerProcess } from "react-icons/vsc";

const skillsData = [
  

  {
    category: "Backend & Frameworks",
    items: [
      { name: "Spring Boot", icon: <SiSpringboot className="skill-icon spring" /> },
      { name: "Hibernate/JPA", icon: <FaLeaf className="skill-icon hibernate" /> },
      { name: "REST APIs", icon: <VscServerProcess className="skill-icon api" /> },
      { name: "Swagger UI", icon: <SiSwagger className="skill-icon api" /> }
    ]
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "Docker", icon: <FaDocker className="skill-icon docker" /> },
      { name: "CI/CD Pipelines", icon: <SiGnubash className="skill-icon bash" /> },
      { name: "Postman", icon: <SiPostman className="skill-icon postman" /> },
      { name: "Git & GitHub", icon: <FaGitAlt className="skill-icon git" /> }
    ]
  },
  {
    category: "Database",
    items: [
      { name: "SQL", icon: <FaDatabase className="skill-icon sql" /> },
      { name: "MySQL", icon: <SiMysql className="skill-icon mysql" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="skill-icon postgres" /> },
      { name: "Redis", icon: <SiRedis className="skill-icon redis" /> }
    ]
  },
    {
    category: "Frontend",
    items: [
      { name: "React.js", icon: <FaReact className="skill-icon react" /> },
      { name: "JavaScript", icon: <SiJavascript className="skill-icon js" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="skill-icon tailwind" /> },
      { name: "HTML5", icon: <FaHtml5 className="skill-icon html" /> }
    ]
  }
  ,
  
  {
    category: "Data Structures (DSA)",
    items: [
      { name: "750+ Solved", icon: <SiLeetcode className="skill-icon dsa" /> },
      { name: "Pattern-wise DSA", icon: <FaBrain className="skill-icon dsa" /> },
      { name: "HackerRank", icon: <SiHackerrank className="skill-icon dsa" /> },
      
    ]
  },{
    category: "Programming Languages",
    items: [
      { name: "Java (Core & Adv)", icon: <FaJava className="skill-icon java" /> },
      { name: "OOPs & Collections", icon: <FaBrain className="skill-icon" /> }
    ]
  }
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="section-title">Technical Expertise</h2>
      <div className="skills-grid">
        {skillsData.map((category, index) => (
          <div key={index} className="skill-category-card">
            <h3 className="category-title">{category.category}</h3>
            <div className="skills-list">
              {category.items.map((skill, idx) => (
                <div key={idx} className="skill-chip">
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;