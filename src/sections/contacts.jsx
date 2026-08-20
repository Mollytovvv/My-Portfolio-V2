import "../styles/contacts.css";

import { motion } from "framer-motion";
import {
    fadeUp,
    staggerContainer
} from "../animations/animations";

import {
    FiMail,
    FiGithub,
    FiLinkedin,
    FiDownload,
    FiArrowUpRight
} from "react-icons/fi";

const contacts = [

    {
        title: "Email",
        value: "ralphmolina.work@gmail.com",
        icon: <FiMail />,
        link: "mailto:ralphmolina.work@gmail.com"
    },

    {
        title: "GitHub",
        value: "github.com/Mollytovvv",
        icon: <FiGithub />,
        link: "https://github.com/Mollytovvv"
    },

    {
        title: "LinkedIn",
        value: "linkedin.com/in/ralph-molina-2012693a4",
        icon: <FiLinkedin />,
        link: "https://linkedin.com/in/ralph-molina-2012693a4"
    },

    {
        title: "Resume",
        value: "Download Resume",
        icon: <FiDownload />,
        link: "/resume.pdf"
    }

];

export default function Contacts() {

    return (

        <section
            id="contact"
            className="contacts"
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

                        Contact

                    </span>

                    <h2>

                        Let's Connect

                    </h2>

                    <p>

                        I'm always open to discussing new opportunities,
                        collaborations, and software projects.
                        Feel free to reach out through any of the
                        platforms below.

                    </p>

                </motion.div>

                <motion.div
                    className="contacts-grid"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: .2
                    }}
                >

                    {

                        contacts.map((contact) => (

                        <motion.a
                        
                            key={contact.title}
                            href={contact.link}
                            download={contact.title === "Resume" ? true : undefined}

                                className="contact-card"

                                variants={fadeUp}

                                whileHover={{
                                    y: -10,
                                    scale: 1.015
                                }}

                                whileTap={{
                                    scale: .98
                                }}

                                target={
                                    contact.title === "Email"
                                        ? "_self"
                                        : "_blank"
                                }

                                rel="noreferrer"

                            >

                                <div className="contact-icon">

                                    {contact.icon}

                                </div>

                                <div className="contact-content">

                                    <span className="contact-title">

                                        {contact.title}

                                    </span>

                                    <h3>

                                        {contact.value}

                                    </h3>

                                </div>

                                <div className="contact-arrow">

                                    <FiArrowUpRight />

                                </div>

                            </motion.a>

                        ))

                    }

                </motion.div>

                <motion.footer

                    className="contact-footer"

                    variants={fadeUp}

                    initial="hidden"

                    whileInView="visible"

                    viewport={{
                        once: true
                    }}

                >

                    <p>

                        © {new Date().getFullYear()} Ralph Michael Molina

                    </p>

                    <span>

                        Designed and developed using React.

                    </span>

                </motion.footer>

            </div>

        </section>

    );

}