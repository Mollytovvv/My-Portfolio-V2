import "../styles/about.css";

import { motion } from "framer-motion";
import { fadeUp } from "../animations/animations";

export default function About() {

    return (

        <section
            id="about"
            className="about"
        >

            <div className="container">

                <motion.div
                    className="section-header"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >

                    <span className="section-label">
                        About Me
                    </span>

                    <h2>
                        Turning Ideas into Modern Web Applications
                    </h2>

                    <p>
                        I'm Ralph Michael Molina, an Information Systems student
                        and aspiring Full-Stack Developer passionate about
                        creating modern, responsive, and user-focused web
                        applications. I enjoy solving real-world problems
                        through clean code, intuitive user experiences, and
                        continuous learning.
                    </p>

                </motion.div>

            </div>

        </section>

    );

}