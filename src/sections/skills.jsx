import "../styles/skills.css";

import { motion } from "framer-motion";
import {
    fadeUp,
    staggerContainer
} from "../animations/animations";

import {
    HiOutlineCodeBracket,
    HiOutlineServerStack,
    HiOutlineCircleStack,
    HiOutlineWrenchScrewdriver
} from "react-icons/hi2";

import {
    SiReact,
    SiVite,
    SiHtml5,
    SiCss,
    SiJavascript,
    SiNodedotjs,
    SiExpress,
    SiPhp,
    SiPython,
    SiFlask,
    SiMongodb,
    SiMysql,
    SiPostgresql,
    SiPostman,
    SiNpm,
    SiFigma
} from "react-icons/si";

import { FiCode } from "react-icons/fi";

import {
    FaGitAlt,
    FaGithub,
    FaDatabase
} from "react-icons/fa";

import { VscVscode } from "react-icons/vsc";

const skillGroups = [

    {
        title: "Frontend",

        icon: HiOutlineCodeBracket,

        skills: [
            { name: "React", icon: SiReact },
            { name: "Vite", icon: SiVite },
            { name: "HTML5", icon: SiHtml5 },
            { name: "CSS3", icon: SiCss },
            { name: "JavaScript", icon: SiJavascript }
        ]
    },

    {
        title: "Backend",

        icon: HiOutlineServerStack,

        skills: [
            { name: "Node.js", icon: SiNodedotjs },
            { name: "Express", icon: SiExpress },
            { name: "PHP", icon: SiPhp },
            { name: "Python", icon: SiPython },
            { name: "Flask", icon: SiFlask },
            { name: "C#", icon: FiCode }
        ]
    },

    {
        title: "Databases",

        icon: HiOutlineCircleStack,

        skills: [
            { name: "MongoDB", icon: SiMongodb },
            { name: "MySQL", icon: SiMysql },
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "SQL Server", icon: FaDatabase }
        ]
    },

    {
        title: "Developer Tools",

        icon: HiOutlineWrenchScrewdriver,

        skills: [
            { name: "Git", icon: FaGitAlt },
            { name: "GitHub", icon: FaGithub },
            { name: "VS Code", icon: VscVscode },
            { name: "Postman", icon: SiPostman },
            { name: "npm", icon: SiNpm },
            { name: "Figma", icon: SiFigma }
        ]
    }

];

export default function Skills() {

    return (

        <section
            id="skills"
            className="skills"
        >

            <div className="container">

                <motion.div
                    className="section-header"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: .2
                    }}
                >

                    <span className="section-label">
                        Technologies
                    </span>

                    <h2>
                        Tech Stack
                    </h2>

                    <p>
                        Technologies, frameworks, databases, and
                        development tools I use to build modern
                        web applications and software solutions.
                    </p>

                </motion.div>

                <motion.div
                    className="skills-container"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: .2
                    }}
                >

                    {
                        skillGroups.map((group) => {

                            const GroupIcon = group.icon;

                            return (

                                <motion.article
                                    key={group.title}
                                    className="skill-card"
                                    variants={fadeUp}
                                    whileHover={{
                                        y: -10,
                                        scale: 1.015
                                    }}
                                >

                                    <div className="skill-card-header">

                                        <div className="skill-icon-wrapper">

                                            <GroupIcon
                                                className="skill-card-icon"
                                            />

                                        </div>

                                        <div className="skill-card-info">

                                            <h3>
                                                {group.title}
                                            </h3>

                                        </div>

                                    </div>

                                    <div className="skill-list">

                                        {
                                            group.skills.map((skill) => {

                                                const SkillIcon = skill.icon;

                                                return (

                                                    <motion.span
                                                        key={skill.name}
                                                        className="skill-pill"
                                                        whileHover={{
                                                            y: -3,
                                                            scale: 1.04
                                                        }}
                                                        whileTap={{
                                                            scale: .96
                                                        }}
                                                        transition={{
                                                            duration: .2
                                                        }}
                                                    >

                                                        <SkillIcon />

                                                        {skill.name}

                                                    </motion.span>

                                                );

                                            })
                                        }

                                    </div>

                                </motion.article>

                            );

                        })
                    }

                </motion.div>

            </div>

        </section>

    );

}