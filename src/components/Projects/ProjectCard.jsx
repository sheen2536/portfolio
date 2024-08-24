import PropTypes from "prop-types";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ project }) => {
  const {title, description, skills, github_link } = project;

  return (
    <div className={styles.container}>
     
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
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    github_link: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
