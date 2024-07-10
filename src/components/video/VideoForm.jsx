import { useEffect, useState } from "react";

import styles from "./VideoForm.module.css";
import Input from "../Form/Input";
import Select from "../Form/Select";
import SubmitButton from "../Form/SubmitButton";
import ClearButton from "../Form/ClearButton";

const VideoForm = ({ handleSubmit, btnText, videoData, btnText2, Limpar }) => {
  const [categories, setCategories] = useState([]);
  const [video, setVideo] = useState(videoData || {});

  //GET VIDEOS
  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const submit = (e) => {
    e.preventDefault();
    if (!video.category || !video.category.id) {
      alert("Por favor, selecione uma categoria.");
      return;
    }
    handleSubmit(video);
  };

  function handleChange(e) {
    setVideo({ ...video, [e.target.name]: e.target.value });
  }

  function handleCategory(e) {
    setVideo({
      ...video,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  const clearForm = () => {
    setVideo({
      title: "",
      img: "",
      desc: "",
      url: "",
      category: { id: "", name: "" },
    });
  };

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        text={"Titulo"}
        name={"title"}
        placeholder={"Insira o titulo do video"}
        handleOnChange={handleChange}
        value={video.title || ""}
      />
      <Input
        text={"URL Imagem"}
        name={"img"}
        placeholder={"Insira a imagem do video"}
        handleOnChange={handleChange}
        value={video.img || ""}
      />
      <Input
        text={"Descrição"}
        name={"desc"}
        placeholder={"Insira a descrição do video"}
        handleOnChange={handleChange}
        value={video.desc || ""}
      />
      <Input
        text={"URL do Video"}
        name={"url"}
        placeholder={"Insira a URL do video"}
        handleOnChange={handleChange}
        value={video.url || ""}
      />
      <Select
        name={"category_id"}
        text={"Selecione a Categoria"}
        options={categories}
        handleOnChange={handleCategory}
        value={video.category ? video.category.id : ""}
      />
      <div className={styles.buttons}>
        <SubmitButton text={btnText} />
        <ClearButton text2={btnText2} Limpar={clearForm} />
      </div>
    </form>
  );
};

export default VideoForm;
