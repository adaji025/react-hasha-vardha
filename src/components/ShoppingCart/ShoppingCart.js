import React, { Component } from "react";
import Product from "../Product/Product";

export default class ShoppingCart extends Component {
    constructor() {
        super()

        console.log("constructor -shoppingCart")
        this.state = {
            products: []
        }
    }

    handleIncrement = (product, maxVal) => {
        let allProducts = [...this.state.products]
        let index = allProducts.indexOf(product)

        if (allProducts[index].quantity < maxVal) {
            allProducts[index].quantity++
            this.setState({ product: allProducts })
        }
    }

    handleDecrement = (product, minVal) => {
        let allProducts = [...this.state.products]
        let index = allProducts.indexOf(product)

        if (allProducts[index].quantity > minVal) {
            allProducts[index].quantity--
            this.setState({ product: allProducts })
        }
    }

    handleDelete = (product) => {
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(product);

        if (window.confirm("Are you sure you want to delete?"))
            allProducts.splice(index, 1)
        this.setState({ products: allProducts })
    }

    componentDidMount = async () => {
        // console.log("componentDidMount -shoppingCart")
        const response = await fetch("http://localhost:5000/products", { method: "GET" });
        const prods = await response.json()
        this.setState({products: prods})
        // console.log(response)

        // promise.then((response) => {

        //     const promise1 = response.json();

        //     promise1.then((prods) => {
        //         this.setState({ products: prods })
        //     })
            
        // })

    }

    componentDidUpdate(prevProps, prevState) {
        console.log("ComponentDidUpdate", prevProps, prevState, this.props, this.state)
    }

    componentWillUnmount() {
        console.log("componentWillUnmount -shoppingCart")
    }
    // componentDidCatch(error, info) {
    //     console.log("componentDidCatch -ShoppingCart")

    //     localStorage.lastError = `${error}\n${JSON.stringify(info)}`
    // }
    render() {
        console.log("Render -shoppingCart")
        return (
            <div className="container-fluid">
                <h1>Shopping Cart</h1>

                <div className="container-fluid">
                    <div className="row">
                        {
                            this.state.products.map((product, index) => {
                                return (
                                    <Product key={product.id}
                                        product={product}
                                        onIncrement={this.handleIncrement}
                                        onDecrement={this.handleDecrement}
                                        onDelete={this.handleDelete} >
                                        <button className='btn btn-success'>Buy now</button>
                                    </Product>

                                )
                            })
                        }
                    </div>

                </div>
            </div>
        )
    }
}