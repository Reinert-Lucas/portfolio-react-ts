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
    const CACHE_KEY = "proyectos_cache";
    const CACHE_TIME_KEY = "proyectos_cache_time";
    const CACHE_DURATION = 7 * 24 * 60 * 60 * 1000; // 7 días

    useEffect(() => {
        const now = Date.now();
        const cachedData = localStorage.getItem(CACHE_KEY);
        const cachedTime = parseInt(localStorage.getItem(CACHE_TIME_KEY) || "0");

        if (cachedData && now - cachedTime < CACHE_DURATION) {
            setProyectos(JSON.parse(cachedData)); // Cargar datos desde el caché
        } else {
            fetch("https://portfolio-react-gerp.onrender.com/api/data")
                .then((res) => res.json())
                .then((data) => {
                    setProyectos(data.response); // Actualizar el estado con los datos obtenidos
                    localStorage.setItem(CACHE_KEY, JSON.stringify(data.response)); // Guardar en caché
                    localStorage.setItem(CACHE_TIME_KEY, now.toString()); // Guardar el tiempo de caché
                })
                .catch((err) => console.error("Error: " + err));
        }
    }, []);

    return (
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
