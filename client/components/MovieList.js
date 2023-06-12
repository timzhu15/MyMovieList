import React, { useState } from 'react';
import { Routes, Link, useNavigate } from 'react-router-dom';

export default function MovieList ({addMovie, deleteMovie, reviewMovie}) {
    return(
        <div id="movieList">
            <ul>
                {addMovie.map((movie) => (
                    <li key={addMovie.id} className="movieListItems">
                        <Movie movie={movie} deleteMovieAction={deleteMovie} reviewMovieAction={reviewMovie}/>
                        {/* {movie.movieName} */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

function Movie({movie, deleteMovieAction, reviewMovieAction}) {
    const [reviewAdd, setReview] = useState(false);
    let reviewContent;
    if(reviewAdd) {
        reviewContent = (
            <>
                <div id="reviewDiv">
                    {console.log("false!")}
                    {movie.movieName}
                    <textarea id="reviewInput"
                        placeholder = {"What'd you think?"}
                        value={movie.review}
                        onChange={(e) => {
                            reviewMovieAction({
                            ...movie,
                            review: e.target.value,
                            });
                        }}
                    />
                    <button id="reviewButtonPost">Save</button>
                    <button onClick={() => deleteMovieFetch()} id="deleteButton">Delete</button>
                </div>
            </>
        );
    } else {
        reviewContent = (
            <>
                {console.log("true")}
                {movie.movieName}
                <button onClick={() => setReview(true)} id={"reviewButton"}>Review</button>
                <button onClick={() => deleteMovieFetch()} id="deleteButton">Delete</button>
            </>
        );
    };

    function deleteMovieFetch() {
        deleteMovieAction(movie.id)
        let body = {
          movieName: movie.movieName
        }
        fetch('/create', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'Application/JSON'
          },
          body: JSON.stringify(body)
        })
        //   .then(resp => resp.json())
        //   .then(data => {
        //     console.log(data);
        //   })
          // .then(() => {
          //   props.history.push('/');
          // })
        .catch(err => console.log(err));
      }
    return (
        <label>
            {/* <button onClick={() => reviewMovie(movie)} id="reviewButton">Review</button> */}
            {reviewContent}
            {/* <button onClick={() => deleteMovieFetch()} id="deleteButton">Delete</button> */}
            {/* <button id="Review">Review</button> */}
            {/* <div>
                Howdy
            </div> */}
        </label>
    );
  }