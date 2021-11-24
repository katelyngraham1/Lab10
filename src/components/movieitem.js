import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class MovieItem extends Component {
    constructor(){
        super();
        this.DeleteMovie = this.DeleteMovie.bind(this);
    }

    // calling delete movie method
    DeleteMovie(){
        console.log("Delete: " + this.props.movie._id);

        axios.delete('http://localhost:4000/api/movies/' + this.props.movie._id)
        .then(()=>{
            this.props.ReloadData();
        })
        .catch();
        
    }


    render() {
        return (
            <div>
                {/* card components from bootstrap  */}
                <Card>
                    <Card.Header>{this.props.movie.Title}</Card.Header>
                    <Card.Body>
                        <blockquote>
                            <img src={this.props.movie.Poster}></img>
                            <footer>
                                {this.props.movie.Year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                {/* Link to edit */}
                <Link to={"/edit/" +this.props.movie._id} className="btn btn-info">Edit</Link>
                {/* Delete Button */}
                <Button variant="danger" onClick={this.DeleteMovie}>Delete</Button>
                </Card>
            </div>
        );
    }
}
export default MovieItem;