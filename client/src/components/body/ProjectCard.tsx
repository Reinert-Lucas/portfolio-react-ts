import '../../css/projectCard.css';

interface ProjectCardProps {
  id: number;
  title: string;
  descripcion: string;
  img_link: string;
  git: string;
  extra: string;
}

function ProjectCard({ id, title, descripcion, img_link, git, extra }: ProjectCardProps) {
  return (
    <>
      <div className="projectCard" id={id.toString()}>
        <h3 className="projectTitle">{title}</h3>
        <img src={img_link} alt={`Captura de ${title}`} className="projectImg" loading="lazy" />
        <p className="projectDesc">{descripcion}</p>
        <div className="projectLinks">
          <a href={git} target="_blank" rel="noopener noreferrer">Repositorio de GitHub</a> <br />
          {
            extra !== "no" ? (
              <a href={extra} target="_blank" rel="noopener noreferrer">{extra}</a>
            ) : (
              <a href="empty"></a>
            )
          }
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
