import React, { useEffect, useRef } from "react";

import styles from "./AddMovie.module.css";

const AddMovie = (props) => {
  const title = useRef();
  const description = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      title.current.focus()
    }, 200)

    return () => {clearTimeout(timer)}
  },[])

  const submitMovieHandler = (e) => {
    e.preventDefault();
    props.onAddMovie({
      title: title.current.value,
      description: description.current.value,
    });
    title.current.value = "";
    description.current.value = "";
    title.current.focus()
  };

  return (
    <form className={styles.form} onSubmit={submitMovieHandler}>
      <h2>Add a Movie</h2>
      <div className={styles.input}>
        <label htmlFor="title">Title</label>
        <input ref={title} id="title" type="text" />
      </div>
      <div className={styles.input}>
        <label htmlFor="description">Short Destription</label>
        <input ref={description} id="description" type="text" />
      </div>
      <button type="submit" className={styles.button}>Add</button>
    </form>
  );
};

export default AddMovie;
