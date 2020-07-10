import React, { Component } from 'react'

export default class HandlingEvent extends Component {
    handleOnclick = () => {
        console.log(12587)
    }
    handleOnclickParams = (name, age) => {
        console.log("Hello " + name + " Tuoi: " + age)
    }
    render() {
        return (
            <div>
                <h2 className="title">*HandlingEvent</h2>
                <button className="btn btn-success" onClick={this.handleOnclick}>Handling Event</button>
                <button className="btn btn-info" onClick={() => { this.handleOnclickParams("Phong", "25") }}>HandlingEvent Params</button>
            </div>
        )
    }
}
