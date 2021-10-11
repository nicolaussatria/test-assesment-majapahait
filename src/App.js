import logo from "./logo.svg";
import Card from "react-bootstrap/Card";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setCards(res.data);
      console.log(res.data);
    };
    fetchCards();
  }, [cards]);

  return (
    <>
      <section>
        {cards.map((card) => {
          const { userId, id, title, body } = card;
          return (
            <ul>
              <Card border="primary" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{body}</Card.Text>
                </Card.Body>
              </Card>
            </ul>
          );
        })}
      </section>
    </>
  );
}
