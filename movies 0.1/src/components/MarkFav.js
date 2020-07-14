import React from 'react';
import axios from 'axios';

class MarkFav extends Components {
    constructor(props) {
        super(props)

        this.state = {
             account_id: null,
             session_id: null
        }
    }

    componentDidMount() {
        axios.post(`https://api.themoviedb.org/????`, this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
            //generic error msg
            this.setState({error: 'Error: 500 Internal Server Error'})
        })
    }

    render () {
        return (
            <div></div>
        )
    }
}
export default MarkFav;