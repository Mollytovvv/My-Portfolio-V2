import { useState } from "react";

import {
    SiReact,
    SiVite,
    SiNodedotjs,
    SiExpress,
    SiSocketdotio,
    SiMongodb,
    SiPython,
    SiHtml5,
    SiCss,
    SiJavascript,
    SiPostgresql,
    SiPhp,
    SiMysql,
    SiGithub
} from "react-icons/si";

import {
    FiExternalLink,
    FiCode,
    FiYoutube
} from "react-icons/fi";

import { BsDatabaseFill } from "react-icons/bs";
import { SiFlask } from "react-icons/si";

import { motion } from "framer-motion";
import {
    fadeUp,
    staggerContainer
} from "../animations/animations";

import "../styles/projects.css";

import serviceDeskImage from "../assets/projects/service-desk/home-service-desk.jpg";
import inventoryImage from "../assets/projects/inventory/home-inventory-analytics.jpg";
import barangayImage from "../assets/projects/barangay/home-barangay-management.jpg";
import dormitoryImage from "../assets/projects/dormitory/home-dormitory-management.jpg";

const projects = [
    {
        id: 1,
        title: "MollyTech Service Desk",
        description:
            "A full-stack IT service desk platform engineered to simulate a real-world technical support environment. The system manages the complete support workflow from ticket submission and administrative assignment to technician handling, real-time messaging, notifications, and ticket resolution across user, IT support, technician, and administrator roles.",
        stack: [
            { name: "React", icon: SiReact },
            { name: "Vite", icon: SiVite },
            { name: "Node.js", icon: SiNodedotjs },
            { name: "Express", icon: SiExpress },
            { name: "Socket.IO", icon: SiSocketdotio },
            { name: "MongoDB", icon: SiMongodb }
        ],
        github: "https://github.com/Mollytovvv/MollyTech-Service-Desk",
        live: "https://mollytech-service-desk.ralphmolina.dev/",
        youtube: "https://youtu.be/_bTyL3zbJE0",
        images: [serviceDeskImage],
        imageClass: "service-desk-image"
    },

    {
        id: 2,
        title: "MollyTech Inventory Analytics",
        description:
            "A web-based inventory and business analytics system built for a small buy-and-sell operation. The system automates inventory tracking, sales records, revenue and profit calculations, and presents business performance through an analytics dashboard.",
        stack: [
            { name: "Python", icon: SiPython },
            { name: "Flask", icon: SiFlask },
            { name: "HTML5", icon: SiHtml5 },
            { name: "CSS3", icon: SiCss },
            { name: "JavaScript", icon: SiJavascript },
            { name: "PostgreSQL", icon: SiPostgresql }
        ],
        github: "https://github.com/Mollytovvv/MollyTech-Inventory-Analytics-System",
        live: "https://mollytech-inventory-analytics.ralphmolina.dev/",
        youtube: "https://youtu.be/4bUfA9BGEfk",
        images: [inventoryImage],
        imageClass: "inventory-image"
    },

    {
        id: 3,
        title: "Barangay Management System",
        description:
            "A full-stack Barangay Management System developed for Barangay Manresa in Quezon City to streamline resident services, document requests, complaint handling, announcements, and administrative records through a centralized web-based platform.",
        stack: [
            { name: "HTML5", icon: SiHtml5 },
            { name: "CSS3", icon: SiCss },
            { name: "JavaScript", icon: SiJavascript },
            { name: "PHP", icon: SiPhp },
            { name: "MySQL", icon: SiMysql }
        ],
        github: "https://github.com/Mollytovvv/Barangay-Management-System",
        youtube: "https://youtu.be/GhK7YNUlTw4",
        images: [barangayImage],
        previewClass: "barangay-preview",
        imageClass: "barangay-image"
    },

    {
        id: 4,
        title: "Dormitory Management System",
        description:
            "A C# desktop application developed to manage dormitory-related records, including tenant information and room assignments.",
        stack: [
            { name: "C#", icon: FiCode },
            { name: "SQL Server", icon: BsDatabaseFill }
        ],
        github: "https://github.com/Mollytovvv/Dormitory-Management-System",
        youtube: "https://youtu.be/ICBxDq11q1I",
        images: [dormitoryImage],
        imageClass: "dormitory-image"
    }
];

export default function Projects() {

    const [activeImages, setActiveImages] = useState({});

    return (

        <section
            id="projects"
            className="projects"
        >

            <div className="container">

                <div className="section-header">

                    <span className="section-label">
                        Portfolio
                    </span>

                    <h2>
                        Projects
                    </h2>

                    <p>
                        A collection of software projects I've designed and developed across web, desktop, database, and analytics applications.
                    </p>

                </div>

                <motion.div
                    className="projects-grid"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.2
                    }}
                >

                    {projects.map((project) => (

                        <motion.article
                            key={project.id}
                            className={`project-card ${project.featured ? "featured" : ""}`}
                            variants={fadeUp}
                            whileHover={{
                                y: -8
                            }}
                            transition={{
                                duration: 0.25
                            }}
                        >

                            <div className={`project-preview ${project.imageClass || ""}`}>

                                {project.featured && (

                                    <span className="project-badge">
                                        Featured
                                    </span>

                                )}

                                {project.images.length > 0 ? (

                                    <div className="project-carousel">

                                        <img
                                            src={project.images[activeImages[project.id] || 0]}
                                            alt={`${project.title} preview`}
                                            className={`${project.title === "MollyTech Inventory Analytics" ? "inventory-image" : ""}`}
                                        />

                                    </div>

                                ) : (

                                    <span>
                                        Project Preview
                                    </span>

                                )}

                            </div>

                            <div className="project-content">

                                <h3>
                                    {project.title}
                                </h3>

                                <p>
                                    {project.description}
                                </p>

                                <div className="project-stack">

                                    {project.stack.map((tech) => {

                                        const Icon = tech.icon;

                                        return (

                                            <span key={tech.name}>

                                                <Icon />

                                                {tech.name}

                                            </span>

                                        );

                                    })}

                                </div>

                                <div className="project-actions">

                                    <a
                                        href={project.github || "#"}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={!project.github ? "disabled" : ""}
                                        onClick={(e) => {
                                            if (!project.github) e.preventDefault();
                                        }}
                                    >

                                        <SiGithub />

                                        GitHub

                                    </a>

                                    {project.live && (

                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noreferrer"
                                        >

                                            <FiExternalLink />

                                            Live Application

                                        </a>

                                    )}

                                    {project.youtube && (

                                        <a
                                            href={project.youtube}
                                            target="_blank"
                                            rel="noreferrer"
                                        >

                                            <FiYoutube />

                                            YouTube

                                        </a>

                                    )}

                                </div>

                            </div>

                        </motion.article>

                    ))}

                </motion.div>

            </div>

        </section>

    );

}