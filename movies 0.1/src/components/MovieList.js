import React from 'react';
import Movie from './Movie.js';
import * as ReactBootstrap from 'react-bootstrap';

const MovieList = (props) => {
    return (
        <ReactBootstrap.Container>
            <ReactBootstrap.Row className="justify-content-md-center">
                {
                    props.movies.map((movie, i) => {
                        //return a movie component for every movie object we map through from the movie prop
                        return (
                            <Movie key={i} title={movie.title} date={movie.realse_date} overview={movie.overview} image={movie.poster_path} />
                        )
                    })
                }
            </ReactBootstrap.Row>
        </ReactBootstrap.Container>
    )
}
export default MovieList;