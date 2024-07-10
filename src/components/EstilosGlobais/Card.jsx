import React from "react";
import styles from "./Card.module.css";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const Card = ({
  id,
  imageSrc,
  title,
  description,
  youtubeUrl,
  onEdit,
  handleRemove,
  category,
}) => {
  const handleCardClick = (e) => {
    if (e.target.closest(`.${styles.icon}`)) {
      return;
    }
    window.open(youtubeUrl, "_blank");
  };

  const remove = (e) => {
    e.preventDefault();
    handleRemove(id);
  };

  return (
    <div
      className={`${styles[category.toLowerCase()]}`}
      onClick={handleCardClick}
    >
      <img className={styles.image} src={imageSrc} alt={title} />
      <div className={styles.actions}>
        <div
          className={styles.icon}
          onClick={() =>
            onEdit({ id, imageSrc, title, description, youtubeUrl, category })
          }
        >
          <FaEdit />
          <h3>EDITAR</h3>
        </div>
        <div className={styles.icon} onClick={remove}>
          <h3>DELETAR</h3>
          <FaTrashAlt />
        </div>
      </div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Card;
