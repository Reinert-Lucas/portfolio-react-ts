import '../../css/body.css';

function AboutMe() {
    return (
        <>
            <h3 className='title'>Hola, mi nombre es Lucas y soy Desarrollador Web</h3>
            <img src="/imgs/avatar.jpg" alt="miAvatar" className='avatar' />
            <p className='desc'>
                Actualmente tengo 19 años y estoy cursando una Tec. Sup. en Desarrollo de Aplicaciones y Páginas Web
            </p>
            <h3 className='langsTitle'>Tecnologías que Manejo Actualmente</h3>
            <section className='langsCont'>
                <article className='langsArt'>
                    <h4>Front-End</h4>
                    <ul>
                        <li>Bootstrap</li>
                        <li>ReactJs</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                    </ul>
                </article>
                <article className='langsArt'>
                    <h4>Back-End</h4>
                    <ul>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>ExpressJs</li>
                        <li>NodeJs</li>
                    </ul>
                </article>
            </section>
            <h3 className='langsTitle'>Mis Proyectos</h3>
        </>
    );
}

export default AboutMe;
