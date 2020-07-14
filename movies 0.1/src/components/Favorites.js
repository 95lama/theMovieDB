import React from 'react';
import axios from 'axios';
import Movie from './Movie.js';
import * as ReactBootstrap from 'react-bootstrap';


class Favorites extends Components {
    //setup constructor with a state proprty to store list of posts
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            error: ""
        }
    }

    //use axios to make a GET request to the json file from tmdb api
    //this is to retrive the movies marked as favorites based on account id
    //inside of componentDidMount to be only excuted once during the component's lifetime
    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/account/${account_id}/favorite/tv?api_key=e6a729c3e9d4206fc5dd7ceefe809a10&language=en-US&sort_by=created_at.asc&page=1`)
        .then(response => {
            console.log(response)
            this.setState({posts: response.data})
        })
        .catch(error => {
            console.log(error)
            //error msg for unauthorized based on cheat sheet provided by eng. Ahmed
            this.setState({error: 'Error: 401 Unauthorized'})
        })
    }

    render () {
        const {posts, error} = this.state
        return (
            <ReactBootstrap.Container>
            <ReactBootstrap.Row className="justify-content-md-center">
                {
                    posts.map((posts, i) => {
                        return (
                            <Movie key={i} title={movie.title} date={movie.realse_date} overview={movie.overview} image={movie.poster_path} />
                        )
                        {error ? <div>{error} </div> : null}
                    })
                }
            </ReactBootstrap.Row>
        </ReactBootstrap.Container>
        )
    }
}
export default Favorites;