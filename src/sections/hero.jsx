import "../styles/hero.css";
import profile from "../assets/test.jpg";

import { motion } from "framer-motion";

import {
    FiGithub,
    FiLinkedin,
    FiMail
} from "react-icons/fi";

import {
    fadeLeft,
    fadeRight,
    staggerContainer
} from "../animations/animations";

const socials = [

    {
        name: "GitHub",
        icon: <FiGithub />,
        link: "https://github.com/Mollytovvv"
    },

    {
        name: "LinkedIn",
        icon: <FiLinkedin />,
        link: "https://linkedin.com/in/ralph-molina-2012693a4"
    },

    {
        name: "Email",
        icon: <FiMail />,
        link: "mailto:ralphmolina.work@gmail.com"
    }

];

export default function Hero() {

    return (

        <section
            id="hero"
            className="hero"
        >

            <div className="container hero-container">

                {/* =========================
                    HERO CONTENT
                ========================= */}

                <motion.div
                    className="hero-content"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >

                    <motion.h1
                        className="hero-title"
                        variants={fadeLeft}
                    >

                        Ralph Molina

                    </motion.h1>

                    <motion.h2
                        className="hero-role"
                        variants={fadeLeft}
                    >

                        Software Engineer | Full-Stack Developer

                    </motion.h2>

                    <motion.p
                        className="hero-description"
                        variants={fadeLeft}
                    >

                        With a background in Computer Engineering, I build modern software applications by combining full-stack development, software engineering principles, and problem-solving to create practical, scalable solutions.

                    </motion.p>

                    <motion.div
                        className="hero-actions"
                        variants={fadeLeft}
                    >

                        <a
                            href="#projects"
                            className="primary-btn"
                        >

                            View Projects

                        </a>

                        <a
                            href="/resume.pdf"
                            className="secondary-btn"
                            download
                        >

                            Download Résumé

                        </a>

                    </motion.div>

                    <motion.div
                        className="hero-socials"
                        variants={fadeLeft}
                    >

                        {socials.map((social) => (

                            <a
                                key={social.name}
                                href={social.link}
                                target={
                                    social.name === "Email"
                                        ? "_self"
                                        : "_blank"
                                }
                                rel="noreferrer"
                                aria-label={social.name}
                            >

                                {social.icon}

                            </a>

                        ))}

                    </motion.div>

                </motion.div>

                {/* =========================
                    HERO IMAGE
                ========================= */}

                <motion.aside
                    className="hero-aside"
                    variants={fadeRight}
                    initial="hidden"
                    animate="visible"
                >

                    <motion.div
                        className="hero-photo-card"
                        animate={{
                            y: [0, -6, 0]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >

                        <div className="hero-window">

                            <div className="window-controls">

                                <span></span>
                                <span></span>
                                <span></span>

                            </div>

                            <p>
                                ralphmolina.dev
                            </p>

                        </div>

                        <div className="hero-photo">

                            <img
                                src={profile}
                                alt="Ralph Molina"
                            />

                        </div>

                    </motion.div>

                </motion.aside>

            </div>

        </section>

    );

}