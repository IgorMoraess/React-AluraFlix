import { useNavigate } from "react-router-dom";
import styles from "./NewVideo.module.css";
import VideoForm from "../video/VideoForm";
import { useEffect, useState } from "react";

const NewVideo = () => {

  const navigate = useNavigate();

  function createVideo(video) {
    fetch("http://localhost:5000/videos", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(video),
    })
      .then((resp) => resp.json())
      .then((data) => {
        // redirect
        navigate("/", {
          state: { message: "Video criado com sucesso!" },
        });
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.newproject_container}>
      <h1>NOVO VÍDEO</h1>
      <p>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO.</p>
      <VideoForm
        handleSubmit={createVideo}
        btnText="Criar Video"
        btnText2="Limpar"
      />
    </div>
  );
};

export default NewVideo;
