// rcc
import React, { Component } from 'react'

export default class RenderingElement extends Component {
    username = "Cyderfoft";
    lop = "FE42";

    renderInfo = () => {
        // Viết một hàm trả về HTML bắt buộc phải có return
        return <p>Usernaem: {this.username}- lop:{this.lop}</p>
    }
    render() {
        return (
            <div>
                <h3 className="title">*RenderingElement</h3>
                {/* Cách 1
                <p>Udername: {this.username}</p>
                <p>Lop: {this.lop}</p> */}
                {this.renderInfo()}
            </div>
        )
    }
}
