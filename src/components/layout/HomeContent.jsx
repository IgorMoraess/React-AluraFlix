import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./HomeContent.module.css";
import Button from "./Button";
import Card from "../EstilosGlobais/Card";
import Message from "./Message";
import Loading from "../layout/Loading";
import Modal from "../EstilosGlobais/Modal";
import Container from "./Container";
import VideoForm from "../video/VideoForm";

function HomeContent() {
  const [videos, setVideos] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [videoMessage, setVideoMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const handleEdit = (video) => {
    setCurrentVideo(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideo(null);
  };

  // Atualizar o vídeo 'PATCH'
  const editPost = (updatedVideo) => {
    fetch(`http://localhost:5000/videos/${updatedVideo.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedVideo),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setVideos(videos.map((video) => (video.id === data.id ? data : video)));
        setIsModalOpen(false);
        setVideoMessage("Video atualizado com sucesso!");
      })
      .catch((err) => console.log(err));
  };

  // Deletar o vídeo 'DELETE'
  const removeVideo = (id) => {
    fetch(`http://localhost:5000/videos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then(() => {
        setVideos(videos.filter((video) => video.id !== id));
        setVideoMessage("Video removido com sucesso!");
      })
      .catch((err) => console.log(err));
  };

  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  // Carregar os vídeos 'GET'
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:5000/videos", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setVideos(data);
          setRemoveLoading(true);
        })
        .catch((err) => console.log(err));
    }, 500);
  }, []);

  return (
    <>
      {message && <Message type="success" msg={message} />}
      {videoMessage && <Message type="success" msg={videoMessage} />}

      <section>
        <Button customClass="btfront">FRONT END</Button>
        {/* FRONT END */}
        <div className={styles.home_content}>
          {videos.length > 0 &&
            videos.map(
              (video) =>
                video.category.name === "FRONT-END" && (
                  <Card
                    id={video.id}
                    key={video.id}
                    description={video.desc}
                    imageSrc={video.img}
                    title={video.title}
                    youtubeUrl={video.url}
                    category={video.category.name}
                    handleRemove={removeVideo}
                    onEdit={() => handleEdit(video)}
                  />
                )
            )}
          {!removeLoading && <Loading />}
          {removeLoading &&
            videos.filter((video) => video.category.name === "FRONT-END")
              .length === 0 && <p>Não há vídeos cadastrados!</p>}
        </div>
        <Button customClass="btback">BACK END</Button>
        {/* BACK END */}
        <div className={styles.home_content}>
          {videos.length > 0 &&
            videos.map(
              (video) =>
                video.category.name === "BACK-END" && (
                  <Card
                    id={video.id}
                    key={video.id}
                    description={video.desc}
                    imageSrc={video.img}
                    title={video.title}
                    youtubeUrl={video.url}
                    category={video.category.name}
                    handleRemove={removeVideo}
                    onEdit={() => handleEdit(video)}
                  />
                )
            )}
          {!removeLoading && <Loading />}
          {removeLoading &&
            videos.filter((video) => video.category.name === "BACK-END")
              .length === 0 && <p>Não há vídeos cadastrados!</p>}
        </div>

        <Button customClass="btmobile">MOBILE</Button>
        {/* MOBILE */}
        <div className={styles.home_content}>
          {videos.length > 0 &&
            videos.map(
              (video) =>
                video.category.name === "MOBILE" && (
                  <Card
                    id={video.id}
                    key={video.id}
                    description={video.desc}
                    imageSrc={video.img}
                    title={video.title}
                    youtubeUrl={video.url}
                    category={video.category.name}
                    handleRemove={removeVideo}
                    onEdit={() => handleEdit(video)}
                  />
                )
            )}
          {!removeLoading && <Loading />}
          {removeLoading &&
            videos.filter((video) => video.category.name === "MOBILE")
              .length === 0 && <p>Não há vídeos cadastrados!</p>}
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Container customClass="column">
          <div className={styles.project_info}>
            <h1>Editar Card:</h1>
            <VideoForm
              handleSubmit={editPost}
              btnText="Concluir edição"
              videoData={currentVideo}
            />
          </div>
        </Container>
      </Modal>
    </>
  );
}

export default HomeContent;
