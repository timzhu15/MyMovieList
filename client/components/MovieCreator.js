import React, { useReducer } from 'react';
import { Routes, Link, useNavigate } from 'react-router-dom';

import AddMovie from './AddMovie'
import MovieList from './MovieList'

export default function MovieCreator() {
    const [addMovie, dispatch] = useReducer(movieListReducer, initialState)

    function addNewMovie(title) {
        dispatch({
            type: 'add',
            payload: {
                id: nextID++,
                title: title,
            }
        })
    }

    function deleteMovie(movieID){
        dispatch({
            type: 'delete',
            payload: {
                id: movieID
            }
        })
    }

    function reviewMovie(movie){
        console.log(movie)
        dispatch({
            type: 'review',
            payload: {
                id: movie.id,
                movieName: movie.movieName
            }
        })
    }

    function movieListReducer(state, action) {
        switch (action.type) {
            case 'add': {
                console.log(state)
                return [
                    ...state,
                    {
                        id: action.payload.id,
                        movieName: action.payload.title,
                        review: ''
                    }
                ];
            }
            case 'delete': {
                // console.log('we are here deleting')
                return state.filter((movie) => movie.id !== action.payload.id);
            }
            case 'review': {
                console.log('we are reviewing')
                return state.map((movie) => {
                    if (movie.id === action.payload.id) {
                        console.log('even better, we are in the if statement')
                        return action.payload;
                    } else {
                         return movie;
                    }
                  });
            }
            default: {
                return state;
            }
        };
    }

    return( 
        <div id="movieCreatorDiv">
            <AddMovie addNewMovie={addNewMovie}/>
            <MovieList addMovie={addMovie} deleteMovie={deleteMovie} reviewMovie={reviewMovie}/>
        </div>
    );
};

let nextID = 1;
const initialState = [];