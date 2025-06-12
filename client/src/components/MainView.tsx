import Header from "./semantic/Header";
import Footer from "./semantic/Footer";
import MainBody from "./semantic/MainBody";
import '../css/semantic.css'

function MainView() {
    return (
        <>
            <section className="mainView">
                <Header />
                <MainBody />
                <Footer />
            </section>
        </>
    )
}

export default MainView