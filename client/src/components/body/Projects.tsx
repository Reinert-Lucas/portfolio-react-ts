import { useState, useEffect } from "react"
import ProjectCard from "./ProjectCard";

type Proyecto = {
    id: number;
    title: string;
    descripcion: string;
    img_link: string;
    git: string;
    extra: string;
};

function Projects() {
    const [proyectos, setProyectos] = useState<Proyecto[]>([]);

    useEffect(() => {
        fetch('https://portfolio-react-gerp.onrender.com/api/datos')
        .then(res => res.json())
        .then(data => setProyectos(data.response))
        .catch(err => console.error("Error: " + err));
    }, []);

    return(
        <>
            <section className="projects">
                {
                    proyectos.length === 0 ? (
                        <p>Cargando Proyectos...</p>
                    ) : (
                        proyectos.map((proyecto: Proyecto) => (
                            <ProjectCard
                                key={proyecto.id}
                                id={proyecto.id}
                                title={proyecto.title}
                                descripcion={proyecto.descripcion}
                                img_link={proyecto.img_link}
                                git={proyecto.git}
                                extra={proyecto.extra}
                            />
                        ))
                    )
                }
            </section>
        </>
    )
}

export default Projects