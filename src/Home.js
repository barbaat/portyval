import Clients from './components/Clients';
import Head from './components/Head';
import Intro from './components/Intro';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';


const Home = () => {
    return (
        <>
            <Head />
            <Intro />
            <Services />
            <Clients />
            <Gallery />
            <Contact />
        </>

    )
}

export default Home;

