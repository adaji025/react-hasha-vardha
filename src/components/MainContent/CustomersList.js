import React, { Component } from "react";
import styles from './CustomersList .module.css'

export default class CustomersList extends Component {

    state = {
        pageTitle: "Customer",
        customerCount: 5,
        customers: [
            {
                id: 1,
                name: 'one',
                phone: '123456',
                address: {
                    city: 'minna'
                },
                photo: 'https://picsum.photos/id/1010/60'
            },
            {
                id: 2,
                name: 'two',
                phone: null,
                address: {
                    city: 'lapai'
                },
                photo: 'https://picsum.photos/id/1010/60'
            },
            {
                id: 3,
                name: 'three',
                phone: '123456',
                address: {
                    city: 'paiko'
                },
                photo: 'https://picsum.photos/id/1010/60'
            },
            {
                id: 4,
                name: 'four',
                phone: null,
                address: {
                    city: 'agaie'
                },
                photo: 'https://picsum.photos/id/1010/60'
            },
            {
                id: 5,
                name: 'five',
                phone: '123456',
                address: {
                    city: 'lambata'
                },
                photo: 'https://picsum.photos/id/1010/60'
            },
        ]
    }

    getCustomerNameStyle = (cutomerName) => {
        if (cutomerName.startsWith('o')) {
            return "green-highlight"
        } else if (cutomerName.startsWith('t')) {
            return "blue-highlight"
        } else {
            return "yellow-highlight"
        }
    }

    render() {
        return (
            <div className={`main shadow-sm ${styles.MainContent}`}>
                <h4>
                    {this.state.pageTitle}
                    <span className="badge bg-secondary m-2">{this.state.customerCount}</span>
                    <button className="btn btn-info" onClick={this.onRefresh}>Refresh</button>
                </h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Photo</th>
                            <th>name</th>
                            <th>phone</th>
                            <th>city</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getCustomerRow()}
                    </tbody>
                </table>
            </div>
        )
    }

    onRefresh = () => {
        this.setState({
            customerCount: 7
        })
        console.log('refresh click')
    }

    getCustomerRow = () => {
        return (

            this.state.customers.map((customer, index) => {
                return (
                    <tr key={customer.id}>
                        <td>{customer.id}</td>
                        <td>
                            <img src={customer.photo} />
                            <button className="d-block btn btn-sm btn-secondary" onClick={ () => {this.changePictureHandler(customer, index)}}>change Picture</button>
                        </td>
                        <td className={this.getCustomerNameStyle(customer.name)}>{customer.name}</td>
                        <td>{customer.phone ? customer.phone : <div className="bg-warning">No Phone No</div>}</td>
                        <td>{customer.address.city}</td>
                    </tr>
                )
            })

        )
    }

    changePictureHandler = (customer, index) => {
        console.log(customer, index )
        var custArr = this.state.customers;
        custArr[index].photo = 'https://picsum.photos/id/104/60'
        this.setState({customers: custArr})
    }
}