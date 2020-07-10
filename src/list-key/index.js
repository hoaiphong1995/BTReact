import React, { Component } from 'react'

export default class ListKey extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listProduct: [
                { id: 1, name: "Iphone X", price: 15 },
                { id: 2, name: "Iphone 8", price: 6 },
                { id: 3, name: "Iphone ProMax", price: 20 },
                { id: 4, name: "Iphone XPro", price: 30 }
            ],
        }
    }

    renderTable = () => {
        const { listProduct } = this.state;
        return listProduct.map((product) => {
            return (
                <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                </tr>
            );
        });
    }
    render() {
        return (
            <div>
                <h3 className="title">* ListKeys</h3>
                <table className="table">
                    <thead>
                        <tr >
                            <th>Id</th>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}
