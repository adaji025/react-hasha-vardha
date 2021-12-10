import React, { Component } from "react";
import { FaTimes } from 'react-icons/fa';

export default class Product extends Component {

    constructor(props) {
        super(props)

        console.log("Constructor -product")

         this.state = {
        prod: this.props.product
    }
    }

   
    componentWillUnmount() {
        console.log("componentWillUnmount -Product")
    }

    componentDidMount() {
        console.log("componentDidMount -product")
    }
    componentDidUpdate() {
        console.log("componentDidUpdate -product")
    }
    render() {
        // console.log(this.props)
        console.log("Render -product")
        return (
            <div className="col-md-6">
                <div className="card my-2">
                    <div className="card-body">
                        <div className="text-muted">
                            #{this.state.prod.id}
                            <span className="float-end hand-icon" onClick={() => {this.props.onDelete(this.state.prod)}}>
                                <FaTimes />
                            </span>
                        </div>
                        <h5 className="pt-2 border-top">{this.state.prod.productName}</h5>
                        <div>{this.state.prod.price}</div>
                    </div>
                    <div className="card-footer d-flex justify-content-between text-end">
                        <div className="">
                            <div className="btn-group">
                                <span className="badge text-dark my-auto fs-4">{this.state.prod.quantity}</span>
                                <span className="btn btn-outline-success" onClick={() => { this.props.onIncrement(this.state.prod, 10) }}>+</span>
                                <span className="btn btn-outline-success" onClick={() => { this.props.onDecrement(this.state.prod, 0) }}>-</span>
                            </div>
                        </div>
                        <div className="float-right">
                            {this.props.children}
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}