import React from "react";

import Movie from "./Movie";

import styles from './Movies.module.css';

const Movies = props => {
    const displayList = props.moviesList.map(movie => <Movie key={movie.id} id={movie.id} title={movie.title} description={movie.opening_crawl} />)

    return <div className={styles.movies}>{displayList}</div>
};

export default Movies;