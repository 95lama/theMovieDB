import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';

const Movie = (props) => {
    return (
        <ReactBootstrap.Card style={{ width: '18rem', color: '#ccccc' }}>
            <ReactBootstrap.Card.Img variant="top" src={`http://image.tmdb.org/t/p/w185${props.image}`} />
            <ReactBootstrap.Card.Body >
                <ReactBootstrap.Card.Title>{props.title}</ReactBootstrap.Card.Title>
                <ReactBootstrap.Card.Text>
                    <p>{props.overview}</p>
                    <p>{props.date}</p>
                </ReactBootstrap.Card.Text>
            </ReactBootstrap.Card.Body>
        </ReactBootstrap.Card>
    )
}
export default Movie;