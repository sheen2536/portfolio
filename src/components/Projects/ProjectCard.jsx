import PropTypes from "prop-types";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({ project }) => {
  const { imageSrc, title, description, skills, github_link } = project;

  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
        <a href={github_link} className={styles.link}>
          Github-Link
        </a>
      </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    imageSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    github_link: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
