import React, {useState} from 'react';

export default function AddTask({addNewMovie}) {
  const [title, setTitle] = useState('');

  function saveMovie() {
    setTitle('')
    addNewMovie(title)
    let body = {
      title: title
    }
    fetch('/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify(body)
    })
      // .then(resp => resp.json())
      // .then(data => {
      //   console.log(data);
      // })
      // .then(() => {
      //   props.history.push('/');
      // })
      .catch(err => console.log(err));
  }

  return (
    <div>
        <input id="addMovieInputs"
          placeholder = "What's the movie?"
          value = {title}
          onChange = {(e) => setTitle(e.target.value)}
        />
        <button onClick={saveMovie} id="addMovieButton">
          Add Movie
        </button>
    </div>
  );
}