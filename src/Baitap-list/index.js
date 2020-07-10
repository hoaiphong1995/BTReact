import React, { Component } from 'react'
import data from "./data.json"

export default class Baitaplist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listMovie: data
        };
    }
    renderHTML = () => {
        /**
         * Duyet mang
         * Tra ve card-bootstrap
         * renderingElment show title
         */
        const { listMovie } = this.state
        return listMovie.map(movie => {
            return (
                <div className="col-md-4 mb-5 " key={movie.maPhim}>
                    <div className="card " >
                        <img className="card-img-top"
                            src={movie.hinhAnh} height={500}
                            alt="" />
                        <div className="card-body text__movie" >
                            <h2 className="card-title">{movie.tenPhim} </h2>
                            <p className="card-text">{movie.moTa}</p>
                        </div>
                    </div>
                </div >

            )
        })
    }
    render() {

        return (
            <div>
                <h3 className="title">* State</h3>
                <div className="row container-fluid " >
                    {this.renderHTML()}
                </div>
            </div>
        )
    }
}
