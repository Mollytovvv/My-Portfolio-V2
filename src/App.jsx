import Navbar from "./components/navbar";

import Hero from "./sections/hero";
import About from "./sections/about";
import Projects from "./sections/projects";
import Skills from "./sections/skills";
import Certificates from "./sections/certificates";
import Contacts from "./sections/contacts";

function App() {

    return (

        <>

            <Navbar />

            <main>

                <Hero />

                <Projects />

                <Skills />

                <Certificates />

                <Contacts />

            </main>

        </>

    );

}

export default App;