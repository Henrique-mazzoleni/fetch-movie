import React from "react";
import Card from "../../UI/Card";

import styles from "./Movie.module.css";

const Movie = (props) => (
  <li>
    <Card className={styles.movie}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </Card>
  </li>
);

export default Movie;
