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
      fileURL: null,
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
      fileURL: null,
    },
    {
      id: "3",
      name: "James",
      company: "Samsung",
      theme: "colorful",
      title: "Software Enginner",
      email: "hmj0818@gmail.com",
      message: "I can do anything!",
      fileName: "James",
      fileURL: null,
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

  const addCard = (card) => {
    const updated = [...cards, card];
    setCards(updated);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
