import React, { useState } from "react";

import Card from "./UI/Card";
import Movies from "./Components/Movies/Movies";

import styles from "./App.module.css";
import AddMovie from "./Components/AddMovie/AddMovie";

function App() {
  const [movies, setMovies] = useState([]);

  const fetchMoviesHandler = async () => {
    
    const response = await fetch('https://henriquemazzoleni-starwars-api-default-rtdb.europe-west1.firebasedatabase.app/movies.json')
    const data = await response.json()

    let loadedMovies = []

    for (const key in data) {
      loadedMovies.push({
        id: key,
        title: data[key].title,
        opening_crawl: data[key].description,
      })
    }
    setMovies(loadedMovies)
  }

  const addMovieHandler = async (movie) => {
    await fetch('https://henriquemazzoleni-starwars-api-default-rtdb.europe-west1.firebasedatabase.app/movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
  
  return (
    <div className={styles.App}>
      <Card className={styles.card}>
        <AddMovie onAddMovie={addMovieHandler} />
      </Card>
      <Card className={styles.card}>
        <button onClick={fetchMoviesHandler} className={styles.button}>Fetch movies</button>
      </Card>
      <Card className={styles.card}>
        <Movies moviesList={movies} />
      </Card>
    </div>
  );
}

export default App;
