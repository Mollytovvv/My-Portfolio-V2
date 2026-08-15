import "../styles/navbar.css";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
    FiMoon,
    FiSun,
    FiMenu,
    FiX
} from "react-icons/fi";

import { useTheme } from "../context/ThemeContext";


const navLinks = [
    {
        name: "Home",
        id: "hero"
    },
    {
        name: "Projects",
        id: "projects"
    },
    {
        name: "Tech Stack",
        id: "skills"
    },
    {
        name: "Certificates",
        id: "certificates"
    },
    {
        name: "Contact",
        id: "contact"
    }
];


export default function Navbar() {

    const [activeSection, setActiveSection] = useState("hero");
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);


    const { theme, toggleTheme } = useTheme();


    useEffect(() => {

        const handleScroll = () => {

            setScrolled(window.scrollY > 40);


            const scrollPosition = window.scrollY + 180;


            navLinks.forEach(({ id }) => {

                const section = document.getElementById(id);

                if (!section) return;


                const top = section.offsetTop;
                const bottom = top + section.offsetHeight;


                if (
                    scrollPosition >= top &&
                    scrollPosition < bottom
                ) {

                    setActiveSection(id);

                }

            });

        };


        window.addEventListener(
            "scroll",
            handleScroll
        );


        handleScroll();


        return () =>
            window.removeEventListener(
                "scroll",
                handleScroll
            );


    }, []);



    const handleClick = (e, id) => {

        e.preventDefault();


        const section = document.getElementById(id);


        if (!section) return;


        window.scrollTo({

            top: section.offsetTop - 90,

            behavior:"smooth"

        });


        setMenuOpen(false);

    };



    return (

        <header className={`navbar ${scrolled ? "scrolled" : ""}`}>


            <motion.nav

                className="navbar-wrapper"

                initial={{
                    y:-60,
                    opacity:0
                }}

                animate={{
                    y:0,
                    opacity:1
                }}

                transition={{
                    duration:.7,
                    ease:"easeOut"
                }}

            >

                {/* NAV LINKS */}

                <ul className={menuOpen ? "open" : ""}>


                    {
                        navLinks.map((link)=>(

                            <li key={link.id}>


                                <a

                                    href={`#${link.id}`}

                                    onClick={(e)=>
                                        handleClick(e,link.id)
                                    }

                                    className={
                                        activeSection === link.id
                                            ? "active"
                                            :""
                                    }

                                >


                                    {
                                        activeSection === link.id && (

                                            <motion.span

                                                layoutId="navbar-pill"

                                                className="navbar-pill"

                                                transition={{

                                                    type:"spring",

                                                    stiffness:500,

                                                    damping:35

                                                }}

                                            />

                                        )
                                    }



                                    <span className="navbar-label">

                                        {link.name}

                                    </span>


                                </a>


                            </li>

                        ))
                    }


                </ul>



                {/* ACTIONS */}

                <div className="navbar-actions">


                    <button

                        className="menu-toggle"

                        onClick={() =>
                            setMenuOpen(!menuOpen)
                        }

                        aria-label="Toggle Menu"

                    >

                        {
                            menuOpen

                            ? <FiX />

                            : <FiMenu />

                        }


                    </button>



                    <button

                        className="theme-toggle"

                        onClick={toggleTheme}

                        aria-label="Toggle Theme"

                    >

                        {

                            theme === "dark"

                            ? <FiSun />

                            : <FiMoon />

                        }


                    </button>


                </div>



            </motion.nav>


        </header>

    );

}