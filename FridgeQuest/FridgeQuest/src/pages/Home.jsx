import '../App.css'
import Navbar from "../components/Navbar.jsx";
import RedirectSection from "../components/RedirectSection.jsx";
import InfoSection from "../components/InfoSection.jsx";
import Footer from "../components/Footer.jsx";
function Home() {

    return (
        <>
            <Navbar/>
            <RedirectSection/>
            <InfoSection/>
            <Footer/>
        </>
    )
}

export default Home;
