import "../styles/certificates.css";

import { motion } from "framer-motion";
import {
    fadeUp,
    staggerContainer
} from "../animations/animations";

import {
    FiAward,
    FiExternalLink
} from "react-icons/fi";

const certificates = [

    {
        title: "Software Engineering",
        issuer: "IBM",
        image: "/certificates/logos/ibm.webp",
        certificate: "/certificates/ibm-software-engineering.pdf",
        credential: "https://coursera.org/share/9953597853444b2f2e9b24b052f6e5d0"
    },

    {
        title: "Full-Stack Development",
        issuer: "Microsoft",
        image: "/certificates/logos/microsoft.webp",
        certificate: "/certificates/microsoft-full-stack.pdf",
        credential: "https://coursera.org/share/0ed36ea2ba573a334d4f3a01167e5559"
    },

    {
        title: "React Development",
        issuer: "IBM",
        image: "/certificates/logos/ibm.webp",
        certificate: "/certificates/ibm-react.pdf",
        credential: "https://coursera.org/share/164c1eda6a5b3d80c1ba3161a37625f0"
    },

    {
        title: "JavaScript Programming",
        issuer: "Meta",
        image: "/certificates/logos/meta.webp",
        certificate: "/certificates/meta-javascript.pdf",
        credential: "https://coursera.org/share/bbdbcf07e586f863c40df7ec865e185f"
    },

    {
        title: "API Development",
        issuer: "Meta",
        image: "/certificates/logos/meta.webp",
        certificate: "/certificates/meta-api.pdf",
        credential: "https://coursera.org/share/022fbd6d23bfdf2e5f4997946436cbb2"
    },

    {
        title: "Database Development",
        issuer: "Meta",
        image: "/certificates/logos/meta.webp",
        certificate: "/certificates/meta-database.pdf",
        credential: "https://coursera.org/share/1acbbde36f8b8848e9331545918b621b"
    },

    {
        title: "Git & GitHub",
        issuer: "Google",
        image: "/certificates/logos/google.webp",
        certificate: "/certificates/google-git-and-github.pdf",
        credential: "https://coursera.org/share/545da7544b58c7214b9fcc46d12aba43"
    },

    {
        title: "HTML & CSS",
        issuer: "Certiport",
        image: "/certificates/logos/certiport.webp",
        certificate: "/certificates/certiport-html-css.pdf",
        credential: "https://www.certiport.com/portal/pages/credentialverification.aspx"
    },

    {
        title: "Python Development",
        issuer: "Sololearn",
        image: "/certificates/logos/sololearn.webp",
        certificate: "/certificates/sololearn-python.pdf",
        credential: "https://www.sololearn.com/certificates/CC-EZ7KNEJL"
    },

    {
        title: "Java Programming",
        issuer: "Sololearn",
        image: "/certificates/logos/sololearn.webp",
        certificate: "/certificates/sololearn-java.pdf",
        credential: "https://www.sololearn.com/certificates/CC-OYMY767M"
    },

    {
        title: "SQL",
        issuer: "Sololearn",
        image: "/certificates/logos/sololearn.webp",
        certificate: "/certificates/sololearn-sql.pdf",
        credential: "https://www.sololearn.com/certificates/CC-HD1IVJ3N"
    },

    {
        title: "Prompt Engineering",
        issuer: "Sololearn",
        image: "/certificates/logos/sololearn.webp",
        certificate: "/certificates/sololearn-prompt-engineering.pdf",
        credential: "https://www.sololearn.com/certificates/CC-T57DRW7M"
    }

];

export default function Certificates() {

    return (

        <section
            id="certificates"
            className="certificates"
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

                        Certifications

                    </span>

                    <h2>

                        Certificates

                    </h2>

                    <p>
                        A collection of professional certificates and completed courses
                        that demonstrate my continuous development across software
                        engineering, full-stack development, and modern technologies.
                    </p>

                </motion.div>

                <motion.div
                    className="certificates-grid"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: .2
                    }}
                >

                    {

                        certificates.map((certificate) => (

                            <motion.article

                                key={certificate.title}

                                className="certificate-card"

                                variants={fadeUp}

                                whileHover={{
                                    y: -8,
                                    scale: 1.015
                                }}

                            >

                                <div className="certificate-logo">

                                    {

                                        certificate.image ?

                                        <img
                                            src={certificate.image}
                                            alt={certificate.issuer}
                                            className={`certificate-logo-image ${certificate.issuer.toLowerCase()}`}
                                        />

                                            :

                                            <FiAward />

                                    }

                                </div>

                                <div className="certificate-content">

                                    <span className="certificate-issuer">

                                        {certificate.issuer}

                                    </span>

                                    <h3>

                                        {certificate.title}

                                    </h3>

                                    <div className="certificate-actions">

                                        {certificate.certificate && (
                                            <a
                                                href={certificate.certificate}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="certificate-view"
                                            >
                                                <FiAward />
                                                View Certificate
                                            </a>
                                        )}

                                        {certificate.credential && (
                                            <a
                                                href={certificate.credential}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="certificate-verify"
                                            >
                                                <FiExternalLink />
                                                Verify Credential
                                            </a>
                                        )}

                                    </div>

                                </div>

                            </motion.article>

                        ))

                    }

                </motion.div>

            </div>

        </section>

    );

}