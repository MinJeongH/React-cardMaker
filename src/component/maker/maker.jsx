import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "Minn",
      company: "None",
      theme: "light",
      title: "Software Enginner",
      email: "gkaalswjd2@gmail.com",
      message: "I can do it!",
      fileName: "Minn",
      fileURL: "Minn.png",
    },
    {
      id: "2",
      name: "Hyuk",
      company: "Kakao VX",
      theme: "dark",
      title: "Software Enginner",
      email: "nalnez13@gmail.com",
      message: "Everything well",
      fileName: "Han",
      fileURL: "Han.png",
    },
    {
      id: "3",
      name: "James",
      company: "Samsung",
      theme: "light",
      title: "Software Enginner",
      email: "hmj0818@gmail.com",
      message: "I can do anything!",
      fileName: "James",
      fileURL: "James.png",
    },
  ]);
  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
