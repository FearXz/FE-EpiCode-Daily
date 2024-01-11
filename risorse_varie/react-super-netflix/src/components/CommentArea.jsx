import React, { useEffect, useState } from "react";
import { ListGroup, Spinner } from "react-bootstrap";
import Comment from "./Comment";
import Error from "./Error";

function CommentArea(props) {
  const [arrayOfComment, setArrayOfComment] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  function timerError() {
    setHasError(true);
    setTimeout(() => {
      setHasError(false);
    }, 2500);
  }

  async function fetchAllComment(movie) {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + movie.imdbID, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0NTMwZWI1MjViYjAwMThlZDA4NWQiLCJpYXQiOjE3MDQ3MjM0MjUsImV4cCI6MTcwNTkzMzAyNX0.Hu_OirLz5GCraWSzSmR2dYEgx8UHmfuHMTX3YwMgjlQ",
        },
      });

      if (response.ok) {
        const arrayCommentObj = await response.json();
        console.log(arrayCommentObj);
        setArrayOfComment(arrayCommentObj);
      } else {
        console.error(`Errore durante il caricamento dei commenti: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleDeleteComment(commentId) {
    try {
      setIsLoading(true);
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + commentId, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0NTMwZWI1MjViYjAwMThlZDA4NWQiLCJpYXQiOjE3MDQ3MjM0MjUsImV4cCI6MTcwNTkzMzAyNX0.Hu_OirLz5GCraWSzSmR2dYEgx8UHmfuHMTX3YwMgjlQ",
        },
      });

      if (response.ok) {
        console.log(`Commento con ID ${commentId} cancellato con successo.`);

        fetchAllComment(props.movie);
      } else {
        timerError();
        console.error(`Errore durante la cancellazione del commento: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.error("Si è verificato un errore durante la cancellazione del commento:", error);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    console.log("sono come un  componentDidMount");
    fetchAllComment(props.movie);
  }, []);

  useEffect(() => {
    fetchAllComment(props.movie);
  }, [props.update]);

  return (
    <>
      {isLoading && <Spinner />}
      {hasError && <Error color="danger" error="Errore durante il caricamento dei commenti" />}
      <ListGroup>
        {arrayOfComment.map((comment) => (
          <Comment key={comment._id} comment={comment} handleDeleteComment={handleDeleteComment} />
        ))}
      </ListGroup>
    </>
  );
}
export default CommentArea;
