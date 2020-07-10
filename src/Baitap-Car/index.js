import React, { Component } from 'react'

export default class BaitapCar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: "./img/imgRedCar.jpg"
        }
    }
    changeColor = (color) => {
        let img = "";
        switch (color) {
            case "red":
                img = "./img/imgRedCar.jpg";
                break;
            case "silver":
                img = "./img/imgSilverCar.jpg";
                break;
            default:
            case "black":
                img = "./img/imgBlackCar.jpg";
                break;
        }
        this.setState({
            img
        });
    }


    render() {
        return (
            <div className="container">
                <h3 className="title">* Car</h3>
                <div className="row">
                    <div className="col-sm-6">
                        <img className="img-fluid" src={this.state.img} />
                    </div>
                    <div className="col-sm-6">
                        <button className="btn btn-danger m-2" onClick={() => this.changeColor("red")}>Red Color</button>
                        <button className="btn btn-light m-2" onClick={() => this.changeColor("silver")} >Silver Color</button>
                        <button className="btn btn-dark m-2" onClick={() => this.changeColor("black")}>Black Color</button>
                    </div>
                </div>
            </div>
        )
    }

}

