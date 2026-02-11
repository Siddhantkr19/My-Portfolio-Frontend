import React from 'react';
import './Hero.css';
import profileImg from '../assets/profile-placeholder1.png';
import { FaGithub, FaLinkedin, FaHackerrank, FaGlobe, FaDownload } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

const Hero = () => {
    return (
        <div className="hero-container">
            
            {/* COLUMN 1: LEFT */}
            <div className="hero-col hero-left">
                <div className="img-wrapper">
                    <img 
                        src={profileImg} 
                        alt="Siddhant Kumar" 
                        className="hero-profile-img" 
                    />
                </div>
            </div>

            {/* COLUMN 2: MIDDLE */}
            <div className="hero-col hero-middle">
                <h1 className="hero-name">Siddhant Kumar</h1>
                <h2 className="hero-headline">Java Full Stack Developer</h2>
                
                <p className="hero-description">
                    I am a backend-focused Software Engineer specializing in building secure, scalable systems using <strong>Java</strong>, <strong>Spring Boot</strong>, and <strong>Microservices</strong>. 
                    With a strong command of <strong>Data Structures (750+ Solved)</strong> and modern frontend expertise in <strong>React</strong>, I am currently exploring <strong>System Design</strong>. I build production-ready applications like <em>LibHub</em>.
                </p>
                
                {/* 2 Rows of 3 Buttons */}
                <div className="hero-social-grid">
                    {/* Row 1 */}
                    <a href="https://libhub.live" target="_blank" rel="noopener noreferrer" className="btn btn-social btn-highlight">
                        <FaGlobe /> LibHub (Live)
                    </a>
                    <a href="https://github.com/Siddhantkr19" target="_blank" rel="noopener noreferrer" className="btn btn-social">
                        <FaGithub /> GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/siddhantkumar19/" target="_blank" rel="noopener noreferrer" className="btn btn-social">
                        <FaLinkedin /> LinkedIn
                    </a>

                    {/* Row 2 */}
                    <a href="https://www.hackerrank.com/profile/siddhantkumar741" target="_blank" rel="noopener noreferrer" className="btn btn-social">
                        <FaHackerrank /> HackerRank
                    </a>
                    <a href="https://leetcode.com/u/Siddhantkumar19" target="_blank" rel="noopener noreferrer" className="btn btn-social">
                        <SiLeetcode /> LeetCode
                    </a>
                    <a href="https://www.geeksforgeeks.org/profile/siddhantkot7j" target="_blank" rel="noopener noreferrer" className="btn btn-social">
                        <SiGeeksforgeeks /> GFG
                    </a>
                </div>
            </div>

            {/* COLUMN 3: RIGHT */}
            <div className="hero-col hero-right">
                <a href="/Siddhant-kumar-Resume.pdf" download="Siddhant_Kumar_Resume.pdf" className="resume-circle-link">
                    <div className="resume-circle">
                        <svg viewBox="0 0 200 200" className="rotating-text">
                            <defs>
                                <path id="textPath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
                            </defs>
                            <text width="400">
                                <textPath alignmentBaseline="top" xlinkHref="#textPath" className="circle-text">
                                    DOWNLOAD RESUME • DOWNLOAD RESUME •
                                </textPath>
                            </text>
                        </svg>
                        <div className="circle-icon">
                            <FaDownload />
                        </div>
                    </div>
                </a>
            </div>

        </div>
    );
};

export default Hero;